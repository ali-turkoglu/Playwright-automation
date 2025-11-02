import { test } from "@playwright/test";

test("Simple google test", async ({ page }) => {
  await page.goto("https://yandex.com/");

  let searchBox = page.locator(
    "//input[@id='text']"
  ); 

  //await page.waitForTimeout(3000);

  //await searchBox.type("Köln Bibliothek");
  await searchBox.fill("Köln");

  //await page.waitForTimeout(3000);

  searchBox.press("Enter");

  //await page.waitForTimeout(3000);
});

/*
https://www.google.com
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Ara" value="" aria-label="Ara" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjIsdGs3syQAxXgRf4FHUYOMv8Q39UDCB8"></textarea>
*/
// textarea[@class='gLFyf']

/*
<input class="search3__input mini-suggest__input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-autocomplete="list" aria-label="Sorgu" id="text" maxlength="400" autofocus="" placeholder="Yazeka ile Bul" name="text" role="combobox" aria-controls="suggest-list-21864504">
*/
