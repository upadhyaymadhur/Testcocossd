img="";
status1="";
objects=[];
function preload(){
    img=loadImage('t.png');
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";

}
function modelLoaded(){
    console.log("Model Loaded!");
    status1=true;
    objectDetector.detect(img, gotResult)
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    console.log(result);
    objects=result;
}
function draw(){
    
    image(img,0,0,380,380);
    
    if(status1 != ""){
        objectdetector.detect(img, gotResult);
        for(i = 0; i < objects.length; i++){
           
        
            document.getElementById("status").innerHTML="Status : Object Detected";
            fill("green");
            percent= floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("green");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)  
}
    }
}
