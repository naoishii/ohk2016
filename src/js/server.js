import Matter from 'matter-js';

import main from './components/main.js';

// Matter.js module aliases
const Engine = Matter.Engine;
const engine = Engine.create();

main(engine);


// run the engine
//Engine.run(engine);

for (let i = 0; i < 10000; i++) {
  Matter.Engine.update(engine, 16);
}
