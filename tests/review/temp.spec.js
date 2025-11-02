import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeAll(async () => {
    console.log("Before All test case");
  });

  test.afterAll(async () => {
    console.log("After All test case");
  });

  test.beforeEach(async () => {
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

  test("One Single Test Case", async ({ page }) => {
    //Empty test fuction
  });
});
