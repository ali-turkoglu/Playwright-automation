import { test, expect } from "@playwright/test";

test("Google search for CYDEO", async ({ page }) => {
  // Step 1 and 2: Open Chrome browser and navigate to Google
  await page.goto("https://www.yandex.com.tr/");

  // Step 3: Verify the title is "Google"
  await expect(page).toHaveTitle("Yandex — hızlı İnternet araması");

  // Step 4: Enter "CYDEO" in the search box and press Enter
  const searchBox = page.locator(
    "//input[@class='search3__input mini-suggest__input']"
  );
  await searchBox.fill("CYDEO");
  await searchBox.press("Enter");

  // Step 5: Verify the page title contains "CYDEO"
  await expect(page).toHaveTitle(/CYDEO/);
});
