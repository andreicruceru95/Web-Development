var images = [
    "static/game/img/1",
    "static/game/img/2",
    "static/game/img/3",
    "static/game/img/4",
    "static/game/img/5",
    "static/game/img/6",
    "static/game/img/7",
    "static/game/img/8",
    "static/game/img/19",
    "static/game/img/10",
    "static/game/img/11",
    "static/game/img/12",
    "static/game/img/13",
    "static/game/img/14",
    "static/game/img/15",
    "static/game/img/16",
    "static/game/img/17",
    "static/game/img/18",
    "static/game/img/19",
    "static/game/img/20",
    "static/game/img/21",
    "static/game/img/22"

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