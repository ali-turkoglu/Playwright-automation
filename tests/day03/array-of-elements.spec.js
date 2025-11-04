/*
1. Verify that there are exactly 50 link elements within the <ul> tag.
2. Verify that each of the 50 link elements within the <ul> tag is visible & clickable.
3. Verify that each of the 50 link elements within the <ul> tag has a href attribute.
*/

import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {
  let fiftyElements;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    expect(await page.title()).toBe("Practice");
    fiftyElements = await page.locator("//li[@class='list-group-item']/a").all();
  });

  test("Verify that there are exactly 50 link elements within the <ul> tag", async ({page,}) => {
    expect(fiftyElements.length).toBe(50);
  });

  test("Verify that each of the 50 link elements within the <ul> tag is visible & clickable", async ({page,}) => {
    for (let element of fiftyElements) {
      expect(element).toBeVisible;
      expect(await element.isVisible()).toBeTruthy();

      await expect(element).toBeEnabled();
      expect(await element.isEnabled()).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> tag has a href attribute", async ({
    page,
  }) => {
    for (let element of fiftyElements) {
      await expect(element).toHaveAttribute("href");
      console.log(await element.getAttribute("href"));
    }
  });
});
