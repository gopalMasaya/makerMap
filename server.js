var express = require('express');
var session = require('express-session')
var bp = require('body-parser')
var app = express();
app.set('trust proxy', 1)

var server = app.listen(process.env.PORT || 4000,res);
var path = require('path');
var router = express.Router();
var socket = require('socket.io');
var io = socket(server);

var user="";
var user_pass="";
var user_data;
var send = false;



function res(){
  var host = server.address().address;
   var port = server.address().port;
  console.log("starting.....")
  console.log(__dirname)
}

io.sockets.on('connection',onConnection);

function onConnection(socket){
  console.log("new connection"+socket.id);
 io.sockets.emit('msg', "AIzaSyCgFGZnEAYV9ASg98wKyhHa9lN2eTEn0MU");
 send = false;


   if(user_data != undefined){
   io.sockets.emit('msg',user_data);
}else console.log("no data")

  socket.on('msg',message);

  function message(data){
   console.log(data);
   userPass = data.pass;
   user = data.user;

   socket.broadcast.emit('msg',data);
   user_data = data;
   io.sockets.emit('msg',data);
send = false;
  }

if(user_data != undefined){

  io.sockets.emit('msg',user_data);}



socket.on('disconnect', function(){
  console.log("refresh")


});

}
if(user_data != undefined){
var mess = user_data;}


app.use(express.static('website'));
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}))



app.get('/register', function(req, res) {
  //res.send("done")
  res.sendFile(path.join(__dirname +'/website/water.html'));

});

app.get('/market', function(req, res) {
  //res.send("done")
  var sendto = path.join(__dirname +'/website/index1.html');
  sess=req.session;
  sess.sessdata = {};
  sess.sessdata.user= user;
  sess.sessdata.pass= user_pass;
  var data = {
      "Data":""
  };
//  data["Data"] = 'Session set';
  //res.json(data);


// reload
  sess.reload(function(err) {


          if(err){
            console.log("error line 100:  "+ err)
             data["Data"] = user;
             res.json(data);
          }else{
              data["Data"] = {
                user: user,
                pass:userPass
              }
            console.log("data   "+ user_data.user)
            send = false;
            for(let i = 0; i< 10; i++){

          // if(send == false){
          // io.sockets.emit('msg',user_data);}
          // if(i >2){send = true}

          }
          }
      })


  res.sendFile(sendto);
  //res.sendFile(options)

});


app.get('/info', function(req, res) {
  //res.send("done")
var sendto2 = res.sendFile(path.join(__dirname +'/website/info.html'));

//  res.sendFile(sendto2);


});


app.get('/progrems', function(req, res) {
  //res.send("done")
  res.sendFile(path.join(__dirname +'/website/index3.html'));

});


app.get('/welcome', function(req, res) {
  //res.send("done")
  res.sendFile(path.join(__dirname +'/website/water.html'));

});



app.get('/links', function(req, res) {
  //res.send("done")
//  res.sendFile(path.join(__dirname +'/website/links.html'));

  var sendto1 = path.join(__dirname +'/website/links.html');
  sess=req.session;
  sess.sessdata = {};
  sess.sessdata.user= user;
  sess.sessdata.pass= user_pass;
  var data = {
      "Data":""
  };
  sess.reload(function(err) {


          if(err){
            console.log("error line 100:  "+ err)
             data["Data"] = user;
             res.json(data);
          }else{
              data["Data"] = {
                user: user,
                pass:userPass
              }
            console.log("data   "+ user_data.user)

          }
  })
  res.sendFile(sendto1);
});
