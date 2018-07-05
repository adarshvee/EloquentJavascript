/* This program generates a random point on a circle with a given radius. Given an object as coordinates*/
/* The program demonstrates use of Math function, including random number generation */
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x : radius * Math.cos(angle), y : radius * Math.sin(angle)}
}
