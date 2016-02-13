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


main(engine);


// run the engine
//Engine.run(engine);

for (let i = 0; i < 10000; i++) {
  Matter.Engine.update(engine, 16);
}
