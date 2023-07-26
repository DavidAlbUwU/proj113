function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video =createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,230,150,220,200);
    fill(175,247,196);
    stroke(194,037,047);
    circle(50,50,80);
    circle(65,50,80);
    circle(80,50,80);
    circle(95,50,80);
    circle(110,50,80);
}

function take_snapshot(){
    save('quemEstaLendoIssoePqTirouAFotoNoMeuApp.png')
}

