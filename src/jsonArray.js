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
    for (i=0;i<employeeDetails.length;i++)
    {
      employeeDetails[i]=JSON.parse(employeeDetails[i]);
      console.log(employeeDetails[i]);
    }
    t =
      " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Salary:</th>  <th>Action:</th></tr> ";
  
    t = employeeDetails.forEach((value) => {
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
        "' onclick='deleteDetails(id)'>Delete</button></td></tr>";
      c++;
      document.getElementById("table1").innerHTML = t;
    });
  }