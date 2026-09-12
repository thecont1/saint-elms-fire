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

    # fresh load at #/1
    page.goto(BASE+"/#/1", wait_until="networkidle")
    page.wait_for_function("document.querySelectorAll('.slide').length===8")
    page.wait_for_timeout(200)
    check("init at slide 1", page.evaluate("location.hash")=="#/1")

    # forward ×3
    for _ in range(3):
        page.keyboard.press("ArrowRight"); page.wait_for_timeout(200)
    check("advanced to 4 via keys", page.evaluate("location.hash")=="#/4")

    # reload at #/5 -> stays on 5
    page.goto(BASE+"/#/5", wait_until="networkidle")
    page.wait_for_timeout(400)
    check("reload at #/5 stays on 5", page.evaluate("location.hash")=="#/5", "transform="+page.evaluate("document.getElementById('deck').style.transform"))

    # click brand -> back to 1 (target the logo inside the CURRENTLY VISIBLE slide)
    page.click(".slide:nth-of-type(5) .brand-home")
    page.wait_for_timeout(600)
    check("brand click resets to 1", page.evaluate("location.hash")=="#/1")
    check("first slide logo visible after reset", page.evaluate("document.querySelectorAll('.slide')[0].querySelector('.brand img').complete"))

    # forward to last, click brand again
    for _ in range(7):
        page.keyboard.press("ArrowRight"); page.wait_for_timeout(200)
    check("at slide 8", page.evaluate("location.hash")=="#/8")
    page.click(".slide:nth-of-type(8) .brand-home")
    page.wait_for_timeout(600)
    check("brand click from 8 resets to 1", page.evaluate("location.hash")=="#/1")

    # prev stops at 1, next stops at 8
    page.keyboard.press("ArrowLeft"); page.wait_for_timeout(200)
    check("prev at 1 stays at 1", page.evaluate("location.hash")=="#/1")
    for _ in range(8):
        page.keyboard.press("ArrowRight"); page.wait_for_timeout(200)
    check("next at 8 stays at 8", page.evaluate("location.hash")=="#/8")

    browser.close()
print("VERDICT:", "OK" if ok else "BROKEN")
