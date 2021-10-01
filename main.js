var noseX = 0;
var noseY = 0;
var difference = 0;
var leftWristX = 0;
var rightWristX = 0;

function setup() {
     var video = createCapture(VIDEO);
     video.size(300, 300);


     var canvas = createCanvas(300, 300);
     canvas.position(560, 150);

     var poseNet = ml5.poseNet(video, ModelLoaded);
     poseNet.on('pose', gotPoses);
}

function draw(){
     background('#3b3b35');
     document.getElementById("txt_length").innerHTML = "The size of text is " + difference + " pixels"
     textSize(difference);
     text("Peter", noseX, noseY);
}

function ModelLoaded() {
     console.log("Model is loaded");
}

function gotPoses(results) {
     if (results.length> 0) {
          console.log(results);

          noseX = results[0].pose.nose.x;
          noseY = results[0].pose.nose.y;

          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;

          difference = floor(leftWristX - rightWristX);
     }
}