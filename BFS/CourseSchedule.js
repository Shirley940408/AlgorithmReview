/**
 * /615. Course Schedule

There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example

Example 1:
Input: n = 2, prerequisites = [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: n = 2, prerequisites = [[1,0],[0,1]] 
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should
also have finished course 1. So it is impossible.// 这个位置也可以看出这道题是否有拓扑序的关键在于不能成环，只要在某一个区域成环了就没有拓扑序
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
*/
const canFinish = (numCourses, prerequistes) => {
  const degree = new Array(numCourses);//store the in-degree of each course.
  degree.fill(0);
  // console.log(degree);
  const neighbors = new Array(numCourses);//store the course that after taking the prerequistes
  for(let i = 0; i < numCourses; i++){
    neighbors[i] = [];
  }
  console.log(neighbors);
  for(let i = 0; i < prerequistes.length; i++){
    // [1, 0] means 1 <- 0
    degree[prerequistes[i][0]]++; // account the in-degree
    neighbors[prerequistes[i][1]].push(prerequistes[i][0]);// record all the neighbors of the course
    console.log(neighbors);
  }
  console.log(degree, neighbors);
  const queue = [];
  let count = 0;
  while(count < numCourses){
    if(!degree[count]){
      queue.push(count);
    }
    count++;
  }
  console.log(queue);
  let step = 0;
  while(queue.length){
    let course = queue.shift();
    step++;
    console.log(step);
    if(neighbors.hasOwnProperty(course)){
      for(let i = 0; i < neighbors[course].length; i++){
        degree[neighbors[course][i]]--;
        if(degree[neighbors[course][i]]){
          continue;
        }
        queue.push(neighbors[course][i]);
        console.log(queue);
      }
    }
  }
  return numCourses == step;
}
console.log(canFinish(3, [[0,1], [0,2], [1,2]]));