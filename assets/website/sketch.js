


var add;
var info;
var sendinfo;
var data;
var email;
var ref1;
var regi;
var search;
var home,downloads,info3d,about,contact,login,signup;
var password_err = false;
var systemSign = false;
var active_login = false;
var user_login;
var user_password;
var loginData;
var loginButton;
var keys;
var lat,lon;
var holder,header;
var wp= 0;
var lineC;

var Phone, Twitt,Facebook,inst,Email,Password,Name,About,Site;

var names = new Array (1000);
var phone = new Array (1000);
var facebook = new Array (1000);
var email = new Array (1000);
var twitt = new Array (1000);
var site = new Array (1000);
var instegram = new Array(1000)
var pass = new Array (1000);
var about = new Array (1000)

for (let i = 0; i< names.length;i++){
  names[i]="";phone[i]="";
  email[i]="";pass[i]="";instegram[i]="";
about[i]="";twitt[i]="";site[i]= "";
}

var icon;
var socket;
var apikey;
var r=0;var g=0;var b= 0;
var lr=0;var lg = 0; var lb= 0;
var sendButton;

let cols, rows,
	current = [],
	previous = [],
	damping = 0.99;
var s = 15;
	var go;
  var auth;
  var first = true;
//  var is_login = false;



function preload(){
  icon = loadImage('assets/logo3.jpg');
}

