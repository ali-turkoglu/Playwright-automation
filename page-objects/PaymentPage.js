class PaymentPage {
  constructor(page) {
    this.page = page;
    this.upfrontPlanOption = page.locator(
      "//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']"
    );
    this.installmentPlanOption = page.locator(
      "//mat-expansion-panel-header[@id='mat-expansion-panel-header-1']"
    );
    this.nextButton = page.locator(
      "//button[@class='next-button' and text()='Next']"
    );
  }

  async completePaymentPlanStep(paymentPlan) {
    const plan = paymentPlan.toLowerCase();
    if (plan === "upfront") {
      await this.upfrontPlanOption.click();
    } else if (plan === "installment" || plan === "installments") {
      await this.installmentPlanOption.click();
    }
    await this.nextButton.click();
  }
}

module.exports = { PaymentPage};