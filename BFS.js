/**
* 102 Binary Tree Level Order Traversal 
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @return {number[][]}
* e.g. input [1, 2, 3, 4, 5, null, 6] -> output [1, [2, 3], [4, 5, 6]]
*         1
*       /  \
*      2    3
*    /  \     \
*   4    5     6
*/
// var levelOrder = function(root) {
//   if(root == null){
//       return []
//   }
//   let result = [] // return result
//   let queue = [] // store the value need to be visited
//   queue.push([root])
//   while(queue.length > 0){
//       let length = queue[0].length
//       let subque = [], subResult = []
//       for(i = 0; i < length; i++){
//           subResult.push(queue[0][i].val)
//           if(queue[0][i].left){
//               subque.push(queue[0][i].left)
//           }if(queue[0][i].right){
//               subque.push(queue[0][i].right)
//           }
//       }
//       if(subque.length){
//           queue.push(subque)
//       }
//       result.push(subResult)
//       queue.shift()
//   }
//   return result
// };
var levelOrder = function(root) {
    let result = [] // for final return result
    let tempQue = [] // for each level Node of result
    if(root == null){
        return []
    }
    tempQue.push(root) // [(3)]
    while(tempQue.length != 0){
        let level = [] // for each value of level node
        let len = tempQue.length // in case the length change problem
        for(let i = 0; i < len; i++){
            let elem = tempQue.shift() //first in first out of queue, first one is node (3) 
            level.push(elem.val) //[3]
            elem.left ? tempQue.push(elem.left) : null
            elem.right ? tempQue.push(elem.right) : null
            //tempQue = [(9), (20)]
        }
        result.push(level)
      }
    
    return result
};
