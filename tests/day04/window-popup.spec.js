import { expect, test } from "@playwright/test";

test("Window Pop-up Practice", async ({ page }) => {
  //createign event listener for monitoring window pop up
  let promisedNewPageEvent = page.waitForEvent("popup");

  page.goto("https://practice.cydeo.com/windows");

  await page.click("text='Click Here'"); // triggers the pop-up event

  let newPage = await promisedNewPageEvent; //await for promise to be resolved

  await expect(newPage).toHaveTitle("New Window");
  await expect(page).toHaveTitle("Windows");

  let firstWindowElement = page.getByText("Opening a new window");
  await expect(firstWindowElement).toBeVisible();

  //await page.waitForTimeout(2000);

  let secondWindowElement = newPage.getByText("New Window");
  await expect(secondWindowElement).toBeVisible();

  //-------------------------------------------------

  //await page.waitForTimeout(1000);

  await newPage.bringToFront();

  //await page.waitForTimeout(1000);

  await page.bringToFront();

  //  await page.waitForTimeout(1000);

});
