noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/XvdfFw7G/clownnose.png");
}
function setup() {
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() { 
    console.log('Yay the posenet has been activated');
}

function take_snapshot() {
    save('filteredimage.png');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose,noseX,noseY, 30,30);
}
function gotPoses(results) {
    if(results.length > 0 ) {
        console.log("here are the results");
        
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x is equivalent to "+ noseX);
        console.log("nose y is equivalent to "+ noseY);
    }
}