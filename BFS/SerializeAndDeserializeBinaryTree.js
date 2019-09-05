/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let queue = [];
  let sequence = "";
  if(root == null){
      return "[]"
  }
  queue.push(root);
  sequence += "[" + root.val;
  while(queue.length){
      let node = queue.shift();
      if(node.left){
          queue.push(node.left);
          sequence += "," + node.left.val;
      }else{
          sequence += "," + null;
      }
      if(node.right){
          queue.push(node.right);
          sequence += "," + node.right.val;
      }else{
          sequence += "," + null;
      }
  }
  sequence += "]";
  return sequence;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if(data == "[]"){
      return null;
  }
  let seq = data.substring(1, data.length - 1).split(",");
  const root = new TreeNode(parseInt(seq[0], 10));
  seq.shift();
  const tempQue = [];
  tempQue.push(root);
  let leftFlag = true;
  while(seq.length){
      let node;
      if(seq[0] == "null"){
         node = null;
      }
      else{
         node = new TreeNode(parseInt(seq[0], 10));
      }
      seq.shift();
      if(node){
          if(leftFlag){
              tempQue[0].left = node;
              tempQue.push(node);
          }
          else{
              tempQue[0].right = node;
              tempQue.push(node);
          }
      }

      leftFlag = !leftFlag;
      leftFlag ? tempQue.shift() : null;
  }
  return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/