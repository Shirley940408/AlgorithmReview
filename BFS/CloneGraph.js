/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const map = new Map();
  const old = getNode(node);
  //copy nodes
  for(let node of old){
    map.set(node, new Node(node.val, []))
  }
  //copy neighbors(edges)
  for(let node of old){
    let newNode = map.get(node);
    for(let neighbor of node.neighbors){
      newNeighbor = map.get(neighbor)
      newNode.neighbors.push(newNeighbor)
    }
  }
  return map.get(node)    
};

const getNode = node => {
  const queue = []; // remain all the nodes in the graph for level control
  const set = new Set(); // record for every node.
  queue.push(node);
  set.add(node);
  while(queue.length){
    const node = queue.shift();
    for(let neighbor of node.neighbors){
      if(!set.has(neighbor)){
        queue.push(neighbor);
        set.add(neighbor);
      }
    }
  }
  return set;
}

// const array = ["Hello", "World!"];
// for(let val in array){
//   console.log(val);
// }
// for(let val of array){
//   console.log(val);
// }
