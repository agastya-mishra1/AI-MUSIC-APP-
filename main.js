song1="";
song2="";

function preload(){
    song1=loadSound("music1.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function modelLoaded(){
    console.log("PoseNet is Intitalized");
}
function draw(){

}
function gotResults(results){

}