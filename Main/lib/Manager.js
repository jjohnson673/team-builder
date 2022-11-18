const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.office = office;
  }

  getRole() {
    return "Manager";
  }

  getSchool() {
    return this.office
  }
    
}

module.exports = Manager;