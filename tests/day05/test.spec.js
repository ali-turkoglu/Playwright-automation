import { test, expect } from "@playwright/test";

test("Verify all links under ul tag are visible and enabled on practice.cydeo", async ({
  page,
}) => {
  // Step 1 and 2: Open Chrome browser and navigate to the URL
  await page.goto("https://practice.cydeo.com/");

  // Step 3: Verify the URL contains "practice.cydeo"
  await expect(page).toHaveURL(/practice\.cydeo/);

  // Step 4: Verify the title is "Practice"
  await expect(page).toHaveTitle("Practice");

  // Step 5: Verify all links under the ul with class 'list-group' are visible and clickable
  const links = page.locator(
    "//div[@id='content']//ul[@class='list-group']//a"
  );

  const count = await links.count();
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toBeVisible();
    await expect(links.nth(i)).toBeEnabled();
  }
});
