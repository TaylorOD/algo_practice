// Find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. 
// An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.

// For n = 2, the output should be
// shapeArea(n) = 5;

// For n = 3, the output should be
// shapeArea(n) = 13.

// Create function that takes in n as a variable 
function shapeArea(n) {
  // return n*n because we want to spread outwards based on the given n. Add n-1 * n-1 to create the edges of the shape.
  // 3*3 is 9. Plus (3-1)*(3-1). 13 is the total area.
  return n*n + (n-1)*(n-1)
}
// call the ShapeArea function
console.log(shapeArea(3))