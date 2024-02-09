const EmployeeDB = {};

function EmployeeDB() {
  this.employees = [];

  this.addEmployee = function(name, pos, dep) {
    this.employees.push({name, pos, dep});
  }
  this.removeEmployee = function(name) {
    this.employees = this.employees.filter(employee.name !== name);
  }
  this.updateEmployee = function() {
    return null;
  }


  this.employees = function() {
    this.employees.forEach(function(employee) {employee.name = employee.name.toUpperCase()});
  }
  this.employees = function() {
    this.employees.forEach(function(employee) {employee.dep = employee.dep.toLowerCase()});
  }
  this.employees = function() {
    this.employees.forEach(function(employee) {employee.pos = employee.pos.toLowerCase()});
  }
  
  this.listEmployees = function () {
    this.employees.forEach( employee => {
        console.log(`name ${employee.name}`, `pos ${employee.pos}`, `dep ${employee.dep}`)
      })
  }

  function mergeEmployeeDBs (db1, db2) {
    db2.employees.forEach(function (employee)
    {
      db1.addEmployee(employee.name, employee.pos, employee.dep)
    });
  }

  function UniqueDep() {
    const deps = {};
    for (const employee of EmployeeDB.employees) {
      const {dep} = employee;
      deps[dep] = true;
    }
  }
}
