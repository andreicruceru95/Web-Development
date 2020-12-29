var imagesUk = [
    "static/uk/jpg/uk1.jpg",
    "static/uk/jpg/uk2.jpg",
    "static/uk/jpg/uk3.jpg",
    "static/uk/jpg/uk4.jpg",
    "static/uk/jpg/uk5.jpg",
    "static/uk/jpg/uk6.jpg",
    "static/uk/jpg/uk7.jpg",
    "static/uk/jpg/uk8.jpg",
    "static/uk/jpg/uk9.jpg",
    ];
    var num = 0;
    
    function nextUk() {
    var slider = document.getElementById("sliderUk");
    num++;
    if(num >= imagesUk.length) {
    num = 0;
    }
    slider.src = imagesUk[num];
    }
    
    function prevUk() {
    var slider = document.getElementById("sliderUk");
    num--;
    if(num < 0) {
    num = imagesUk.length-1;
    }
    slider.src = imagesUk[num];
    }