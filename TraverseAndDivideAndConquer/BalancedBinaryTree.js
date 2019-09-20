/**
 * @param root: The root of binary tree.
 * @return: True if this Binary tree is Balanced, or false.
 */
// const isBalanced = (root) => {
//   // write your code here
//   this.NotBalanced = -1;
//   return height(root) != NotBalanced;
// }

// const height = (root) => {
//   if(root === null){
//       return 0;
//   }
//   let left = height(root.left);
//   let right = height(root.right);
//   if(left == NotBalanced || right == NotBalanced){
//       return NotBalanced;
//   }
//   if(Math.abs(left - right) > 1){
//       return NotBalanced;
//   }
//   return Math.max(left, right) + 1;
// }

//A decent way to write to avoid the misunderstanding about the return result of return height and is Balanced or not.
const isBalanced = function (root) {
  // write your code here
  return height(root).balanced == true;
}

const height = (root) => {
  if(root === null){
      return new ResultType(0, true);
  }
  let left = height(root.left);
  let right = height(root.right);
  if(left.balanced == false || right.balanced == false){
      return new ResultType(-1, false);
  }
  if(Math.abs(left.height - right.height) > 1){
      return new ResultType(-1, false);
  }
  return new ResultType(Math.max(left.height, right.height) + 1, true);
}

class ResultType{
  constructor(height, balanced){
      this.height = height; // integer
      this.balanced = balanced; // boolean
  }
}