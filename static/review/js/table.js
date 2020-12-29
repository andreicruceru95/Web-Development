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

function feedbackUpdate() {
  if ($("#updateButton").text() == "Update") {
    updateInTable(activeId);
  } else {
    addToTable();
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
if(localStorage) {
    // Store data
    localStorage.setItem("#feedbackTable tbody", );
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



     