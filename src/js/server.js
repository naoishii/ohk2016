import Matter from 'matter-js';
import main from './components/main.js';


// Matter.js module aliases
const Engine = Matter.Engine;
const engine = Engine.create({
  //  render: {
  //    options: {
  //      //wireframes: false
  //      width: 640, // canvasの横幅
  //      height: 1136, // canvasの高さ
  //    }
  //  }
});


var coin = main(engine);

// run the engine
//Engine.run(engine);
var start= new Date()*1;
var total =0; 
setInterval(function () {
  var cur = new Date()*1;
  var diff = cur - start - total;
  Matter.Engine.update(engine, diff);
  total += diff;
  console.log(coin);
  console.log(coin.position.x, coin.position.y);
}, 16);

// 1.モジュールオブジェクトの初期化
var fs = require("fs");
var server = require("http").createServer(function(req, res) {
     res.writeHead(200, {"Content-Type":"text/html"});
     var output = fs.readFileSync("./index.html", "utf-8");
     res.end(output);
}).listen(8080);
var io = require("socket.io").listen(server);

// ユーザ管理ハッシュ
var userHash = {};

// 2.イベントの定義
io.sockets.on("connection", function (socket) {

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