
var links = new Array (500);
var shops = new Array(20);
var pos = 140;
var pos1 = 140;
var socket;
var userName;
var icon;
var home,downloads,makers,about,contact;

function preload(){
  icon = loadImage('assets/logo3.jpg');
}


function setup(){
var c = createCanvas(displayWidth,displayHeight)
c.style('position','absolute')
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

var p= createP("ידע שימושי")
p.size(400,40)
p.style('background-color','black')
p.style('color','yellow')
p.style('text-align','center');
p.style('font-size','30px')
p.position(20,80);

var d= createDiv('');
d.size(400,400)
d.position(20,160);
d.style('background-color','rgb(210,255,210)')
d.style('border-color','blue')

links[0]= createA("http://507movements.com/index01.html","507 mechniclal movments","_blank")
links[1]= createA("https://www.youtube.com/channel/UCxQbYGpbdrh-b2ND-AfIybg","great channel for 3d printing","_blank")


links[0].position(40,180)
links[1].position(40,230)

for(let i= 0; i< 2;i++){
  links[i].style('font-size','20px');
}

var p= createP("חנויות לחומרה")
p.size(400,40)
p.style('background-color','black')
p.style('color','yellow')
p.style('text-align','center');
p.style('font-size','30px')
p.position(width/2-200,80);


var d1= createDiv('');
d1.size(400,400)
d1.position(width/2-200,160);
d1.style('background-color','rgb(210,255,210)')
d1.style('border-color','blue')

shops[0]= createA("http://www.dash.co.il/","דאן אלקטרוניקה- ארדואינו ועוד דברים טובים","_blank")
shops[1]= createA("https://www.omc-stepperonline.com/","מנועי סטפר","_blank")
shops[2]= createA("https://openbuildspartstore.com/","cnc הכל ל","_blank")

for(let i= 0; i< 3;i++){
  pos = pos + 40;
  shops[i].position(width/2-150,pos);
  shops[i].style('font-size','20px');
}


let menuY = 22;
let menuX = 0.89;
let tS= 20;
let r= 30;
let st = 0;

 savefile = new Button("save",width*0.88,height*0.32,width/10,height/12,width/12,height*0.025,tS,st)
 choosefile = new Button("upload",width*0.88,height*0.22,width/10,height/12,width/12,height*0.025,tS,st)

home = new Button("בית",width*menuX,menuY,120,40,r,tS,st);
makers = new Button("מייקרס",width*(menuX-0.1),menuY,120,40,r,tS,st);
downloads = new Button("קישורים ",width*(menuX-0.2),menuY,120,40,r,tS,st);
about = new Button("אודות",width*(menuX-0.3),menuY,120,40,r,tS,st);
contact = new Button("צור קשר",width*(menuX-0.4),menuY,120,40,r,tS,st);
sendMessage = new Button("send message",width*(menuX-0.24),height*0.74,width/10,height/12,width/12,height*0.025,tS,st);


}
function draw(){
  background(0,51,105)
  fill(255);rect(0,0,width,81)
  rectMode(CORNER)
textSize(width*0.012)
home.Draw();makers.Draw();downloads.Draw();about.Draw();contact.Draw();

image(icon,0,0,100,80);
}

function mousePressed(){



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
