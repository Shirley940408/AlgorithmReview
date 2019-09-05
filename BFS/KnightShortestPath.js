/**
 * Definition for a point.
 * class Point {
 *     int x;
 *     int y;
 *     Point() { x = 0; y = 0; }
 *     Point(int a, int b) { x = a; y = b; }
 * }
 * 611. Knight Shortest Path
Given a knight in a chessboard (a binary matrix with 0 as empty and 1 as barrier) with a source position, find the shortest path to a destination position, return the length of the route.
Return -1 if destination cannot be reached.

Example
Example 1:

Input:
[[0,0,0],
 [0,0,0],
 [0,0,0]]
source = [2, 0] destination = [2, 2] 
Output: 2
Explanation:
[2,0]->[0,1]->[2,2]
Example 2:

Input:
[[0,1,0],
 [0,0,1],
 [0,0,0]]
source = [2, 0] destination = [2, 2] 
Output:-1
Clarification
If the knight is at (x, y), he can get to the following positions in one step:

(x + 1, y + 2)
(x + 1, y - 2)
(x - 1, y + 2)
(x - 1, y - 2)
(x + 2, y + 1)
(x + 2, y - 1)
(x - 2, y + 1)
(x - 2, y - 1)
Notice
source and destination must be empty.
Knight can not enter the barrier.
Path length refers to the number of steps the knight takes.
 */
const shortestPath = (grid, source, destination) => {
  if(source == null || destination == null || grid == null || grid.length == 0 || grid[0].length == 0){
    return -1;
  }
  const X = [1, 1, 2, 2, -1, -1, -2, -2];
  const Y = [2, -2, 1, -1, 2, -2, 1, -1];
  const queue = []// Use it for visiting every posible step;
  queue.push(source);
  let steps = 0;
  while(queue.length){
    let currentStep = queue.shift();
    for(let i = 0; i < X.length; i++){
      let nextstepX = currentStep.x + X[i];
      let nextstepY = currentStep.y + Y[i];
      if(!inBoundAndHaveNotBeenVisited(nextstepX, nextstepY, grid)){
        continue;
      }
      if(nextstepX == destination.x && nextstepY == destination.y){
        return steps;
      }
      let nextStep = new Point(nextstepX,nextstepY);
      queue.push(nextStep);
      // console.log(queue);
      grid[nextstepY][nextstepX] = true;
    }
    steps++;
  }
  return -1;
}
const inBoundAndHaveNotBeenVisited = (x, y, grid) => {
  if(x >= grid[0].length || x < 0){
    return false;
  }
  if(y >= grid.length || y < 0){
    return false;
  }
  return grid[y][x] == false;
}

class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

console.log(shortestPath([[0,0,0],[0,0,0],[0,0,0]], new Point(2,0), new Point(2,2)));
// console.log(0 == false)