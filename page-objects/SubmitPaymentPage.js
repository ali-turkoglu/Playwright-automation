
class SubmitPaymentPage {
  constructor(page) {
    this.page = page;
    this.paymentFrame = page.frameLocator(
      "//iframe[@title='Secure payment input frame']"
    );
    this.cardNumberInput = this.paymentFrame.locator(
      "//input[@id='Field-numberInput']"
    );
    this.expiryDateInput = this.paymentFrame.locator(
      "//input[@id='Field-expiryInput']"
    );
    this.securityCodeInput = this.paymentFrame.locator(
      "//input[@id='Field-cvcInput']"
    );
    this.countryInput = this.paymentFrame.locator(
      "//select[@id='Field-countryInput']");

    this.zipCodeInput=this.paymentFrame.locator("//input[@id='Field-postalCodeInput']");

    this.termsAndConditionsCheckbox = page.locator(
      "//input[@id='defaultCheck2']"
    );
    this.payButton = page.locator(
      "//button[@type='button' and contains(@class, 'next-button')]"
    );
  }

  async completeSubmitPaymentStep(
    cardNumber,
    expiryDate,
    securityCode,
    countryInput,
    zipCode
  ) {
    await this.cardNumberInput.fill(cardNumber);
    await this.expiryDateInput.fill(expiryDate);
    await this.securityCodeInput.fill(securityCode);
    await this.countryInput.selectOption(countryInput); // for dropdown
    await this.zipCodeInput.fill(zipCode);
    await this.termsAndConditionsCheckbox.check();
    await this.payButton.click();
  }
}

module.exports = { SubmitPaymentPage };