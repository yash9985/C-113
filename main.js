function preload(){

}

function setup(){

    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    circle(30,30,20)
    describe('red circle with black outline in corner of grey canvas')
    rectangl(40,50,20)
    describe('green rectangle with black outline in corner of grey canvas')

    tint_color = "";
}

function draw(){

    image(video,0,0,640,480);
    tint(tint_color);
}

function take_snapshot(){
    save("student_name.png");
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}