import { expect, test } from "@playwright/test";

test.describe("Test Group 1 @testGroup1", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    //let expectedTitle = "Practice";
    //let actualTitle = await page.title();
    //expect(expectedTitle === actualTitle).toBeTruthy();
    expect(await page.title()).toBe("Practice");
    await expect(page).toHaveTitle("Practice");
  });

  test("Verify checkboxes are checked", async ({ page }) => {
    await page.locator("text='Checkboxes'").click();

    let firstCheckBox = page.locator("//input[@id='box1']");
    let secondCheckBox = page.locator("//input[@id='box2']");

    await firstCheckBox.check();
    await secondCheckBox.check();

    await expect(firstCheckBox).toBeChecked();
    await expect(secondCheckBox).toBeChecked();
    //---------------------------------------------------------------------

    expect(await firstCheckBox.isChecked()).toBeTruthy();
    expect(await secondCheckBox.isChecked()).toBeTruthy();
  });

  test("Verify checkedboxes are unchecked", async ({ page }) => {
    await page.locator("text='Checkboxes'").click();

    let firstCheckBox = page.locator("//input[@id='box1']");
    let secondCheckBox = page.locator("//input[@id='box2']");

    await firstCheckBox.uncheck();
    await secondCheckBox.uncheck();

    expect(firstCheckBox).not.toBeChecked();
    expect(secondCheckBox).not.toBeChecked();

    //---------------------------------------------------------------------

    expect(await firstCheckBox.isChecked()).toBeFalsy();
    expect(await secondCheckBox.isChecked()).toBeFalsy();
  });

  test("Verify text of the element", async ({ page }) => {
   
    let homePageTitle=page.locator("//span[@class='h1y']");
    await expect(homePageTitle).toHaveText("Test Automation Practice");

    //-------------------------------------------
    let expectedText = "Test Automation Practice";
    let actualText = await page.locator("//span[@class='h1y']").innerText();
    //let expectedText = page.locator(page.locator("//span[@class='h1y']"));

    expect(actualText).toEqual(expectedText);

  });
});
