var imagesNl = [
    "static/am/jpg/am1.jpg",
    "static/am/jpg/am2.jpg",
    "static/am/jpg/am3.jpg",
    "static/am/jpg/am4.jpg",
    "static/am/jpg/am5.jpg",
    "static/am/jpg/am6.jpg",
    "static/am/jpg/am7.jpg",
    "static/am/jpg/am8.jpg",
    "static/am/jpg/am9.jpg",
    ];
    var num = 0;
    
    function nextNl() {
    var slider = document.getElementById("sliderNl");
    num++;
    if(num >= imagesNl.length) {
    num = 0;
    }
    slider.src = imagesNl[num];
    }
    
    function prevNl() {
    var slider = document.getElementById("sliderNl");
    num--;
    if(num < 0) {
    num = imagesNl.length-1;
    }
    slider.src = imagesNl[num];
    }