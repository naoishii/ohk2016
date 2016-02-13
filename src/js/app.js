import Matter from 'matter-js';

import main from './components/main.js';

import * as constants from './constants/world';

// Matter.js module aliases
const Engine = Matter.Engine;
// create a Matter.js engine
const engine = Engine.create(document.body, {
  render: {
    options: {
      //wireframes: false
      width: constants.STAGE_WIDTH, // canvasの横幅
      height: constants.STAGE_HEIGHT, // canvasの高さ
    }
  }
});

main(engine);

// run the engine
Engine.run(engine);
