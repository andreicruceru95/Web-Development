var imagesIr = [
    "static/ir/jpg/ir1.jpg",
    "static/ir/jpg/ir2.jpg",
    "static/ir/jpg/ir3.jpg",
    "static/ir/jpg/ir4.jpg",
    "static/ir/jpg/ir5.jpg",
    "static/ir/jpg/ir6.jpg",
    "static/ir/jpg/ir7.jpg",
    "static/ir/jpg/ir8.jpg",
    "static/ir/jpg/ir9.jpg",
    ];
    var num = 0;
    
    function nextIr() {
    var slider = document.getElementById("sliderIr");
    num++;
    if(num >= imagesIr.length) {
    num = 0;
    }
    slider.src = imagesIr[num];
    }
    
    function prevIr() {
    var slider = document.getElementById("sliderIr");
    num--;
    if(num < 0) {
    num = imagesIr.length-1;
    }
    slider.src = imagesIr[num];
    }