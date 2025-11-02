//const { test } = require("@playwright/test");
import {test} from "@playwright/test";

test("",async({page})=> {
    // test codes
});

test("Simple google test", async ({ page }) => {
   await page.goto("http://www.google.com");
   //await page.waitForTimeout(3000);
});

