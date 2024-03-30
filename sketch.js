narizX = 0;
narizY = 0;

leftWristX = 0;
rightWristX = 0;
differece = 0;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  poseNet = ml5.poseNet(video, modeloCarregado);
  poseNet.on('pose', gotPoses);


}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results)
    narizX = results[0].pose.nose.x;
    narizY = results[0].pose.nose.y;
    console.log("NarizX =" + narizX + "narizY = " + narizY)
    
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    differece = floor(leftWristX - rightWristX);
  }
}

function modeloCarregado() {
  console.log("Modelo carregado")
  console.log("Versao atual", ml5.version);
}

function draw() {
  background(220);
  document.getElementById("ladoQuadrado").innerHTML = "Largura e altura serao = " + differece + "px"
  fill(#F90093);
  stroke(#F90093);
  square(narizX, narizY, differece);
}

