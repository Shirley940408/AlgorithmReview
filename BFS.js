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
var levelOrder = function(root) {
  if(root == null){
      return []
  }
  let result = [] // return result
  let queue = [] // store the value need to be visited
  queue.push([root])
  while(queue.length > 0){
      let length = queue[0].length
      let subque = [], subResult = []
      for(i = 0; i < length; i++){
          subResult.push(queue[0][i].val)
          if(queue[0][i].left){
              subque.push(queue[0][i].left)
          }if(queue[0][i].right){
              subque.push(queue[0][i].right)
          }
      }
      if(subque.length){
          queue.push(subque)
      }
      result.push(subResult)
      queue.shift()
  }
  return result
};