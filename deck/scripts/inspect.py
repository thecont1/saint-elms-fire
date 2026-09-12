import os
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8931"
CHROME="/Users/home/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path=CHROME)
    page = browser.new_page(viewport={"width":1440,"height":900})
    page.goto(BASE+"/#/1", wait_until="networkidle")
    page.wait_for_function("document.querySelectorAll('.slide').length===8")
    page.wait_for_timeout(300)

    # force to slide 5 and inspect
    page.evaluate("location.hash='#/5'")
    page.wait_for_timeout(700)

    out = page.evaluate("""()=>{
      const deck=document.getElementById('deck');
      const slots=[...document.querySelectorAll('.slide')].map((s,i)=>{
        const r=s.getBoundingClientRect();
        const cs=getComputedStyle(s);
        const inner=s.querySelector('.stage');
        const ir=inner?inner.getBoundingClientRect():null;
        return {
          i:i+1,
          // where the browser thinks this slide is
          rectLeft:Math.round(r.left),
          rectTop:Math.round(r.top),
          rectW:Math.round(r.width),
          rectH:Math.round(r.height),
          display:cs.display,
          visibleInViewport: (r.left<innerWidth && r.right>0 && r.top<innerHeight && r.bottom>0),
          stageInViewport: ir? (ir.left<innerWidth && ir.right>0 && ir.top<innerHeight && ir.bottom>0):null,
          // did the *contents* get laid out at non-zero size?
          stageW: ir?Math.round(ir.width):null, stageH: ir?Math.round(ir.height):null,
          hasText: s.textContent.trim().length>50,
        };
      });
      return {
        deckTransform: deck.style.transform,
        deckRect: (()=>{const r=deck.getBoundingClientRect();return {l:Math.round(r.left),w:Math.round(r.width)}})(),
        bodyScrollW: document.body.scrollWidth,
        viewport: innerWidth+'x'+innerHeight,
        slots
      };
    }""")
    print("deck:", out["deckTransform"], out["deckRect"], "viewport", out["viewport"], "bodyScrollW", out["bodyScrollW"])
    print(f"{'#':>2} {'L':>6} {'W':>6} {'vis':>6} {'stageVis':>9} {'stageW':>6} {'text':>5}")
    for s in out["slots"]:
        print(f"{s['i']:>2} {s['rectLeft']:>6} {s['rectW']:>6} {str(s['visibleInViewport']):>6} {str(s['stageInViewport']):>9} {str(s['stageW']):>6} {str(s['hasText']):>5}")
    browser.close()
