employeeDetails = [];

function submitDetails() {
  let objj = {
    empID: document.getElementById("EmpID").value,
    empName: document.getElementById("EmpName").value,
    empSal: document.getElementById("EmpSal").value,
  };

  objj = JSON.stringify(objj);
  console.log(objj);
  employeeDetails.push(objj);
  console.log(employeeDetails);
  t =
    " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Salary:</th>  <th>Action:</th></tr> ";
  display();
}

function display() {
  var c = 0;
  console.log(employeeDetails);
  console.log(employeeDetails.length);
  
  for (i = 0; i < employeeDetails.length; i++) {
    employeeDetails[i] = JSON.parse(employeeDetails[i]);

 
    console.log(employeeDetails);

    t +=
      "<tr><td>" +
      employeeDetails[i].empID +
      "</td>" +
      "<td>" +
      employeeDetails[i].empName+
      "</td>" +
      "<td>" +
      employeeDetails[i].empSal +
      "</td>" +
      "<td><button id='" +
      c +
      "' onclick='deleteDetails(this.id)'>Delete</button></td></tr>";
    c++;
    document.getElementById("table1").innerHTML = t;
  }
}

function deleteDetails(id) {
  console.log(id);
  if (id > -1) {
    employeeDetails.splice(id, 1);
    console.log(employeeDetails);
    display();
    if (employeeDetails.length == 1) {
      display1();
      console.log(employeeDetails);
    }
  }
}
function display1(){
  t =
  " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Salary:</th>  <th>Action:</th></tr> ";
}
