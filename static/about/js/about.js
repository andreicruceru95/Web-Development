//hide and display div content
function displayMl1(){
    div = document.getElementById('ml1');
    div.style.display = "block";
    div2 = document.getElementById('ml2');
    div2.style.display = "none";
    div3 = document.getElementById('ml3');
    div3.style.display = "none";
    div4 = document.getElementById('ml4');
    div4.style.display = "none";
}
function displayMl2(){
    div = document.getElementById('ml2');
    div.style.display = "block";
    div2 = document.getElementById('ml3');
    div2.style.display = "none";
    div3 = document.getElementById('ml4');
    div3.style.display = "none";
    div4 = document.getElementById('ml1');
    div4.style.display = "none";
}
function displayMl3(){
    div = document.getElementById('ml3');
    div.style.display = "block";
    div2 = document.getElementById('ml4');
    div2.style.display = "none";
    div3 = document.getElementById('ml1');
    div3.style.display = "none";
    div4 = document.getElementById('ml2');
    div4.style.display = "none";
   
}
function displayMl4(){
    div = document.getElementById('ml4');
    div.style.display = "block";
    div2 = document.getElementById('ml3');
    div2.style.display = "none";
    div3 = document.getElementById('ml2');
    div3.style.display = "none";
    div4 = document.getElementById('ml1');
    div4.style.display = "none";
}