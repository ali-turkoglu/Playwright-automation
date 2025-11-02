import { test } from "@playwright/test";

test.describe("Test Group 1 @testGroup1", () => {
  test.beforeAll(async () => {
    console.log("Before All test case");
  });

  test.afterAll(async () => {
    console.log("After All test case");
  });

  test.beforeEach(async () => {
    console.log("Before Each function is executed");
  });

  test.afterEach(async () => {
    console.log("After Each function is executed");
  });

  test("Test Case 1", async () => {
    console.log("Test Case 1 is executed");
  });

  test("Test Case 2", async () => {
    console.log("Test Case 2 is executed");
  });

  test("Test Case 3", async () => {
    console.log("Test Case 3 is executed");
  });
});
