import { test } from "@playwright/test";

test("Wikipedia Page", async ({ page }) => {
  await page.goto("https://wikipedia.com");
  //await page.waitForTimeout(3000);
});
