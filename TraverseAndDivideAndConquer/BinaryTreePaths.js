/**257. Binary Tree Paths
 * Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
//1.Traverse
var binaryTreePaths = function(root) {
  const result = [];
  if(root == null){
      return result;
  }
  let path = "" + root.val;
  helper(root, path, result);
  return result;
};

const helper = (root, path, result) => {
  if(root === null){
      return;
  }
  if(root.left === null && root.right === null){
      result.push(path);
      return;
  }
  if(root.left !== null){
      helper(root.left,  path +"->"+ root.left.val, result);
  }
  if(root.right !== null){
      helper(root.right, path +"->"+ root.right.val, result);
  }
}
//2.Divide and Conquer
var binaryTreePaths = function(root) {
  return DivideAndConquer(root);
};

const DivideAndConquer = (root) => {
  const result = [];
  if(root == null){
      return result;
  }
  // receive the result from kids
  const left = DivideAndConquer(root.left);
  const right = DivideAndConquer(root.right);
  // prepare the result that used to return to your parent node.
  for(let index in left){
      result.push(root.val + "->" + left[index]);
  }
  for(let index in right){
      result.push(root.val + "->" + right[index]);
  }
  // control the odd value of the root node.
  if(result.length === 0){
      result.push("" + root.val);
  }
  return result;
}