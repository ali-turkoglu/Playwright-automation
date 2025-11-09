import { test } from "@playwright/test";

test("Payment Page Test", async ({ page }) => {

  // Login Criteria
  await CommonUI.login_SEP_Page(page);

  // Start Application Step:
  await CommonUI.completeStartApplicationStep(
    page,
    "Ali",
    "TR",
    "aa@a.com",
    "2234234"
  );

  await page.waitForTimeout(2000);

  // Payment Plan Step:
  await CommonUI.completePaymentPlanStep(page, "upfront");

  await page.waitForTimeout(3000);

  // submit payment step:

  await CommonUI.completeSubmitPaymentStep(
    page,
    "4242424242424242",
    "01/30",
    "123",
    "12345"
  );

  await page.waitForTimeout(3000);
});

class CommonUI {

static async login_SEP_Page(page){
    let encodedCredential = Buffer.from(
    `${process.env.USERNAME_SEP}:${process.env.PASSWORD_SEP}`
  ).toString("base64");

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });

  await page.goto("https://qa.sep.tdtm.cydeo.com/taws");
}

  static async completeStartApplicationStep(
    page,
    firstName,
    lastName,
    email,
    phone
  ) {
    let userNameBox = page.locator("//*[@formcontrolname='firstName']");
    await userNameBox.fill(firstName);

    let lastNameBox = page.locator("//*[@formcontrolname='lastName']");
    await lastNameBox.fill(lastName);

    let emailBox = page.locator("//*[@formcontrolname='email']");
    await emailBox.fill(email);

    let phoneNumberBox = page.locator("//*[@formcontrolname='phoneNumber']");
    await phoneNumberBox.fill(phone);

    let dropdownMenu = page.locator(
      "//mat-label[text()='How did you hear about us?']"
    );
    await dropdownMenu.click();

    await page.click("//span[text()='Email']");

    let homepageNextButton = page.locator("//button[@type='submit']");
    await homepageNextButton.click();
  }

  static async completePaymentPlanStep(page, paymentPlan) {
    paymentPlan = paymentPlan.toLowerCase();

    switch (paymentPlan) {
      case "upfront":
        let upfrontPaymentPlanOption = page.locator(
          "//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']"
        );
        await upfrontPaymentPlanOption.click();
        break;

      case "installment":
      case "installments":
        let installmentPaymentPlanOption = page.locator(
          "//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']"
        );
        await installmentPaymentPlanOption.click();
        break;
    }

    let nextButton2 = page.locator(
      "//button[@class='next-button' and text()='Next']"
    );
    await nextButton2.click();
  }

  static async completeSubmitPaymentStep(
    page,
    cardNumber,
    expiryDate,
    securityCode,
    zipCode
  ) {
    let paymentFrame = page.frameLocator(
      "//iframe[@title='Secure payment input frame']"
    );

    let cardNumberInput = paymentFrame.locator(
      "//input[@id='Field-numberInput']"
    );
    await cardNumberInput.fill(cardNumber);

    let expiryDateInput = paymentFrame.locator(
      "//input[@id='Field-expiryInput']"
    );
    await expiryDateInput.fill(expiryDate);

    let securityCodeInput = paymentFrame.locator(
      "//input[@id='Field-cvcInput']"
    );
    await securityCodeInput.fill(securityCode);

    let zipCodeInput = paymentFrame.locator(
      "//input[@id='Field-postalCodeInput']"
    );
    await zipCodeInput.fill(zipCode);

    let termsAndConditionsCheckbox = page.locator(
      "//input[@id='defaultCheck2']"
    );
    await termsAndConditionsCheckbox.check();

    let payButton = page.locator(
      "//button[@type='button' and contains(@class, 'next-button')]"
    );
    await payButton.click();
  }

}
