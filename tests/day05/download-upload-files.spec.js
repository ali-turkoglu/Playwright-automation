import { expect, test } from "@playwright/test";
import path from "path"; // to download we must import
import fs from "fs";
import { runInContext } from "vm";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Download a File", async ({ page }) => {
    await page.click('text="File Download"');

    //create event listener for download
    let promiseFileDownload = page.waitForEvent("download");

    await page.click('//a[@href="download/sample.txt"]'); //trigger the download event

    let download = await promiseFileDownload; //

    let downloadPath = path.join(
      __dirname,
      "./downloads",
      download.suggestedFilename()
    ); // path and filename

    await download.saveAs(downloadPath);

    expect(fs.existsSync(downloadPath)).toBeTruthy();

    //await page.waitForTimeout(2000);
  });

  test("Upload a File", async ({ page }) => {
    
    await page.click("text='File Upload'");

    let filepath = path.join(__dirname, "./uploads", "TextFile.txt");

    //await page.waitForTimeout(2000);

    await page.setInputFiles("//input[@id='file-upload']", filepath);

    //await page.waitForTimeout(2000);

    await page.click('//input[@class="button"]');

   // await page.waitForTimeout(2000);

    await expect(page.getByText("File Uploaded!")).toBeVisible();
  });
});
