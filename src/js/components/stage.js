import Matter from 'matter-js';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../constants/world';

export default function getWorld() {

  const Bodies = Matter.Bodies;

  const ground = Bodies.rectangle(200, STAGE_HEIGHT, 400, 20, { isStatic: true, name: 'hell' });
  const wallR = Bodies.rectangle(STAGE_WIDTH, STAGE_HEIGHT / 2, 10, STAGE_HEIGHT, { isStatic: true });
  const wallL = Bodies.rectangle(0, STAGE_HEIGHT / 2, 10, STAGE_HEIGHT, { isStatic: true });

  const bar1 = Bodies.rectangle(300, 80, 400, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });
  const bar2 = Bodies.rectangle(90, 200, 120, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });
  const bar3 = Bodies.rectangle(260, 170, 100, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });
  const bar4 = Bodies.rectangle(330, 170, 70, 10, {
    isStatic: true,
    angle: Math.PI * 0.06,
    name: 'hell',
  });
  const bar5 = Bodies.rectangle(190, 230, 200, 10, {
    isStatic: true,
    angle: Math.PI * 0.06
  });

  const bar6 = Bodies.rectangle(310, 320, 100, 10, {
    isStatic: true,
    angle: Math.PI * 0.06
  });
  const bar7 = Bodies.rectangle(170, 300, 60, 10, {
    isStatic: true,
    angle: Math.PI * 0.06
  });
  const bar7a = Bodies.rectangle(230, 350, 60, 10, {
    isStatic: true,
    angle: Math.PI * 0.06,
    name: 'hell',
  });
  const bar8 = Bodies.rectangle(40, 300, 60, 10, {
    isStatic: true,
    angle: Math.PI * -0.06,
    name: 'hell',
  });


  const bar9 = Bodies.rectangle(40, 460, 220, 10, {
    isStatic: true,
    angle: Math.PI * -0.04
  });
  const bar10 = Bodies.rectangle(250, 480, 10, 60, {
    isStatic: true,
  });
  const bar11 = Bodies.rectangle(310, 480, 10, 60, {
    isStatic: true,
  });

  return [
    ground, wallR, wallL, bar1, bar2, bar3, bar4, bar5,
    bar6, bar7, bar7a, bar8, bar9, bar10, bar11
  ];
  
}
