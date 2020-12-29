var imagesFl = [
    "static/fl/jpg/fl1.jpg",
    "static/fl/jpg/fl2.jpg",
    "static/fl/jpg/fl2.jpg",
    "static/fl/jpg/fl3.jpg",
    "static/fl/jpg/fl4.jpg",
    "static/fl/jpg/fl5.jpg",
    "static/fl/jpg/fl6.jpg",
    "static/fl/jpg/fl7.jpg",
    "static/fl/jpg/fl8.jpg",
    "static/fl/jpg/fl9.jpg",
    ];
    var num = 0;
    
    function nextFl() {
    var slider = document.getElementById("sliderFl");
    num++;
    if(num >= imagesFl.length) {
    num = 0;
    }
    slider.src = imagesFl[num];
    }
    
    function prevFl() {
    var slider = document.getElementById("sliderFl");
    num--;
    if(num < 0) {
    num = imagesFl.length-1;
    }
    slider.src = imagesFl[num];
    }