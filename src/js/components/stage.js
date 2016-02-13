import Matter from 'matter-js';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../constants/world';

export default function getWorld() {

  const Bodies = Matter.Bodies;

  const ground = Bodies.rectangle(200, STAGE_HEIGHT, 400, 20, { isStatic: true });
  const wallR = Bodies.rectangle(STAGE_WIDTH, STAGE_HEIGHT / 2, 10, STAGE_HEIGHT, { isStatic: true });
  const wallL = Bodies.rectangle(0, STAGE_HEIGHT / 2, 10, STAGE_HEIGHT, { isStatic: true });

  const bar1 = Bodies.rectangle(300, 80, 300, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });
  const bar2 = Bodies.rectangle(100, 200, 300, 10, {
    isStatic: true,
    angle: Math.PI * -0.06
  });


  return [
    ground, wallR, wallL, bar1, bar2
  ];
  
}
