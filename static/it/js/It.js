var imagesIt = [
    "static/it/jpg/it1.jpg",
    "static/it/jpg/it2.jpg",
    "static/it/jpg/it3.jpg",
    "static/it/jpg/it4.jpg",
    "static/it/jpg/it5.jpg",
    "static/it/jpg/it6.jpg",
    "static/it/jpg/it7.jpg",
    "static/it/jpg/it8.jpg",
    "static/it/jpg/it9.jpg",
    ];
    var num = 0;
    
    function nextIt() {
    var slider = document.getElementById("sliderIt");
    num++;
    if(num >= imagesIt.length) {
    num = 0;
    }
    slider.src = imagesIt[num];
    }
    
    function prevIt() {
    var slider = document.getElementById("sliderIt");
    num--;
    if(num < 0) {
    num = imagesIt.length-1;
    }
    slider.src = imagesIt[num];
    }