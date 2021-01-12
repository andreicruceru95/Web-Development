var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var date = document.getElementById('date');
var feedback = document.getElementById('feedback');
var text = document.getElementById('VFfname');
var text1 = document.getElementById('VFlname');
var text2 = document.getElementById('VFdate');
var text3 = document.getElementById('VFfeedback');
const form = document.getElementById('form');


// Next id for adding a new feedback
var nextId = 1;
// ID of feedback currently editing
var activeId = 0;

function feedbackDisplay(ctl) {
  var row = $(ctl).parents("tr");
  var cols = row.children("td");

  activeId = $($(cols[0]).children("button")[0]).data("id");
  $("#fname").val($(cols[1]).text());
  $("#lname").val($(cols[2]).text());
  $("#date").val($(cols[3]).text());
  $("#feedback").val($(cols[4]).text());

  
      
  // Change Update Button Text
  $("#updateButton").text("Update");
}
function changeText(){
  text.style.opacity = "0";
}    
function changeText1(){
  text1.style.opacity = "0";
} 
function changeText2(){
  text2.style.opacity = "0";
} 
function changeText3(){
  text3.style.opacity = "0";
} 
var submit=document.querySelector("#updateButton");
submit.addEventListener("click", function(ev) {      
      ev.preventDefault();  
      if(fname.value ==='' || fname.value == null || lname.value ==='' || lname.value == null || date.value ==='' || date.value == null || feedback.value ==='' || feedback.value == null)
      {   
  if(fname.value ==='' || fname.value == null) {
    text.style.opacity = "1";
    text.style.display = "block";
    setInterval(changeText, 5000);           
  }
  else{
    text.style.display = "none";
  }
  if(lname.value ==='' || lname.value == null) {  
    text1.style.opacity = "1";      
    text1.style.display = "block"; 
    setInterval(changeText1, 5000); 
  }
  else{
    text1.style.display = "none"; 
  }
  if(date.value ==='' || date.value == null) {   
    text2.style.opacity = "1";       
    text2.style.display = "block"; 
    setInterval(changeText2, 5000);  
  }
  else{
    text2.style.display = "none"; 
  }
  if(feedback.value ==='' || feedback.value == null) {   
    text3.style.opacity = "1";     
    text3.style.display = "block";  
    setInterval(changeText3, 5000); 
  }
  else{
    text3.style.display = "none"; 
  }}
  else{
    feedbackUpdate();
  
  }
});
function feedbackUpdate() {
  if ($("#updateButton").text() == "Update") {
    updateInTable(activeId);
  } else {
    addToTable();
    form.reset();
  }

  // Clear form fields
  formClear();

  // Focus to name field
  $("#feedback").focus();
}

// Add feedback to <table>
function addToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#feedbackTable tbody").length == 0) {
    $("#feedbackTable").append("<tbody></tbody>");
  }

  // Append feedback to table
  $("#feedbackTable tbody").append(
    buildTableRow(nextId));
    //add data in local storage
if(localStorage) {
  var feedbacks = { 'id': nextId, 'fname': fname, 'lname': lname, 'date': date, 'feedback': feedback};
// Put the object into storage
localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
// Retrieve the object from storage
var retrievedObject = localStorage.getItem('feedbacks');

console.log('retrievedObject: ', JSON.parse(retrievedObject)); 
}}
  // Increment next ID to use
  nextId += 1;
  

// Update feedback in <table>
function updateInTable(id) {
  // Find feedback in <table>
  var row = $("#feedbackTable button[data-id='" + id + "']")
    .parents("tr")[0];

  // Add changed feedback to table
  $(row).after(buildTableRow(id));
  // Remove original feedback
  $(row).remove();

  // Clear form fields
  //formClear();

  // Change Update Button Text
  $("#updateButton").text("Add");
}

// Build a <table> row of Product data
function buildTableRow(id) {
   
  var ret =
    "<tr>" +
    "<td>" +
    "<button type='button' " +
    "onclick='feedbackDisplay(this);' " +
    "class='btn btn-default' " +
    "data-id='" + id + "'>" +
    "<span class='glyphicon glyphicon-edit' />" +
    "</button>" +
    "</td>" +
    "<td>" + $("#fname").val() + "</td>" +
    "<td>" + $("#lname").val() + "</td>" +
    "<td>" + $("#date").val() + "</td>" +
    "<td>" + $("#feedback").val() + "</td>" +
    "<td>" +
    "<button type='button' " +
    "onclick='feedbackDelete(this);' " +
    "class='btn btn-default' " +
    "data-id='" + id + "'>" +
    "<span class='glyphicon glyphicon-remove' />" +
    "</button>" +
    "</td>" +
    "</tr>"
   
  return ret;
  
  
}

 //Delete feedback from <table>
function feedbackDelete(ctl) {
  $(ctl).parents("tr").remove();
}

 //Clear form fields
function formClear() {
 $("#nname").val("");
  $("#date").val("");
  $("#feedback").val("");
}



     