function setup() {
var c =	createCanvas(windowWidth, windowHeight+100);

	socket = io.connect('http://localhost:4000/')

 socket.on('msg',message);

 function message(data){
   apikey = data;

   if(first == true){
      var firebaseConfig = {
      	  apiKey: apikey,
      	 authDomain: "dmservice-24abb.firebaseapp.com",
      	 databaseURL: "https://dmservice-24abb.firebaseio.com",
      	 projectId: "dmservice-24abb",
      	 storageBucket: "dmservice-24abb.appspot.com",
      	 messagingSenderId: "974534849439",
      	 appId: "1:974534849439:web:87db3685f0aefecc"
       };
       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);

      //console.log(firebase)
       auth = firebase.auth();
       var database = firebase.database();
       //console.log(database)
        ref = database.ref('data')

      	ref.on('value',gotData,errData);

      	function gotData(data){

      	//  console.log(data.val());
      	var search = data.val();
      	 keys = Object.keys(search);

      	  in_length= keys.length;
      	  for(let i = 0 ; i < keys.length;i++){

      	     k = keys[i];
      	     names[i] = search[k].name;
      	    phone[i] = search[k].phone;
      	    facebook[i] = search[k].face;
      	    email[i] = search[k].email;
      	    twitt[i]= search[k].twitt; //fullAdd[k]= trim(fullAdd[k]);
      	    instegram[i]= search[k].inst;
      			pass[i]= search[k].password;
            site[i]= search[k].site;
            pass[i]= search[k].pass;


        }
      	}
      	function errData(err){
      	console.log(err);
      	}
first = false;

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


login = new Button("כניסה",width*0.02,menuY,80,40,r,tS,st);
signup = new Button("הרשמה",width*0.1,menuY,80,40,r,tS,st);


sendinfo = new Button("שלח",width*0.2-(width/20),height*0.86,width/10,height/18,20,24)
regi = new Button("הרשמה",width*0.1,height*0.8,width/10,height/14,20,24)
loginButton = new Button("כניסה",width*0.46,height*0.54,width/10,height/18,20,24)
smooth();

if ("geolocation" in navigator) {
  /* geolocation is available */

  options = { timeout: 500, enableHighAccuracy: true };

var watchID=  navigator.geolocation.watchPosition(position,error,options)
  var timeout = setTimeout( function() { navigator.geolocation.clearWatch( watchID ); }, 5000 );

function position(data){console.log("location")}
function error(err){console.log(err)}
} else {
  /* geolocation IS NOT available */
  console.log("no location")
}



}


function draw() {
background(255)
textSize(30)
rectMode(CORNER);
if(wp > width +100 || wp < -50){s = -s;
  lr = r;lg=g;lb=b;
r = random(255);g= random(255);b=random(255)
}
var ff = int(45.3);
stroke(ff); line(0,85,width,85)
stroke(r,g,b);
 wp=wp+s;
line(0,85,wp,85);


//fill(90,20,255,x); rect(0,0,width,60)
fill(255);noStroke(); rect(0,0,width,70)
fill(217,170,16);textSize(width*0.02);
//text("makerMap",width*0.11,40)
home.Draw();makers.Draw();downloads.Draw();about.Draw();contact.Draw();
login.Draw();signup.Draw();
 //tint(40);
//image(icon,0,0,75,60);
image(icon,width/2-150,200,300,240);

fill(180,150,90,180);rect(0,height*0.88,width,height*0.12);
fill(120,10,250,190);textAlign(RIGHT);textSize(18)
text("creativeVision",width*0.95,height*0.91)
text(" 0512310833 :  טלפון",width*0.95,height*0.94)
text("כל הזכויות שמורות",width*0.95,height*0.97)
//**************************************************************
//                       signing
//**************************************************************

if(systemSign == true){

	rectMode(CENTER)
//fill(90,10,20);rect(width/2,height/1.7,600,400);
//fill(0);rect(width/2,height/4.1,600,50)
//textAlign(CENTER)
//fill(217,179,16); textSize(34); text("הרשמה",width/2,height/4)
textSize(height*0.025);fill(25)
if(password_err == false){
text("when signing in the application will get your loaction\n press signup to continue",width/2,height-30);

}
//sendinfo.Draw();
//regi.Draw();
}
if(active_login == true){
	rectMode(CENTER)
fill(20,20,190);rect(width/2+15,height/2-60,250,350,8);
loginButton.Draw();
}

textAlign(CENTER)
fill(0)
if(password_err == true){text("הסיסמא צריכה להיות בעלת 8 ספרות או יותר",width/2,height*0.95)}

}

//***********************************************
// mouseFunction
//***********************************************


function mousePressed(){


	if(home.MouseIsOver()){

	//	loadJSON('register/')
window.location.pathname = ''
}
if(downloads.MouseIsOver()){

//	loadJSON('register/')
window.location.pathname = '/links'
}

// login rutine
	if(login.MouseIsOver()){
if(	systemSign == true){
	systemSign = false;
	for(let i = 0;i< info.length;i++){	info[i].remove();}
	Password.remove();
  holder.remove();header.remove();About.remove();
}
active_login = true;

user_login = createInput('שם משתמש')
user_password = createInput('סיסמא','password');
loginData = selectAll('input');


user_login.position(width/2-(width/14),height/2-180)
user_password.position(width/2-(width/14),height/2-80)

auth.signInWithEmailAndPassword(user_login.value(), user_password.value()).then((cred) => {
console.log("you are in!!!")
});


for(let i = 0; i< loginData.length;i++){
loginData[i].size(width/7,25)
loginData[i].style('text-align','right')
loginData[i].style('font-size','18px')
loginData[i].style('color','blue')
loginData[i].style('background-color','rgb(240,242,242)')
loginData[i].style('padding','15px')
loginData[i].style('border-radius','25px')
loginData[i].style('border-width',' 1px')
}

	}


	if(signup.MouseIsOver()){
		if(	active_login == true){

	for(let i = 0;i< loginData.length;i++){	loginData[i].remove();}
			active_login = false;}
		systemSign = true;

 holder= createDiv('')
holder.style('height','85%')
holder.style('width','60%')
holder.style('position','absoulte')
holder.style('left','25%')
holder.style('top','25%')
holder.style('background-color','rgb(90,10,10)')
 header = createP('הרשמה')
header.style('background-color','black')
header.style('color','yellow')
header.style('font-size','40px')
header.style('text-align','center')
header.style('position','absoulte')
header.style('left','25%')
header.style('top','10%')
header.style('height','7%')
header.style('width','60%')
header.style('padding','3px 0px')

//var Phone, Twitt,Facebook,inst,Email,Password,Name,About;

	Name = createInput('שם');
	Phone = createInput('טלפון');
	Facebook = createInput('פייסבוק');
	Twitt = createInput('טוויטר')
  inst = createInput('אינסטגרם')
	Email = createInput('אימייל')
	Password = createInput('סיסמא')
  Site = createInput('אתר')

   About = createElement('textarea','השירותים שאתה מציע');

   About.position(width*0.35,height*0.6);
   About.style('left','35%')
   About.style('top','75%')
   About.size(width*0.4,height*0.08)
   About.style('height','6%')
   About.style('width','40%')
   About.style('border-color','blue')
   About.style('text-align','right')
   About.style('border-width','2px')
   About.style('border-radius','5px')
   //textArea.style('box-shadow','5px 7px #188888');


   Name.style('left','60%')
   Name.style('top','29%')
   Email.style('left','60%')
   Email.style('top','40%')
   Facebook.style('left','60%')
   Facebook.style('top','51%')
   Site.style('left','60%')
   Site.style('top','62%')
//Phone.position(width*0.6,height*0.32)
Phone.style('left','30%')
Phone.style('top','29%')
Twitt.style('left','30%')
Twitt.style('top','40%')
inst.style('left','30%')
inst.style('top','51%')
//Twitt.position(width*0.6,height*0.42)
//inst.position(width*0.3,height*0.42)

Password.style('left','45%')
Password.style('top','85%')

 info = selectAll('input')
for(let i = 0; i< info.length;i++){
info[i].size(width/5,25)
info[i].style('width','20%')
info[i].style('height','5%')
info[i].style('position','absoulte')
info[i].style('text-align','right')
info[i].style('font-size','18px')
info[i].style('color','blue')
info[i].style('background-color','rgb(240,242,242)')
info[i].style('padding','10px')
info[i].style('border-radius','5px')
info[i].style('border-width',' 1px')
}

Password.size(width/5,25)

sendButton = createButton('שלח')
sendButton.style('position','absolute')
sendButton.style('top','97%')
sendButton.style('left','50%')
sendButton.style('width','15%')
sendButton.style('height','8%')
sendButton.style('font-size','30px')
sendButton.style('background-color','blue')
sendButton.style('color','yellow')
sendButton.mouseClicked(sendData)

function sendData(){console.log("sending!!!")

if ("geolocation" in navigator) {
  /* geolocation is available */

  navigator.geolocation.getCurrentPosition(position=>{
  lat = position.coords.latitude;
  lon = position.coords.longitude;


      let data1 = Name.value();
      let data2 = Phone.value();
      let data3 = Email.value();
      let data4 = Facebook.value();
      let data5 = Twitt.value();
      let data6 = inst.value();
      let data7 = Site.value();
      let data8 = About.value();
      let data9 = Password.value();


  if(data9.length > 5){

    auth.createUserWithEmailAndPassword(data3, data9).then(cred => {
      //  console.log(cred.user);
 auth.signInWithEmailAndPassword(data3, data9).then((cred) => {

      var data ={
        name: data1,
        phone:data2,
        email: data3,
        face:data4,
        twitt: data5,
        inst: data6,
        site: data7,
        about:data8,
        pass: data9,
        lat: lat,
        lon: lon
      }
  ref.push(data)
  console.log("data sent!!!")
//  window.location.pathname = '/progrems'
});
});
  }else {password_err = true;console.log(password_err)}


});
} else {
  /* geolocation IS NOT available */
  console.log("no")
}


}

}

if(contact.MouseIsOver()){
	window.location.pathname = '/info'
}

if(makers.MouseIsOver()){
	window.location.pathname = '/market'

}


// check password and redirect
if(loginButton.MouseIsOver()){

	for(let i = 0; i< keys.length;i++){

		if(user_login.value() == email[i] && user_password.value()== pass[i]){
			let send = {
				user:names[i],
				pass: user_password.value()
		//	test:"sucsses"
			}

				socket.emit('msg',send);


			window.location.pathname = '/market'
	}else{console.log("no mach!!!")}
	}
  	console.log("done")
  }

}
