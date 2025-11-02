import { test } from "@playwright/test";

test.describe("Practice.cydeo", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test.afterEach(async ({page}) => {
    //await page.waitForTimeout(3000);
  });

  test("title of page", async ({ page }) => {
    let actualTitle = await page.title();
    console.log(actualTitle);
  });

  test("url of page", async ({ page }) => {
    console.log(page.url());
  });
});
