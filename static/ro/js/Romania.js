var images = [
"static/ro/jpg/romania1.jpg",
"static/ro/jpg/romania2.jpg",
"static/ro/jpg/romania3.jpg",
"static/ro/jpg/romania4.jpg",
"static/ro/jpg/romania5.jpg",
"static/ro/jpg/romania6.jpg",
"static/ro/jpg/romania7.jpg",
"static/ro/jpg/romania8.jpg",
"static/ro/jpg/romania9.jpg",
];
var num = 0;

function next() {
var slider = document.getElementById("slider");
num++;
if(num >= images.length) {
num = 0;
}
slider.src = images[num];
}

function prev() {
var slider = document.getElementById("slider");
num--;
if(num < 0) {
num = images.length-1;
}
slider.src = images[num];
}
