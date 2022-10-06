var empDetails = [];

class EmployeeDetails {
  constructor (employeeID ,   employeeName , employeeSalary){
    this.employeeID= employeeID;
    this.employeeName=employeeName;
    this.employeeSalary=employeeSalary;
  }
}
function submitDetails() {
  var c = 0;
  var employeeID = document.getElementById("EmpID").value;
  var employeeName = document.getElementById("EmpName").value;
  var employeeSalary = document.getElementById("EmpSal").value;
  employeeSalary = Number(employeeSalary);

  const myEmpDetails =new EmployeeDetails(employeeID , employeeName , employeeSalary);

  empDetails.push(myEmpDetails);
  console.log(empDetails);
  display();

}

function display() {
  var c = 0;
  
  t =
    " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Salary:</th>  <th>Action:</th></tr> ";

  t = empDetails.forEach((value) => {
    t +=
      "<tr><td>" +
      value.employeeID +
      "</td>" +
      "<td>" +
      value.employeeName +
      "</td>" +
      "<td>" +
      value.employeeSalary +
      "</td>" +
      "<td><button id='" +
      c +
      "' onclick='deleteDetails(id)'>Delete</button></td></tr>";
    c++;
    document.getElementById("table1").innerHTML = t;
  });
}

function deleteDetails(id) {
  console.log(id);
  if (id > -1) {
    empDetails.splice(id, 1);
    console.log(empDetails);
    display();
    if (empDetails.length == 1) {
      empDetails = [];
      display();
      console.log(empDetails);
    }
  }
}
