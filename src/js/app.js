import Matter from 'matter-js';

import main from './components/main.js';

// Matter.js module aliases
const Engine = Matter.Engine;
// create a Matter.js engine
const engine = Engine.create(document.body, {
  render: {
    options: {
      //wireframes: false
    }
  }
});

main(engine);

// run the engine
Engine.run(engine);
