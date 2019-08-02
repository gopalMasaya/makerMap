var icon;
var home,downloads,makers,about,contact;
var userName;
var input = false;


function preload(){
  // font1 = loadFont('/ruge-boogie.regular.ttf');
  icon = loadImage('assets/logo3.jpg');

}

function setup(){
  createCanvas(displayWidth,displayHeight);

  socket = io.connect('http://localhost:4000/');


  socket.on('msg',userData);
  function userData(data){
  
    userName = data.user;
   if(userName != undefined){
    var n = createP("welcome "+ userName)
    n.style('font-family','Comic Sans MS','cursive','san-serif')
    n.style('font-size','24px')
    n.style('position','absolute')
    n.style('left','8%');
    n.style('top','0.8%')
    n.style('color','rgb(190,90,10)')
  }
  }


  let menuY = 22;
  let menuX = 0.89;
  let tS= 20;
  let r= 30;
  let st = 0;


  home = new Button("בית",width*menuX,menuY,120,40,r,tS,st);
  makers = new Button("מייקרס",width*(menuX-0.1),menuY,120,40,r,tS,st);
  downloads = new Button("קישורים ",width*(menuX-0.2),menuY,120,40,r,tS,st);
  about = new Button("אודות",width*(menuX-0.3),menuY,120,40,r,tS,st);
  contact = new Button("צור קשר",width*(menuX-0.4),menuY,120,40,r,tS,st);
  sendMessage = new Button("send message",width*(menuX-0.24),height*0.74,width/10,height/12,width/12,height*0.025,tS,st);

//  if(userName != undefined){

//  }
fill(255);stroke(60); rect(0,0,width,80)
  image(icon,width*0.03,height*0.15,600,480)
  textAlign(CENTER);textSize(height*0.05);fill(217,179,16)
  text("creativeG",width*0.7,height*0.22);
  textAlign(RIGHT);textSize(height*0.026);fill(255)
    text(" 0512310833  :   טלפון",width*0.9,height*0.3)
    text( "כתובת:   ת.ד 1585 גבעת עדה 38700",width*0.9,height*0.35)
    text(" bcreativeground@gmail.com  :   מייל",width*0.9,height*0.4)

}
function draw(){
//background(90,20);


fill(217,180,16)
//  text("welcom "+userName,width*0.5,40)
  home.Draw();makers.Draw();downloads.Draw();about.Draw();contact.Draw();
 //choosefile.Draw();savefile.Draw();

}


function mousePressed(){



if(sendMessage.MouseIsOver()){
  console.log("message")
}

if(makers.MouseIsOver()){
window.location.pathname = '/market'
}

  if(home.MouseIsOver()){
	window.location.pathname = '/'
  }

  if(downloads.MouseIsOver()){

  //	loadJSON('register/')
  window.location.pathname = '/links'
  }

  if(contact.MouseIsOver()){
  	window.location.pathname = '/info'
  }
}
