import { test, expect } from "@playwright/test";

test("Iframe Test", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/iframe");

  let myFrame = page.frameLocator("#mce_0_ifr");

  let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");
  await page.waitForTimeout(3000);
  //await elementInsideTheFrame.clear();
  await elementInsideTheFrame.press("Control+A","Backspace");

  await elementInsideTheFrame.fill("Hello Köln!");
  //await page.waitForTimeout(3000);

  await expect(elementInsideTheFrame).toHaveText("Hello Köln!");
});
