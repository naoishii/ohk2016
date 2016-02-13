import Matter from 'matter-js';
import main from './components/main.js';



// 1.モジュールオブジェクトの初期化
var fs = require("fs");
var server = require("http").createServer(function(req, res) {
  console.log('hujkhjk2');
     res.writeHead(200, {"Content-Type":"text/html"});
     var output = fs.readFileSync("/home/tsunaga/index.html", "utf-8");
     res.end(output);
}).listen(8080);
var io = require("socket.io").listen(server);

// ユーザ管理ハッシュ
var userHash = {};

// 2.イベントの定義
io.sockets.on("connection", function (socket) {
  console.log('hujkhjk');

  // 接続開始カスタムイベント(接続元ユーザを保存し、他ユーザへ通知)
  socket.on("connected", function (name) {
    var msg = name + "が入室しました";
    userHash[socket.id] = name;
    io.sockets.emit("publish", {value: msg});
  });


  // メッセージ送信カスタムイベント
  socket.on("publish", function (data) {
    io.sockets.emit("publish", {value:data.value});
  });
  
  // 接続終了組み込みイベント(接続元ユーザを削除し、他ユーザへ通知)
  socket.on("disconnect", function () {
    if (userHash[socket.id]) {
      var msg = userHash[socket.id] + "が退出しました";
      delete userHash[socket.id];
      io.sockets.emit("publish", {value: msg});
    }
  });
});

var intervalid = null;
function play() {
	// Matter.js module aliases
	const Engine = Matter.Engine;
	const engine = Engine.create({
	});


	var coin = main(engine);

	// run the engine
	//Engine.run(engine);
	var start= new Date()*1;
	var total =0; 
	intervalid=setInterval(function () {
	  var cur = new Date()*1;
	  var diff = cur - start - total;
	  Matter.Engine.update(engine, diff);
	  total += diff;
	  console.log(coin.position.x, coin.position.y);
	  var deg = fs.readFileSync("/home/tsunaga/deg.txt");
	  io.sockets.emit("publish", {value:{x:coin.position.x, y:coin.position.y, angel:coin.angle, door:deg}});
      fs.writeFile('/home/tsunaga/game_status', "0");
	}, 16);
}

function stop(state) {
	// Matter.js module aliases
	const Engine = Matter.Engine;
	const engine = Engine.create({
	});


	var coin = main(engine);

	// run the engine
	//Engine.run(engine);
	var start= new Date()*1;
	var total =0; 
	intervalid=setInterval(function () {
	  var cur = new Date()*1;
	  var diff = cur - start - total;
	  total += diff;
	  //console.log(coin.position.x, coin.position.y);
	  var deg = fs.readFileSync("/home/tsunaga/deg.txt");
	  io.sockets.emit("publish", {value:{x:coin.position.x, y:coin.position.y, angel:coin.angle, door:deg}});
	  fs.writeFile('/home/tsunaga/game_status', state);
	  var tch = fs.readFileSync("/home/tsunaga/tch.txt");
	  if(tch=='1') {
		  clearInterval(intervalid);
		  play();
	  }
	}, 500);
}

stop("2");