import { test, expect } from "@playwright/test";

test("Web Tables", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator('//table[@class="SampleTable"]');

  let allRows = await table.locator("//tr").all();
  console.log(allRows.length);

  let columns = await table.locator("//th").all();
  console.log(columns.length);

  let cells = await table.locator("//td").all();
  console.log(cells.length);

  expect(allRows.length === 9).toBeTruthy();
  expect(allRows.length).toBe(9);
  expect(columns.length).toBe(13);
  expect(cells.length).toBe(104);

  for (let each of cells) {
    console.log(await each.textContent());
  }
});

test("Web Tables get row", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator('//table[@class="SampleTable"]');

  let allRows = await table.locator("//tr").all();

  /* for (let row of allRows) {
    let cells = await row.locator("//td").all();
    for (let cell of cells) {
      console.log(await cell.textContent());
    }
    console.log("----------------------------------------------------");
  }
    */
  for (let row of allRows) {
    let cells = await row.locator("//td").all();
    for (let i = 1; i < cells.length - 1; i++) {
      console.log(await cells[i].textContent());
    }
    console.log("-----------------------------");
  }
});

test("Web Tables checkboxes", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator('//table[@class="SampleTable"]');

  let checkboxes = await table.locator('//input[@type="checkbox"]').all();

  for(let each of checkboxes){
    await each.click();
    await expect(each).toBeChecked();
  }
  await page.waitForTimeout(2000);
});
