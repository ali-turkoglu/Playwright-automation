import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(3000);
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Left Click", async ({ page }) => {
    //let abTestLink = page.locator('//a[@href="/abtest"]');
    //await abTestLink.click();
    await page.click('//a[@href="/abtest"]');
  });

  test("Right Click", async ({ page }) => {
    await page.click('//a[@href="/abtest"]', { button: "right" });
  });

  test("Hover", async ({ page }) => {
    //await page.click('//a[@href="/hovers"]');
    //await page.hover("//img[@src='/img/avatar-blank.jpg']");

    let elements = await page
      .locator("//img[@src='/img/avatar-blank.jpg']")
      .all();

    for (let each of elements) {
      await each.hover();
      await page.waitForTimeout(1000);
    }
  });

  test("Mouse wheel scrolling", async ({ page }) => {
    //await page.waitForTimeout(2000);
    //let inputsLink=await page.mouse.wheel(0,1500);
    let inputsLink = page.getByText("Inputs");
    inputsLink.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    inputsLink.click();
  });

  test("Scrolling to specific element", async ({ page }) => {
    page.locator('//a[@href="/inputs"]');
  });

  test("Drag and Drop", async ({ page }) => {
    let dragAndDropLink = page.locator('//a[@href="/drag_and_drop"]');
    await dragAndDropLink.click();
    await page.waitForTimeout(1000);
    await page.dragAndDrop('//div[@id="column-a"]', '//div[@id="column-b"]');
    await page.waitForTimeout(1000);
    await page.dragAndDrop('//div[@id="column-b"]', '//div[@id="column-a"]');
//----------------------------------------------------------------------------------------------
    let squareElementA= page.locator('//div[@id="column-a"]');
    let squareElementB= page.locator('//div[@id="column-b"]');

    await squareElementA.dragTo(squareElementB);
  });
});
