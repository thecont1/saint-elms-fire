import os, sys
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8931"
OUT = "/Users/home/hermes-workspace/st-elms-fire-deck/shots"
os.makedirs(OUT, exist_ok=True)

# playwright bundled browser in caches
CHROME = None
for cand in [
    "/Users/home/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
    "/Users/home/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium",
    "/Users/home/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
    "/Users/home/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]:
    if os.path.exists(cand):
        CHROME = cand
        break
print("CHROME =", CHROME)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path=CHROME)
    page = browser.new_page(viewport={"width": 1440, "height": 900}, device_scale_factor=2)
    page.goto(BASE + "/#/1", wait_until="networkidle")
    # deck init
    page.wait_for_function("document.querySelectorAll('.slide').length===8")
    page.evaluate("window.__initDeck && window.__initDeck()")
    page.wait_for_timeout(400)
    n = page.evaluate("document.querySelectorAll('.slide').length")
    print("slides:", n)
    for i in range(n):
        if i > 0:
            page.evaluate(f"document.getElementById('next').click()")
            page.wait_for_timeout(650)
        path = os.path.join(OUT, f"slide-{i+1}.png")
        page.screenshot(path=path)
        # basic checks: logo visible, no vertical scroll overflow on stage
        info = page.evaluate(
            """(i)=>{
              const slide=document.querySelectorAll('.slide')[i];
              const img=document.querySelector('.deck-head .brand img, .deck-head .brand svg.corona');
              const r=img.getBoundingClientRect();
              const stage=slide.querySelector('.stage');
              const sh=stage.scrollHeight, ch=stage.clientHeight;
              const body=document.body;
              const all=[...document.querySelectorAll('body *')];
              const overX=Math.max(...all.map(el=>{const b=el.getBoundingClientRect();return Math.max(0, b.right - innerWidth);}));
              return {slide:i+1, logoVisible: r.width>0 && r.height>0, stageOverflowY: sh-ch, maxOverX: Math.round(overX)};
            }""", i)
        print("  ", info)
    browser.close()
print("DONE")
