song="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
length="";
scoreLeftWrist="";
scoreRightWrist="";

function setup(){


    poseNet=ml5.poseNet(video, modeLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,600,500);
    
    fill("#FF0000");
    stroke("#FF0000");
}


function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function stop(){
    song.stop()
}

function preload(){
    song=loadSound("123.mp3"); 
}

function modeLoaded(){
    console.log("Hi I am Pranshu and posenet is initialized!")
}

function gotPoses(results){
    if((results.length)>0){
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist" + scoreRightWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}