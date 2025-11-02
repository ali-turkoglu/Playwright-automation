import { test } from "@playwright/test";
import { waitForDebugger } from "inspector";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Check", async ({ page }) => {
    // page.locator("text='Checkboxes'")
    let checkBoxesLink = page.locator("//a[@href='/checkboxes']");
    await checkBoxesLink.click();
   // await page.waitForTimeout(2000);

    let checkBox1 = page.locator("//input[@id='box1']");
    await checkBox1.check();
    //await page.waitForTimeout(2000);
  });

  test("Uncheck", async ({ page }) => {
    let checkBoxesLink = page.locator("//a[@href='/checkboxes']");
    await checkBoxesLink.click();

    let checkBox2 = page.locator("#box2"); //CSS locator id=#
    await checkBox2.uncheck();

    //await page.waitForTimeout(3000);
  });

  test("SelectOption", async ({ page }) => {
    let dropdownLink = page.locator("text='Dropdown'");
    await dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    //await simpleDropdown.click();
    //await page.waitForTimeout(2000);
    //await simpleDropdown.selectOption("1");
    //await simpleDropdown.selectOption({label:"Option 1"});
    await simpleDropdown.selectOption({index:1});

    //await page.waitForTimeout(2000);
  });
});
