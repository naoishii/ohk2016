import Matter from 'matter-js';

import stage from './stage.js';
import spin from './spin.js';

export default function main(engine) {

  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;

  // create two boxes and a ground
  const circleA = Bodies.circle(300, 0, 20, {
    density: 0.001, // 質量
    frictionAir: 0.01, // 空気抵抗
    restitution: 0.2, // 弾力性
    friction: 0.001, // 摩擦
    name: 'tsunaga'
  });

  // add all of the bodies to the world
  const c = spin();
  console.log(c);
  World.add(engine.world, [circleA, ...stage(), ...spin(engine)]);

  Events.on(engine, 'collisionEnd', (event) => {
    console.log({
      x: circleA.position.x,
      y: circleA.position.y,
    });
    //if (event.pairs.length > 0) {
    //  var pair = event.pairs[0];
    //  console.log(pair.bodyA, pair.bodyB);
    //  pair.bodyA.render.fillStyle = '#aaaaaa';
    //  pair.bodyB.render.fillStyle = '#aaaaaa';
    //}
  });


  return circleA;
};
