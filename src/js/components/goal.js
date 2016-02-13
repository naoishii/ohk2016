import Matter from 'matter-js';

export default function getGoal() {

  const Bodies = Matter.Bodies;

  const goal = Bodies.rectangle(280, 500, 30, 10, {
    isStatic: true,
  });

  return [
    goal
  ];
}

