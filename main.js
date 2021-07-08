noseX=0;
noseY=0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    xml=ml5.poseNet(video, modelLoaded);
    xml.on('pose', getResults);
}
function preload(){
    no=loadImage('https://i.postimg.cc/SRq6mkMQ/Seek-Png-com-cat-png-9567073.png')
}
function getResults(frick){
    if (frick.length>0){
        console.log(frick);
        noseX=frick[0].pose.nose.x;
        noseY=frick[0].pose.nose.y;
    }
}
function modelLoaded(){
    console.log("PoseNet initialized, success");
}
function draw(){
    image(video, 0, 0, 300, 300);
    //fill(0, 0, 0);
    //stroke(255, 255, 255);
    //circle(noseX, noseY, 20);
    image(no, noseX-25, noseY-20, 50, 50)
}
