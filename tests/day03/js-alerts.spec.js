import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  test("Regular Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      await alert.accept();
    });

    await page.locator('//button[@onclick="jsAlert()"]').click();
  });

  test("Confirmation Alert", async ({ page }) => {
    page.on("dialog",async(alert)=> {
        await alert.dismiss();
    });
    await page.locator('//button[@onclick="jsConfirm()"]').click();
  });

  test("Prompt Alert", async ({ page }) => {
    page.on("dialog", async(alert)=>{
        await alert.accept("Das ist Playwright");
    });
        await page.locator('//button[@onclick="jsPrompt()"]').click();
       // await page.waitForTimeout(3000);

  });
});
