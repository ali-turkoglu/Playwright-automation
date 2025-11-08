import{test, expect} from "@playwright/test"

test("Bypass authentication by embedding the credentials in the URL", async ({ page }) => {
  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
  expect(await page.title()).toBe("Basic Auth");
});


test("Bypass authentication by embedding the credentials base64 format", async ({ page }) => {

    let encodedCredential = Buffer.from("admin:admin").toString("base64");
    
    page.setExtraHTTPHeaders({'Authorization':`Basic ${encodedCredential}`});

    await page.goto("https://practice.cydeo.com/basic_auth");

});