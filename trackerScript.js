console.log('script sourced');

var employees = [];
var addEmployee = function(){
  employees.push([
    document.getElementById('firstNameIn').value,
    document.getElementById('lastNameIn').value,
    document.getElementById('employeeIdIn').value,
    document.getElementById('titleIn').value,
    document.getElementById('salaryIn').value
  ]);
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
    for (var j = 0; j < employee.length; j++) {
      //add each piece of employee to DOM with customized message
      switch (j) {
        case 0:
          document.getElementById('display').innerHTML += '<p>First Name: ' + employee[j] + '</p>';
          break;
        case 1:
          document.getElementById('display').innerHTML += '<p>Last Name: ' + employee[j] + '</p>';
          break;
        case 2:
          document.getElementById('display').innerHTML += '<p>Employee ID: ' + employee[j] + '</p>';
          break;
        case 3:
          document.getElementById('display').innerHTML += '<p>Job Title: ' + employee[j] + '</p>';
          break;
        case 4:
          document.getElementById('display').innerHTML += '<p>Annual Salary: ' + employee[j] + '</p><br />';
          break;
        default:
          console.log('In switch default. Time to debug');
      }//end switch

    }//end nested for
    totalSalary += parseInt(employee[4]);
  }//end outer for
  document.getElementById('display').innerHTML += '<p>Total salary per month: $' + totalSalary/12 + '</p>';
};//end addEmployee
