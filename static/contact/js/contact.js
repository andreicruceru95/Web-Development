window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
    const fName = document.getElementById("firstName");
    const lName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    var text = document.getElementById('VFname')
    var text1 = document.getElementById('VLname')
    var text2 = document.getElementById('Vemail')
    var text3 = document.getElementById('Vmessage')

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.style.opacity = "1";
      status.innerHTML = "Success.";
      status.style.color = "green";
      setInterval(fade, 5000);
    }
    function error() {
      status.style.opacity = "1";
      status.innerHTML = "Oops! There was a problem.";
      status.style.color = "red";
      setInterval(fade, 5000);
    } 
    //fade text
    function fade() {
      status.style.opacity = "0";
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
      
    // handle the form submission event
    var submit=document.querySelector("#submit");
    submit.addEventListener("click", function(ev) {      
      ev.preventDefault();
      if(fName.value ==='' || fName.value == null || lName.value ==='' || lName.value == null || email.value ==='' || email.value == null || message.value ==='' || message.value == null)
     {
      if(fName.value ==='' || fName.value == null) {
        text.style.opacity = "1";
        text.style.display = "block";
        setInterval(changeText, 5000);           
      }
      else{
        text.style.display = "none";
      }
      if(lName.value ==='' || lName.value == null) {  
        text1.style.opacity = "1";      
        text1.style.display = "block"; 
        setInterval(changeText1, 5000); 
      }
      else{
        text1.style.display = "none"; 
      }
      if(email.value ==='' || email.value == null) {        
       
        text2.style.opacity = "1";       
        text2.style.display = "block"; 
        setInterval(changeText2, 5000);  
      }
      else{
        text2.style.display = "none"; 
      }
      if(message.value ==='' || message.value == null) {   
        text3.style.opacity = "1";     
        text3.style.display = "block";  
        setInterval(changeText3, 5000); 
      }
      else{
        text3.style.display = "none"; 
      }}
      else{var data = new FormData(form);      
        ajax(form.method, form.action, data, success, error);}
    });  
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        text.style.display = "none";
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
        text.style.display = "none";
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
      }
    };
    xhr.send(data);      
  }
  
