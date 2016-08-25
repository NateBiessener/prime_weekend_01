console.log('script sourced');

var addEmployee = function(){
  var employee = {
    firstName: document.getElementById('firstNameIn').value,
    lastName: document.getElementById('lastNameIn').value,
    employeeId: document.getElementById('employeeIdIn').value,
    jobTitle: document.getElementById('titleIn').value,
    salary:document.getElementById('salaryIn').value
  };
  console.log(employee);
};
