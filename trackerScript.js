console.log('script sourced');

var employees = [];
var addEmployee = function(){
  employees.push({
    firstName: document.getElementById('firstNameIn').value,
    lastName: document.getElementById('lastNameIn').value,
    empId: document.getElementById('employeeIdIn').value,
    jobTitle: document.getElementById('titleIn').value,
    salary: document.getElementById('salaryIn').value
  });
  displayEmployees();
};

var displayEmployees = function(){
  //clear form fields
  document.getElementById('firstNameIn').value = '';
  document.getElementById('lastNameIn').value = '';
  document.getElementById('employeeIdIn').value = '';
  document.getElementById('titleIn').value = '';
  document.getElementById('salaryIn').value = '';
  //clear display
  document.getElementById('display').innerHTML = '';
  //create variable for total salary
  var totalSalary = 0;
  for (var i = 0; i < employees.length; i++) {
    //create var for each employee for readability purposes
    var employee = employees[i];
    //display employee data on DOM
    document.getElementById('display').innerHTML += '<p>First Name: ' + employee.firstName + '</p>';
    document.getElementById('display').innerHTML += '<p>Last Name: ' + employee.lastName + '</p>';
    document.getElementById('display').innerHTML += '<p>Employee ID: ' + employee.empId + '</p>';
    document.getElementById('display').innerHTML += '<p>Job Title: ' + employee.jobTitle + '</p>';
    document.getElementById('display').innerHTML += '<p>Annual Salary: $' + employee.salary + '</p><br />';
    totalSalary += parseInt(employee.salary);
  }//end for
  document.getElementById('display').innerHTML += '<p>Total salary per month: $' + totalSalary/12 + '</p>';
};//end addEmployee

var deleteEmployee = function(){
  //marshall variables
  var firstName = document.getElementById('deleteFirstNameIn').value;
  var lastName = document.getElementById('deleteLastNameIn').value;
  //clear form fields
  document.getElementById('deleteFirstNameIn').value = '';
  document.getElementById('deleteLastNameIn').value = '';
  //search for employee by lastName, confirm firstName matches, then remove employee from employees
  var empMatches = [];
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].lastName.toUpperCase() === lastName.toUpperCase()) {
      if (employees[i].firstName.toUpperCase() === firstName.toUpperCase()) {
        empMatches.push(employees[i]);
      }//end inner if
    }//end outer if
  }//end for
  switch (empMatches.length) {
    case 0:
      alert('No matching records. Please enter an existing employee name.')
    case 1:
      employees.splice(employees.indexOf(empMatches[0]), 1);
      break;
    default:
      //add ability to choose which employee of multiple found to remove
      console.log('More than one matching employee found. Feature coming soon.');
  }
  displayEmployees();
};//end deleteEmployee
