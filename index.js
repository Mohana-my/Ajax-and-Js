
var request = new XMLHttpRequest();
var details;
request.open("GET", "http://localhost:3000/employees", true);
request.onload = function() {
  if (this.status === 200) {
    details = JSON.parse(this.responseText);
    for (var i = 0; i < details.length; i++) {
      document.getElementById("tBody").innerHTML +=
        '<tr><td id="row">' +
        details[i].id +
        "</td><td>" +
        details[i].Name +
        "</td><td>" +
        details[i].Location +
        "</td><td><button class='btn btn-primary' onclick='deleteEmp("+details[i].id +")'>Delete</button></td><td><button class='btn btn-danger' onclick='editEmp("+details[i].id +")'>Edit</button></td></tr>";
    }
  }
};
request.send();
function postMethod() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  request.open("POST", "http://localhost:3000/employees", true);
  request.setRequestHeader("Content-Type", "application/json");
  var data = JSON.stringify({ Name: name, Location: location });
  request.send(data);
}
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tBody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
function  deleteEmp(id)
{ 
  request.open("DELETE", "http://localhost:3000/employees/"+id, true);
  request.send();
  console.log(id)

}
function editEmp(id)
{
  console.log(id)

}