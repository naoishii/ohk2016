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
