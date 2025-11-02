import { test } from "@playwright/test";

test("", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  //await page.waitForTimeout(3000);

  let actualTitle = await page.title();
  console.log(actualTitle);


});


test("Getting the current Url of the page", async ({ page }) => {

    await page.goto("https://practice.cydeo.com/");
    let actualUrl= page.url();
    console.log(actualUrl);
});

test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  //await page.setViewportSize({width:800,height:500});
  //await page.waitForTimeout(2000);
});