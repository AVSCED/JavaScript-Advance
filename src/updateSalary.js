var empDetails = [];

function submitDetails() {
  var c = 0;
  var employeeID = document.getElementById("EmpID").value;
  var employeeName = document.getElementById("EmpName").value;
  var employeeSalary = document.getElementById("EmpSal").value;
  employeeSalary = Number(employeeSalary);
  try {
    if (employeeID == "") throw "Employee ID can not be Empty";
    if (employeeName == "") throw "Employee Name Can not be Empty";
    if (employeeSalary == isNaN) throw "Employe salary can only be in Digits";

    else{
        var empPush = {
          empID: employeeID,
          empName: employeeName,
          empSal: employeeSalary,
        };
        empDetails.push(empPush);
        t =
          " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Salary:</th>  <th>Action:</th></tr> ";
        t = empDetails.forEach((value) => {
          t +=
            "<tr><td>" +
            value.empID +
            "</td>" +
            "<td>" +
            value.empName +
            "</td>" +
            "<td>" +
            value.empSal +
            "</td>" +
            "<td><button id='" +
      c +
      "' onclick='updateSal(id)'>Update Salary</button></td></tr>";
          c++;
          document.getElementById("table1").innerHTML = t;
        });
      }
  } catch (err) {
    document.getElementById("er").innerHTML = err;
  }
}

function display() {
  var c = 0;
  t =
    " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Updated Salary:</th>  <th>Action:</th></tr> ";

  t = empDetails.forEach((value) => {
    t +=
      "<tr><td>" +
      value.empID +
      "</td>" +
      "<td>" +
      value.empName +
      "</td>" +
      "<td>" +
      value.empSal +
      "</td>" +
      "<td><button id='" +
      c +
      "' onclick='updateSal(id)'>Update Salary</button></td></tr>";
    c++;
    document.getElementById("table1").innerHTML = t;
  });
}

function updateSal(id) {
  console.log(id);
  var os=empDetails[id].empSal;
  console.log(typeof(os));
  empDetails[id].empSal= 1.10 * os;
  display();
}
