
var search;
var keys;
var in_length= 0;

var names = new Array (1000);
var phone = new Array (1000);
var facebook = new Array (1000);
var email = new Array (1000);
var twitt = new Array (1000);
var site = new Array (1000);
var instegram = new Array(1000)
var pass = new Array (1000);
var about = new Array (1000)
var service_lat = new Array(1000);
var service_lon = new Array(1000);
var str=[]
var search_str= [];
var lastCity="";

for (let i = 0; i< pass.length;i++){

  names[i]="";phone[i]="";
  email[i]="";pass[i]="";instegram[i]="";
about[i]="";twitt[i]="";site[i]= "";
  service_lon[i] = 0; service_lat[i] = 0;
}

var s_city;
var s_size;
var city_val="";
var size_val="";
  var k;
var uploadData;
var uploadName="";
var home,downloads,makers,about,contact;
var savefile;
var storage;
var input_field;
var socket;
var userName;
var userPass;
var lat;
var lon;
var marker = new Array(300);
var currentReq = 0;
var choosefile
let selectedFile;
let font1;
var sendMessage;
var save_file;
var file_names;
var database ;
var storageRef;
var modal;
var modal_body;
var footer;
var dataName,dataPhone,dataEmail,dataface,head;
var dataInst,dataTwitt,dataAbout,dataSite;
var icon;

function preload(){
   font1 = loadFont('/ruge-boogie.regular.ttf');
  icon = loadImage('assets/logo3.jpg');

}

function setup() {
var c =	createCanvas(windowWidth, windowHeight);

	socket = io.connect('http://localhost:4000/');

httpGet('/market',false,function(res){
  console.log('market');
})

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

function whendone(data){
  console.log("done");
}

  str=  [['שם'], ['טלפון'],['יישוב'],['גודל הדפסה'],['חומרים'],['ניקוד באתר']];

var config = {
	 apiKey: "AIzaSyCgFGZnEAYV9ASg98wKyhHa9lN2eTEn0MU",
	 authDomain: "dmservice-24abb.firebaseapp.com",
	 databaseURL: "https://dmservice-24abb.firebaseio.com",
	 projectId: "dmservice-24abb",
	 storageBucket: "dmservice-24abb.appspot.com",
	 messagingSenderId: "974534849439",
	 appId: "1:974534849439:web:87db3685f0aefecc"
 };
 // Initialize Firebase
 firebase.initializeApp(config);


  database = firebase.database();
  ref = database.ref('data')
ref.on('value',gotData,errData);

const storageService = firebase.storage();
 storageRef = storageService.ref();



//document.querySelector('.file-submit').addEventListener('click', handleFileUploadSubmit);

//=================================================
//             firebase data code
//=================================================

function gotData(data){


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
    about[i]= search[k].about;
    service_lon[i] = search[k].lon;
    service_lat[i] = search[k].lat;


  }
currentReq = random(1,names.lenghth-1);
currentReq = int(currentReq);

  if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("yes")
  	navigator.geolocation.getCurrentPosition(position=>{

  	lat = position.coords.latitude;
  	lon = position.coords.longitude;

  	const mymap = L.map('mapid').setView([lat,lon], 10);
  			 const attribution =
  				 '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  			 const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  			 const tiles = L.tileLayer(tileUrl, { attribution });
  			 tiles.addTo(mymap);
         marker[5] = L.marker([lat,lon]).addTo(mymap);
         marker[5].bindTooltip("3d place").openTooltip();

    for(let i = 0; i< service_lon.length;i++){
    marker[i] = L.marker([service_lat[i],service_lon[i]]).addTo(mymap);
    marker[i].bindTooltip(names[i]);
    marker[i].on('click', function(ev) {
        //console.log("i was cliked :)  "+i); // ev is an event object (MouseEvent in this case)
currentReq = i;
    });
  }
  });
  } else {
    /* geolocation IS NOT available */
    console.log("no")
  }

}

function errData(err){
console.log(err);
}

//========================================================
//                    ui
//========================================================

dataName = select('#name')
dataPhone= select('#phone')
dataEmail = select('#email')
dataFace= select('#face')
dataTwitt = select('#twitter')
dataInst= select('#instegram')
dataSite = select('#website')
dataAbout= select('#areas')


