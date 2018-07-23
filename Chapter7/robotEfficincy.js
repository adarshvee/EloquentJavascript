//Exercise 2 in  Chapter 7
/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot?
If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/
//As coded in the solution
function lazyRobot({place, parcels}, route) {
  if (route.length == 0) {
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {route : findRoute(roadGraph, place, parcel.place), pickUp : true};
      } else {
        return {route : findRoute(roadGraph, place, parcel.address), pickUp : false};
      }
    })

    //Decide which route to take. Returns a negative number. Pickups get a small bonus
    function score({route, pickup}) {
      return (pickup ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }
  return {direction : route[0], memory : route.slice(1)};
}

runRobot(VillageState.random(), lazyRobot, []);
/*
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Bob's House
Moved to Town Hall
Moved to Daria's House
Moved to Ernie's House
Moved to Daria's House
Moved to Town Hall
Moved to Shop
Moved to Grete's House
Moved to Farm
Done in 12 turns
*/
compareRobots(lazyRobot, [], goalOrientedRobot, []);
//{avg1: 12.83, avg2: 14.88}
