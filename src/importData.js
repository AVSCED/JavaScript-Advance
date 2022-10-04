import { id , name , salary} from "./module.js";
console.log(salary);

let w =
  " <tr><th>Employee ID:</th> <th>Employee Name :</th> <th>Salary:</th></tr> ";

 w +=
   "<tr><td>" + id + "</td>" + "<td>" + name + "</td>" + "<td>" + salary + "</td></tr>";
document.getElementById("table2").innerHTML = w;