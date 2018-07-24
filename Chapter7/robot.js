/*
The village of Meadowfield isn’t very big. It consists of 11 places with 14 roads between them.
*/
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

//An object to represent the roads in a more convenient way. This object is actually a map.
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) graph[from] = [to];
    else graph[from].push(to);
  }

  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

//Convert roads to our new object representation
const roadGraph = buildGraph(roads);

/*Create a structure to hold the state of the village. Consider the minimum set of things that describe the state.
In our case, we have the robot's current location, collection of undelivered parcels. Each parcel has a current location and a
destination address */
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) return this; //If there is no road going from current place to destination, it is an invalid move. Return back current set of parcels
    else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p; //Keep parcels not at the current place as it is. These will be collected later
        return {place : destination, address : p.address}; //Move along parcels that were in old location to the destination
      }).filter(p => p.place != p.address); //Remove parcels whose current location matches their intended destiantion as they are delivered
      return new VillageState(destination, parcels);
    }
  }
}

//Test that the old state is preserved
let first = new VillageState("Post Office", [{place : "Post Office", address : "Alice's House"}]);
let next = first.move("Alice's House");
console.log(next.place);
//Alice's House
console.log(next.parcels);
// []
console.log(first.place);
// Post Office

//A robot takes in a state and decides where to go next. It also has a memory that we will keep passing along in subsequent calls
//So our robot takes in a state and a memory, returns a place and an updated memory. We wrap this in an object called "action"
// "robot" is an interface that defines the methodology adapted by the robot to decide the next direction
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

//Creating a dumb implementation of robot which picks direction randomly
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

//This robot does not need to remember anything, so we ignore the "memory" arguement
//We can do this because JS functions can be called by ommitting arguements
function randomRobot(state) {
  return {direction : randomPick(roadGraph[state.place])};
}

//Test our dumb robot
//We create a static method by adding a property directly to the constructor
VillageState.random = function(parcelCount = 5) {
  let parcels =[];
  //Populate array of parcels
  for (let i = 0; i < parcelCount; i++) {
    //Generate a random current location for each parcel
    let address = randomPick(Object.keys(roadGraph));
    let place;
    //Generate a random delivery address for each parcel. Loop until delivery address
    //is different from the current location
    do {
      place = randomPick(Object.keys(roadGraph))
    } while (place == address);
    parcels.push({place, address});
  }
  //Start our tobot from the "Post Office"
  return new VillageState("Post Office", parcels);
}

//Test our random robot
runRobot(VillageState.random(), randomRobot);
/*
Moved to Alice's House
Moved to Post Office
Moved to Marketplace
Moved to Shop
Moved to Grete's House
Moved to Shop
Moved to Grete's House
Moved to Ernie's House
Moved to Grete's House
Moved to Shop
Moved to Marketplace
Moved to Town Hall
Moved to Shop
Moved to Town Hall
Moved to Bob's House
Moved to Alice's House
Moved to Post Office
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Bob's House
Moved to Alice's House
Moved to Post Office
Moved to Marketplace
Moved to Farm
Moved to Marketplace
Moved to Shop
Moved to Grete's House
Moved to Shop
Moved to Marketplace
Moved to Farm
Moved to Grete's House
Moved to Farm
Moved to Marketplace
Moved to Shop
Moved to Town Hall
Moved to Shop
Moved to Marketplace
Moved to Post Office
Moved to Marketplace
Moved to Post Office
Moved to Marketplace
Moved to Shop
Moved to Grete's House
Moved to Farm
Moved to Grete's House
Moved to Ernie's House
Moved to Grete's House
Moved to Shop
Moved to Grete's House
Moved to Shop
Moved to Town Hall
Moved to Daria's House
Moved to Town Hall
Moved to Daria's House
Moved to Ernie's House
Moved to Daria's House
Moved to Ernie's House
Moved to Daria's House
Moved to Ernie's House
Moved to Daria's House
Moved to Ernie's House
Moved to Grete's House
Moved to Ernie's House
Moved to Daria's House
Moved to Ernie's House
Moved to Daria's House
Moved to Town Hall
Moved to Daria's House
Moved to Town Hall
Moved to Bob's House
*/

//The Mail Truck routine : Find a route that passes through all points and run through it twice
//You would have completed the goal

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

//Implement a robot that uses memory to follow a route
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction : memory[0], memory : memory.slice(1)};
}

//Test the mailRoute robot
runRobot(VillageState.random(), routeRobot, []);
/*
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Bob's House
Moved to Town Hall
Moved to Daria's House
Moved to Ernie's House
Moved to Grete's House
Moved to Shop
Moved to Grete's House
Moved to Farm
Moved to Marketplace
Moved to Post Office
Moved to Alice's House
Moved to Cabin
Done in 15 turns
*/

//Route finding algorithm
function findRoute(graph, from, to) {
  let work = [{at : from, route : []}];
  for (let i = 0; i < work.length; i++){
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at : place, route : route.concat(place)});
      }
    }
  }
}

// (VillageState, Array) → {direction: string, memory: Array}
function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction : route[0], memory : route.slice(1)};
}

/*
Moved to Marketplace
Moved to Post Office
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Bob's House
Moved to Town Hall
Moved to Daria's House
Moved to Ernie's House
Moved to Daria's House
Moved to Town Hall
Moved to Bob's House
Moved to Town Hall
Moved to Shop
Moved to Grete's House
Moved to Shop
Moved to Town Hall
Done in 17 turns
*/
