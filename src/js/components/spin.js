import Matter from 'matter-js';

export default function getSpin(engine) {

  const Body = Matter.Body;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  const circleA1 = Bodies.circle(20, 150, 10, {isStatic: true});
  const circleA2 = Bodies.circle(20, 230, 10, {isStatic: true});
  const catapultA = Bodies.rectangle(20, 190, 20, 30, {});

  const circleB1 = Bodies.circle(350, 260, 10, {isStatic: true});
  const circleB2 = Bodies.circle(350, 340, 10, {isStatic: true});
  const catapultB = Bodies.rectangle(350, 300, 20, 30, {});

  const circleC1 = Bodies.circle(20, 360, 10, {isStatic: true});
  const circleC2 = Bodies.circle(20, 440, 10, {isStatic: true});
  const catapultC = Bodies.rectangle(20, 400, 20, 30, {});

  return [
    circleA1,
    circleA2,
    catapultA,
    Constraint.create(
      { bodyA: catapultA,
        pointA:{ x: 0, y: -10 },
        bodyB: circleA1,
        stiffness: 0.5,
      }),
    Constraint.create(
      { bodyA: catapultA,
        pointA:{ x: 0, y: 10 },
        bodyB: circleA2,
        stiffness: 0.5,
      }),

    circleB1,
    circleB2,
    catapultB,
    Constraint.create(
      { bodyA: catapultB,
        pointA:{ x: 0, y: -10 },
        bodyB: circleB1,
        stiffness: 0.5,
      }),
    Constraint.create(
      { bodyA: catapultB,
        pointA:{ x: 0, y: 10 },
        bodyB: circleB2,
        stiffness: 0.5,
      }),

    circleC1,
    circleC2,
    catapultC,
    Constraint.create(
      { bodyA: catapultC,
        pointA:{ x: 0, y: -10 },
        bodyB: circleC1,
        stiffness: 0.5,
      }),
    Constraint.create(
      { bodyA: catapultC,
        pointA:{ x: 0, y: 10 },
        bodyB: circleC2,
        stiffness: 0.5,
      }),
  ];
}
