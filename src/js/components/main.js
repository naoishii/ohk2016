import Matter from 'matter-js';

import stage from './stage.js';

export default function main(engine) {

  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;

  // create two boxes and a ground
  const circleA = Bodies.circle(300, 0, 20, {
    density: 0.001, // 質量
    frictionAir: 0.01, // 空気抵抗
    restitution: 1, // 弾力性
    friction: 0.01 // 摩擦
  });

  // add all of the bodies to the world
  World.add(engine.world, [circleA, ...stage()]);

  Events.on(engine, 'collisionStart', () => {
    console.log(circleA.position.x, circleA.position.y);
  });
  return circleA;
};
