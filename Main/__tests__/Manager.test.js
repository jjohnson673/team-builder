const Manager = require("../lib/Manager");

test("Can set office via constructor", () => {
  //code goes here
  const testValue = 100;
  const e = new Manager("Joe", 1, "test@test.com", testValue);
  expect(e.office).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  //code goes here
  const testValue = "Manager";
  const e = new Manager("Joe", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office via getOffice()", () => {
  //code goes here
  const testValue = "office";
  const e = new Manager("Joe", 1, "test@test.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});