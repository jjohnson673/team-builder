const Intern = require("../lib/Intern");


test("Can set School via constructor", () => {
    //code goes here
    const school = "school";
    const e = new Intern("Sally", 1, "test@test.com", school);
    expect(e.school).toBe(school);
  });
  
  test("getRole() should return \"Intern\"", () => {
    //code goes here
    const testValue = "Intern";
    const e = new Intern("Sally", 1, "test@test.com", "school");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    //code goes here
    const testValue = "school";
    const e = new Intern("Sally", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });