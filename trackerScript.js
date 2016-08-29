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
};//end addEmployee

var deleteEmployee = function(index){
  employees.splice(index, 1);
  displayEmployees();
};//end deleteEmployee

var displayEmployees = function(){
  //clear form fields
  document.getElementById('firstNameIn').value = '';
  document.getElementById('lastNameIn').value = '';
  document.getElementById('employeeIdIn').value = '';
  document.getElementById('titleIn').value = '';
  document.getElementById('salaryIn').value = '';
  //clear display
  document.getElementById('display').innerHTML = '';
  document.getElementById('salaryPerMonth').innerHTML = '';
  //create variable for total salary
  var totalSalary = 0;
  for (var i = 0; i < employees.length; i++) {
    //create var for each employee for readability purposes
    var employee = employees[i];
    //display employee data on DOM. Create div that displays inline-block to avoid excessive vertical stack
    //looks ugly, but had to make it all one line of code to wrap it in a div
    document.getElementById('display').innerHTML += '<div style="display:inline-block; width:250px;"><p>First Name: ' + employee.firstName + '</p><p>Last Name: ' + employee.lastName + '</p><p>Employee ID: ' + employee.empId + '</p><p>Job Title: ' + employee.jobTitle + '</p><p>Annual Salary: $' + employee.salary + '</p><button onclick="deleteEmployee(' + i + ')" id="employeeDeleteButton">Delete This Employee</button></div>';//end display add. Each emp will have a delete button.
    //calculate totalSalary
    totalSalary += parseInt(employee.salary);
  }//end for
  //calculate totalSalary per month and set its type to String
  var salPerMonth = String(totalSalary/12);
  //if salPerMonth is a float, then if there are more than two digits after the decimal, deconstruct the string and reconstruct it with only two digits after the decimal
  if (salPerMonth.split('.')[1]){
    if (salPerMonth.split('.')[1].length > 2) {
      salPerMonth = salPerMonth.split('.')[0] + '.' + salPerMonth.split('.')[1].slice(0,2);
    }//end nested if
  }//end if
  //display totalSalary per month
  document.getElementById('salaryPerMonth').innerHTML += '<p>Total salary per month: $' + salPerMonth + '</p>';
};//end addEmployee
