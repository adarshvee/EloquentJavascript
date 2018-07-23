//Exercise 1 in  Chapter 7
/*
It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier
tasks or the kind of tasks that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the
 robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.

For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
*/

function compareRobots(robot1, memory1, robot2, memory2) {
  let turns1 = 0, turns2 = 0;
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    turns1 += run(state, robot1, memory1);
    turns2 += run(state, robot2, memory2);
  }
  return {avg1 : turns1/100, avg2 : turns2/100}

  function run(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
//{avg1: 18.71, avg2: 14.76}
