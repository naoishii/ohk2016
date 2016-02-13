import Matter from 'matter-js';

export default function main(engine) {

  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;

  // create two boxes and a ground
  const circleA = Bodies.circle(400, 200, 40, {
    density: 0.001, // 質量
    frictionAir: 0.01, // 空気抵抗
    restitution: 1, // 弾力性
    friction: 0.01 // 摩擦
  });

  const boxA = Bodies.rectangle(40, 50, 80, 80);
  const boxB = Bodies.rectangle(450, 50, 80, 80);
  const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  const wallR = Bodies.rectangle(800, 400, 30, 400, { isStatic: true });
  const wallL = Bodies.rectangle(0, 400, 30, 400, { isStatic: true });

  // add all of the bodies to the world
  World.add(engine.world, [circleA, boxA, boxB, ground, wallR, wallL]);


  Events.on(engine, 'collisionStart', () => {
    console.log(circleA.position.x, circleA.position.y);
  });

};
