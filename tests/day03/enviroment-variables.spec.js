import { test } from '@playwright/test';

test('@env_test Testing environment variables', async ({ page }) => {
  console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);
});

test("Bypass authentication by embedding the credentials base64 format", async ({ page }) => {

    let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
    
    page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredential}`});

    await page.goto("https://practice.cydeo.com/basic_auth");

    await page.waitForTimeout(3000);

});


   