head = select('#head')
head.style('text-align','center')
dataName.style('padding','-30px 10px')
modal_body= selectAll('p');
for(let i = 0; i< modal_body.length;i++){
//modal_body[i].style('padding','4px')
modal_body[i].style('text-align','right')
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

//textFont(font1);
}

function draw(){
//  background(55,45,155);

  // fill(20,20,220); rect(0,0,width,60)
   fill(255);stroke(60); rect(0,0,width,80)
     image(icon,0,0,100,80)
  // fill(217,170,16);textSize(width*0.025);
  // text("makerMap",width*0.13,height*0.05)
  fill(217,179,16); textSize(width*0.013);
  home.Draw();makers.Draw();downloads.Draw();about.Draw();contact.Draw();
 //choosefile.Draw();savefile.Draw();

textSize(16);fill(60,0,0);

textAlign(RIGHT);
for(let i= 0; i< 10;i++){

//  if(city[i] == city_val ){
//  if(lastCity != city_val){append(search_str, i);
  }



// if(city_val == 'כל האזורים'){
// text(names[i],width*0.91,200+(i*60))
// text(phone[i],width*0.8,200+(i*60))
// text(city[i],width*0.65,200+(i*60))
// text(printSize[i],width*0.51,200+(i*60))
// text(mat[i],width*0.38,200+(i*60))
// noFill();
// stroke(120);rect(200,170+(i*60),width-260,50,10);
// }

head.html(names[currentReq])
dataName.html("שם:   "+ names[currentReq])
//dataName.style('font-family','Comic Sans MS','cursive','san-serif')
dataPhone.html("טלפון:    "+ phone[currentReq])
dataEmail.html(email[currentReq]+"   :אימייל")
dataFace.html(facebook[currentReq]+"  :פייסבוק")
dataTwitt.html(twitt[currentReq]+"  :טוויור")
//dataInst.html(instegram[currentReq]+"  :אינסטגרם")
dataSite.html(site[currentReq]+"  :אתר")
dataAbout.html(about[currentReq]+"  :מה אני מציע")







lastCity = city_val;
for(let i = 0; i< search_str.length;i++){
  fill(0)
text(names[search_str[i]],width*0.91,200+(i*60))
text(phone[search_str[i]],width*0.8,200+(i*60))
text(city[search_str[i]],width*0.65,200+(i*60))
text(printSize[search_str[i]],width*0.51,200+(i*60))
text(mat[search_str[i]],width*0.38,200+(i*60))
noFill();
stroke(120);rect(200,170+(i*60),width-260,50,10);
}


// fill(45);rect(2,111,width,40)
// fill(217,169,16);
// for(let i= 0;i< str.length;i++){
//   text(str[i],width*0.9-(i*180),135);
// }

if(selectedFile != null){

let filename = selectedFile.name
let sp = filename.split(".");
let extension = sp[1];
let fname = sp[0]
if (fname.length > 7) {
    fname = filename.substring(0, 10);
}
fill(30,0,90); textSize(14)
text(fname+"."+ extension+"...",width*0.98,height*0.5)
}
}

//**************************************************
//mouseFunction
//**************************************************



function mousePressed(){

if(choosefile.MouseIsOver()){
document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
  function handleFileUploadChange(e) {
    selectedFile = e.target.files[0];
    //console.log(selectedFile.name)
    console.log("got file :)")
  }
}

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

  if(savefile.MouseIsOver()){


    //=================================================
    //            saving file to firebase
    //=================================================


function handleFileUploadSubmit(e) {

  file_names = database.ref('file_names/'+userName);

var nameList={
  name: selectedFile.name
}
console.log("added to list")
  file_names.push(nameList)
  const uploadTask = storageRef.child(`user1/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
// storageRef.put(selectedFile)
  uploadTask.on('state_changed', (data) => {
  // Observe state change events such as progress, pause, and resume
console.log(data)
  fileSize = data.totalBytes
  transfer = data.bytesTransferred
process = (transfer*100)/fileSize;


  }, (error) => {
    // Handle unsuccessful uploads

    console.log(error);
  }, () => {
     // Do something once upload is complete
     console.log('success');
  });
}




handleFileUploadSubmit();

}

}
