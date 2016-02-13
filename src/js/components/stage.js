import Matter from 'matter-js';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../constants/world';

export default function getWorld() {

  const Bodies = Matter.Bodies;

  const ground = Bodies.rectangle(200, STAGE_HEIGHT, 400, 20, { isStatic: true });
  const wallR = Bodies.rectangle(STAGE_WIDTH, STAGE_HEIGHT / 2, 10, STAGE_HEIGHT, { isStatic: true });
  const wallL = Bodies.rectangle(0, STAGE_HEIGHT / 2, 10, STAGE_HEIGHT, { isStatic: true });

  const bar1 = Bodies.rectangle(300, 80, 400, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });
  const bar2 = Bodies.rectangle(90, 200, 100, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });
  const bar3 = Bodies.rectangle(260, 170, 100, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });
  const bar4 = Bodies.rectangle(330, 170, 70, 10, {
    isStatic: true,
    angle: Math.PI * 0.06
  });
  const bar5 = Bodies.rectangle(190, 230, 200, 10, {
    isStatic: true,
    angle: Math.PI * 0.06
  });

  const bar6 = Bodies.rectangle(290, 320, 200, 10, {
    isStatic: true,
    angle: Math.PI * 0.06
  });

  return [
    ground, wallR, wallL, bar1, bar2, bar3, bar4, bar5,
    bar6, 
  ];
  
}
