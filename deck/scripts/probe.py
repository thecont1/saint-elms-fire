import os
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8931"
for cand in [
    "/Users/home/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
]:
    if os.path.exists(cand): CHROME=cand; break

ok = True
def check(label, cond, detail=""):
    global ok
    s = "PASS" if cond else "FAIL"
    if not cond: ok = False
    print(f"  [{s}] {label}  {detail}")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path=CHROME)
    page = browser.new_page(viewport={"width":1440,"height":900})
    page.on("pageerror", lambda e: print("PAGEERROR:", e))

    # fresh load at /
    page.goto(BASE+"/", wait_until="networkidle")
    page.wait_for_function("document.querySelectorAll('.slide').length===8")
    page.wait_for_timeout(200)
    check("init at slide 1", page.evaluate("location.pathname")=="/")

    # forward ×3
    for _ in range(3):
        page.keyboard.press("ArrowRight"); page.wait_for_timeout(200)
    check("advanced to 4 via keys", page.evaluate("location.pathname")=="/4")

    # deep link /5 -> lands on 5 and survives a reload
    page.goto(BASE+"/5", wait_until="networkidle")
    page.wait_for_timeout(400)
    check("deep link /5 lands on 5", page.evaluate("location.pathname")=="/5", "transform="+page.evaluate("document.getElementById('track').style.transform"))

    # click brand -> back to 1 (global frozen header lockup)
    page.click(".brand-home")
    page.wait_for_timeout(600)
    check("brand click resets to 1", page.evaluate("location.pathname")=="/")
    check("corona visible after reset", page.evaluate("document.querySelector('.brand-home svg.corona').getBoundingClientRect().width>0"))

    # forward to last, click brand again
    for _ in range(7):
        page.keyboard.press("ArrowRight"); page.wait_for_timeout(200)
    check("at slide 8", page.evaluate("location.pathname")=="/8")
    page.click(".brand-home")
    page.wait_for_timeout(600)
    check("brand click from 8 resets to 1", page.evaluate("location.pathname")=="/")

    # slide index menu: opens, item navigates
    page.click("#menu-btn"); page.wait_for_timeout(200)
    check("menu opens", page.evaluate("document.getElementById('deck-menu').classList.contains('open')"))
    page.click("#menu-list button:nth-child(6)"); page.wait_for_timeout(700)
    check("menu item 6 navigates to /6", page.evaluate("location.pathname")=="/6")
    check("menu closed after navigation", page.evaluate("!document.getElementById('deck-menu').classList.contains('open')"))

    # prev stops at 1, next stops at 8
    page.goto(BASE+"/", wait_until="networkidle"); page.wait_for_timeout(300)
    page.keyboard.press("ArrowLeft"); page.wait_for_timeout(200)
    check("prev at 1 stays at 1", page.evaluate("location.pathname")=="/")
    for _ in range(8):
        page.keyboard.press("ArrowRight"); page.wait_for_timeout(200)
    check("next at 8 stays at 8", page.evaluate("location.pathname")=="/8")

    browser.close()
print("VERDICT:", "OK" if ok else "BROKEN")
