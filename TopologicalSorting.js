/**
Given an directed graph, a topological order of the graph nodes is defined as follow:

For each directed edge A -> B in graph, A must before B in the order list.
The first node in the order can be any node in the graph with no nodes direct to it.
Find any topological order for the given graph.
 */
class DirectedGraphNode {
  constructor(x){
    this.label = x;
    this.neighbors = new Array();
  }
}

const topSort = (graph) => {
  const result = []; // use to store the return topological sorting
  const map = new Map();// use to store the DirectedGraphNode -> Its In-degree
  for(let node of graph){
    for(let neighbor of node.neighbors){
      if(map.has(neighbor)){
        map.set(neighbor, map.get(neighbor) + 1);
      }
      else{
        map.set(neighbor, 1);
      }
    }
  }
  const queue = []; // node sequence
  for(let node of graph){
    if(!map.has(node)){
      queue.push(node);
      result.push(node);
    }
  }
  while(queue.length){
    // console.log(queue);
    const node = queue.shift();
    for(let neighbor of node.neighbors){
      map.set(neighbor, map.get(neighbor) - 1);
      if(!map.get(neighbor)){
        queue.push(neighbor);
        result.push(neighbor);
      }
    }
  }
  return result;
}

const node0 = new DirectedGraphNode(0); 
const node1 = new DirectedGraphNode(1); 
const node2 = new DirectedGraphNode(2); 
const node3 = new DirectedGraphNode(3); 
const node4 = new DirectedGraphNode(4); 

node0.neighbors.push(node1);
node1.neighbors.push(node1);
node1.neighbors.push(node3);
node2.neighbors.push(node1);
node3.neighbors.push(node1);
node4.neighbors.push(node1);
node3.neighbors.push(node2);
node4.neighbors.push(node2);
node4.neighbors.push(node3);
node4.neighbors.push(node4);

const graph = [];
graph.push(node0);
graph.push(node1);
graph.push(node2);
graph.push(node3);
graph.push(node4);

console.log(topSort(graph));




