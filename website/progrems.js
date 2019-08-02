
var price =["50","80","100"];
var precnt =["3.2% + ","1.8% + ","         שח"]

var progrem3;

var model1,model2,model3;

function setup(){
	createCanvas(windowWidth, windowHeight);

  progrem1  ={
   price:"50",
   curncy:"שח",
   precent:"%2.4 +",
   xloc:width*0.15,
   yloc:height/2.3
 }

  progrem2  ={
   price:"80",
   curncy:"שח",
   precent:"%1.8 +",
   xloc:width*0.5,
   yloc:height/2.3
 }


 progrem3  ={
  price:"100",
  curncy:"שח",
  precent:"ללא עמלות",
  xloc:width*0.83,
  yloc:height/2.3
}

model1 = new Button("הצטרפות", progrem1.xloc-(width/10),progrem1.yloc+(height/4+16),width/6,40,24)
model2 = new Button("הצטרפות", progrem2.xloc-(width/8.6),progrem2.yloc+(height/4+16),width/6,40,24)
model3 = new Button("הצטרפות", progrem3.xloc-(width/8.8),progrem3.yloc+(height/4+16),width/6,40,24)


}

function draw(){
  background(255);


  fill(20,90,250);rect(0,0,width,120);
  textSize(60);textAlign(CENTER);
    fill(217,180,16);text("מודלים",width/2,80)
  textSize(40); text("3dig",50,70)
strokeWeight(1)
  for(let i = 0;i< 3;i++){
    noFill();stroke(92);
    rect(width*0.05+(i*(width/3)),150,width/6,height-300,20);
    fill(20,20,150)
    rect(width*0.05+(i*(width/3)),150,width/6,60,20,0);
   //  textAlign(LEFT);textSize(40);
   // text(price[i],width*0.05+(i*(width/3))+(width/10),height/2)
   // textSize(24)
   // text(precnt[i],width*0.05+(i*(width/3))+(width/30),height/2)
  }
textSize(40)
  text(progrem3.price ,progrem3.xloc,progrem3.yloc);
  text(progrem2.price ,progrem2.xloc,progrem2.yloc);
  text(progrem1.price ,progrem1.xloc,progrem1.yloc);


  textSize(24);
  text(progrem3.curncy ,progrem3.xloc-60,progrem3.yloc);
 text(progrem2.curncy ,progrem2.xloc-60,progrem2.yloc);
 text(progrem1.curncy ,progrem1.xloc-60,progrem1.yloc);



  text(progrem3.precent ,progrem3.xloc-30,progrem3.yloc+60);
  text(progrem2.precent ,progrem2.xloc-30,progrem2.yloc+60);
  text(progrem1.precent ,progrem1.xloc-30,progrem1.yloc+60);

model1.Draw();model2.Draw();model3.Draw();


}

function mousePressed(){
if(model1.MouseIsOver()){ window.location.pathname = '/market' }
if(model2.MouseIsOver()){ window.location.pathname = '/market'}
if(model3.MouseIsOver()){ window.location.pathname = '/market'}



}
