employeeDetails =[];


function submitDetails() {
    let objj = {
        empID:document.getElementById("EmpID").value,
        empName:document.getElementById("EmpName").value,
        empSal:document.getElementById("EmpSal").value
    } ;

    objj = JSON.stringify(objj);
    console.log(objj);
    employeeDetails.push(objj);
    console.log(employeeDetails);
    display()
}

function display() {
    var c = 0;
    t =
      " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Salary:</th></tr> ";
//    console.log(typeof(employeeDetails));
    t = employeeDetails.forEach((value) => {
        employeeDetails=JSON.parse(employeeDetails);
        console.log(employeeDetails);
      t +=
        "<tr><td>" +
        value.empID +
        "</td>" +
        "<td>" +
        value.empName +
        "</td>" +
        "<td>" +
        value.empSal +
        "</td></tr>";
      c++;
      
      document.getElementById("table1").innerHTML = t;
    });
  }