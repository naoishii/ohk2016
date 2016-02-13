import Matter from 'matter-js';

import stage from './stage.js';
import spin from './spin.js';
import goal from './goal.js';

export default function main(engine, callback) {

  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;

  // create two boxes and a ground
  const circleA = Bodies.circle(300, 0, 20, {
    density: 0.001, // 質量
    frictionAir: 0.01, // 空気抵抗
    restitution: 0.2, // 弾力性
    friction: 0.001, // 摩擦
    name: 'coin'
  });

  // add all of the bodies to the world
  const c = spin();
  console.log(c);
  World.add(engine.world, [circleA, ...stage(), ...spin(engine), ...goal()]);

  let dangerCount = 0;
  let goalCount = 0;
  Events.on(engine, 'collisionActive', (event) => {
    const pairs = event.pairs;

    // change object colours to show those ending a collision
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      // しんだとき
      if ((pair.bodyA.name === 'coin' || pair.bodyB.name === 'coin') &&
          (pair.bodyA.name === 'hell' || pair.bodyB.name === 'hell')) {
        console.log('きけん！');
        dangerCount += 1;

        if (dangerCount > 100) {
          dangerCount = 0;
          // すながはんどら
          return callback(false);
        }
      }

      // ゴールした時
      if ((pair.bodyA.name === 'coin' || pair.bodyB.name === 'coin') &&
          (pair.bodyA.name === 'gaol' || pair.bodyB.name === 'goal')) {
        console.log('やったぜ！');
        goalCount += 1;

        if (goalCount > 100) {
          goalCount = 0;
          // すながはんどら
          return callback(true);
        }
      }
    }

  });
  Events.on(engine, 'collisionEnd', () => {
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
