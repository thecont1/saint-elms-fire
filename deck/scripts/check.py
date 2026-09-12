import os
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8931"
CHROME = None
for cand in [
    "/Users/home/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
    "/Users/home/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
]:
    if os.path.exists(cand):
        CHROME = cand
        break

issues = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path=CHROME)
    page = browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE+"/", wait_until="networkidle")
    page.wait_for_function("document.querySelectorAll('.slide').length===8")
    page.evaluate("window.__initDeck && window.__initDeck()")
    page.wait_for_timeout(400)
    n = page.evaluate("document.querySelectorAll('.slide').length")
    for i in range(n):
        if i > 0:
            page.evaluate("document.getElementById('next').click()")
            page.wait_for_timeout(600)
        chk = page.evaluate(
            """(i)=>{
              const s=document.querySelectorAll('.slide')[i];
              const r=el=>el?el.getBoundingClientRect():null;
              const img=document.querySelector('.brand-home svg.corona');
              const h=s.querySelector('h1,h2');
              const stage=s.querySelector('.stage');
              const foot=s.querySelector('.foot');
              const cards=[...s.querySelectorAll('.card')];
              const crs=cards.map(c=>{
                const b=c.getBoundingClientRect();
                return {h:Math.round(b.height), bottom:Math.round(b.bottom)};
              });
              const br=r(document.querySelector('.brand'));
              const sr=r(stage);
              const fr=r(foot);
              const hr=r(h);
              // horizontal overflow inside slide
              let overX = 0;
              for (const el of s.querySelectorAll('*')){
                const b=el.getBoundingClientRect();
                const o = b.right - innerWidth;
                if (o>overX) overX=o;
              }
              return {
                slide:i+1,
                brandW:Math.round(br.width),
                logoOk: img && img.getBoundingClientRect().width>0,
                heading: h.textContent.slice(0,60),
                stageH: stage.scrollHeight, stageC: stage.clientHeight,
                foot: fr ? Math.round(fr.top)+'/'+Math.round(fr.bottom) : null,
                headingTop: hr.top,
                footViewport: fr.bottom <= innerHeight+0.5,
                overX: Math.round(overX),
                cards: crs
              };
            }""", i)
        issues.append(chk)
    browser.close()

all_flags = []
for c in issues:
    flags = []
    if not c["logoOk"]: flags.append("LOGO_MISSING")
    if c["stageH"] - c["stageC"] > 4: flags.append(f"STAGE_SCROLL (+{c['stageH']-c['stageC']}px)")
    if not c["footViewport"]: flags.append("FOOTER_OFFSCREEN")
    if c["overX"] > 1: flags.append(f"HORZ_OVERFLOW {c['overX']}px")
    hs = [x["h"] for x in c["cards"]]
    if hs and max(hs)-min(hs) > 4:
        flags.append(f"CARDS_VARY {min(hs)}-{max(hs)}")
    print(f"slide {c['slide']}: brand={c['brandW']}px stage={c['stageC']}px foot={c['foot']} overX={c['overX']} cards={hs if hs else '-'}")
    if flags:
        print("   !!", "; ".join(flags))
    all_flags.extend(flags)
print("VERDICT:", "WARN" if all_flags else "OK")
