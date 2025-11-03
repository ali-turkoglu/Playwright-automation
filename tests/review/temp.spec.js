import { test } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
    // test body
  });

  test("A", async ({ page }) => {
    // test body
  });

  test("B", async ({ page }) => {
    // test body
  });

  test("C", async ({ page }) => {
    // test body
  });
});

test("One Single Test Case", async ({ page }) => {
  //Empty test fuction
});

test.describe("Test Group2", () => {
  test.beforeAll(async ({ page }) => {
    console.log("Before All test case");
  });

  test.afterAll(async ({ page }) => {
    console.log("After All test case");
  });

  test.beforeEach(async ({ page }) => {
    console.log("Before Each function is executed");
  });

  test("A", async ({ page }) => {
    // test body
  });

  test("B", async ({ page }) => {
    // test body
  });

  test("C", async ({ page }) => {
    // test body
  });
});
