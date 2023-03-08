function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tintColor="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tintColor);    
    fill("blue");
    stroke("blue");
    circle(50,50,50);
    fill("blue");
    stroke("blue");
    circle(50,425,50);
    fill("blue");
    stroke("blue");
    circle(580,50,50);
    fill("blue");
    stroke("blue");
    circle(580,425,50);
    fill("pink");
    stroke("pink");
    rect(40,75,20,328)
    fill("pink");
    stroke("pink");
    rect(571,75,20,328)
    fill("pink");
    stroke("pink");
    rect(77,44,485,20)
    rect(571,75,20,328)
    fill("pink");
    stroke("pink");
    rect(73,416,485,20)
    
    
    
}
function take_snapshot(){
    save("sonja.png");
}
function filter(){
    tintColor=document.getElementById("addcolor").value ;
}