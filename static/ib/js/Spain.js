var imagesSp = [
    "static/ib/jpg/ib1.jpg",
    "static/ib/jpg/ib2.jpg",
    "static/ib/jpg/ib3.jpg",
    "static/ib/jpg/ib4.jpg",
    "static/ib/jpg/ib5.jpg",
    "static/ib/jpg/ib6.jpg",
    "static/ib/jpg/ib7.jpg",
    "static/ib/jpg/ib8.jpg",
    "static/ib/jpg/ib9.jpg",
    ];
    var num = 0;
    
    function nextSp() {
    var slider = document.getElementById("sliderSp");
    num++;
    if(num >= imagesSp.length) {
    num = 0;
    }
    slider.src = imagesSp[num];
    }
    
    function prevSp() {
    var slider = document.getElementById("sliderSp");
    num--;
    if(num < 0) {
    num = imagesSp.length-1;
    }
    slider.src = imagesSp[num];
    }