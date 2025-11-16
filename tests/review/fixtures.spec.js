import { test } from "@playwright/test";

test("Context Fixture Demo", async ({ context }) => {
  let page1 = await context.newPage();
  let page2 = await context.newPage();
  let page3 = await context.newPage();
  let page4 = await context.newPage();

  await page4.waitForTimeout(2000);

  page1.bringToFront();
  await page1.goto("https://www.youtube.com");

  await page4.waitForTimeout(2000);

  page2.bringToFront();
  await page2.goto("https://github.com/");

  await page4.waitForTimeout(2000);

  page3.bringToFront();
  await page3.goto("https://www.linkedin.com/feed/");

  await page4.waitForTimeout(2000);

  page4.bringToFront();
  await page4.goto("https://www.facebook.com/");
});


test("Browser Fixture Demo", async ({ browser }) => {
  
let context1= await browser.newContext();
let context2= await browser.newContext();

let page1= await context1.newPage();
let page2= await context1.newPage();

let page3= await context2.newPage();
let page4= await context2.newPage();

await page1.waitForTimeout(2000);

  page1.bringToFront();
  await page1.goto("https://www.youtube.com");
  await page4.waitForTimeout(2000);

  page2.bringToFront();
  await page2.goto("https://github.com/");
  await page4.waitForTimeout(2000);

  page3.bringToFront();
  await page3.goto("https://www.linkedin.com/feed/");
  await page4.waitForTimeout(2000);

  page4.bringToFront();
  await page4.goto("https://www.facebook.com/");
  await page4.waitForTimeout(2000);


});