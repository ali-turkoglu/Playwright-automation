// paymentPage.spec.js - Test using the refactored POM classes

const { test } = require("@playwright/test");
const { StartPage } = require("../../page-objects/StartPage");
const { PaymentPage } = require("../../page-objects/PaymentPage");
const { SubmitPaymentPage } = require("../../page-objects/SubmitPaymentPage");



test("Payment Page Test", async ({ page }) => {
  // Login step (can also be moved to a LoginPage POM if desired)
  let encodedCredential = Buffer.from(
    `${process.env.USERNAME_SEP}:${process.env.PASSWORD_SEP}`
  ).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });
  await page.goto("https://qa.sep.tdtm.cydeo.com/taws");

  const startPage = new StartPage(page);
  await startPage.completeStartApplicationStep(
    "Ali",
    "TR",
    "aa@a.com",
    "2234234"
  );

  await page.waitForTimeout(2000);

  const paymentPage = new PaymentPage(page);
  await paymentPage.completePaymentPlanStep("upfront");

  await page.waitForTimeout(3000);

  const submitPaymentPage = new SubmitPaymentPage(page);
  await submitPaymentPage.completeSubmitPaymentStep(
    "4242424242424242",
    "01/30",
    "123",
    "US",
    "12345"
  );

  await page.waitForTimeout(3000);
});
