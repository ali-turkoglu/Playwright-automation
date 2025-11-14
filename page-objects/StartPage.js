class StartPage {
  constructor(page) {
    this.page = page;
    this.firstNameBox = page.locator("//*[@formcontrolname='firstName']");
    this.lastNameBox = page.locator("//*[@formcontrolname='lastName']");
    this.emailBox = page.locator("//*[@formcontrolname='email']");
    this.phoneNumberBox = page.locator("//*[@formcontrolname='phoneNumber']");
    this.dropdownMenu = page.locator(
      "//mat-label[text()='How did you hear about us?']"
    );
    this.dropdownOptionEmail = page.locator("//span[text()='Email']");
    this.nextButton = page.locator("//button[@type='submit']");
  }

  async completeStartApplicationStep(firstName, lastName, email, phone) {
    await this.firstNameBox.fill(firstName);
    await this.lastNameBox.fill(lastName);
    await this.emailBox.fill(email);
    await this.phoneNumberBox.fill(phone);
    await this.dropdownMenu.click();
    await this.dropdownOptionEmail.click();
    await this.nextButton.click();
  }
}

module.exports = { StartPage };

/*
let firstNameBox = page.locator('//input[@id="mat-input-0"]');
let lastNameBox = page.locator('//input[@ng-reflect-name="lastName"]');
let emailBox = page.locator('//input[@type="email"]');
let phoneBox = page.locator('//input[@formcontrolname="phoneNumber"]');
let howDidYouHearAboutUsDropDown = page.locator("//mat-label[text()='How did you hear about us?']");
let ProcessStart=page.locator("//div[@id='stepper1']//div[@class='step ng-star-inserted editing']//div[@class='step-circle']");
let ProcessPaymentPlan=page.locator("//div[@id='stepper1']//div[@class='step ng-star-inserted'][2]//div[@class='step-circle']");
let ProcessReview=page.locator("//div[@id='stepper1']//div[@class='step ng-star-inserted'][3]//div[@class='step-circle']");
*/
