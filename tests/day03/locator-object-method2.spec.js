import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("innerText(): retrives the visible text", async ({ page }) => {
    let homePageHeader = page.locator("//span[@class='h1y']");
    let actualText = await homePageHeader.innerText();
    console.log(actualText);
  });

  test("inputValue(): only works with <input>,<textarea>,<select> retrives the input value ", async ({page,}) => {
    let inputLinkElement = page.locator("//ul/li/a[@href='/inputs']");
    await inputLinkElement.click();

    let inputBoxElement = page.locator("//input[@type='number']");
    await inputBoxElement.type("33");

    let actualInput= await inputBoxElement.inputValue();
    console.log(actualInput);
  });

  test("getAttribute(): retrieves the attribute value", async ({ page }) => {
    // <a href="/abtest">A/B Testing</a>
    let abTestingLink=page.locator("text='A/B Testing'");
    let hrefLink = await abTestingLink.getAttribute("href");

    console.log(hrefLink);
  });
});
