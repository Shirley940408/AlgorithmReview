/**
 *  605. Sequence Reconstruction
中文English
Check whether the original sequence org can be uniquely reconstructed from the sequences in seqs. The org sequence is a permutation of the integers from 1 to n, with 1 ≤ n ≤ 10^4. Reconstruction means building a shortest common supersequence of the sequences in seqs (i.e., a shortest sequence so that all sequences in seqs are subsequences of it). Determine whether there is only one sequence that can be reconstructed from seqs and it is the org sequence.

Example
Example 1:

Input:org = [1,2,3], seqs = [[1,2],[1,3]]
Output: false
Explanation:
[1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is also a valid sequence that can be reconstructed.
Example 2:

Input: org = [1,2,3], seqs = [[1,2]]
Output: false
Explanation:
The reconstructed sequence can only be [1,2].
Example 3:

Input: org = [1,2,3], seqs = [[1,2],[1,3],[2,3]]
Output: true
Explanation:
The sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence [1,2,3].
Example 4:

Input:org = [4,1,5,2,6,3], seqs = [[5,2,6,3],[4,1,5,2]]
Output:true
     * @param org a permutation of the integers from 1 to n
     * @param seqs a list of sequences
     * @return true if it can be reconstructed only one or false
 */
const sequencePeconstruction = (org, seqs) => {
  const inDegree = new Map();
  const neighbors = new Map();
  for(let point of org){
    inDegree.set(point, 0);
    neighbors.set(point, new Set());
  }
  let count = 0;
  for(let i = 0; i < seqs.length; i++){
    count += seqs[i].length;
    if(seqs[i][0] <= 0 || seqs[i][0] > org.length){
      return false;
    }
    for(let j = 1; j < seqs[i].length; j++){
      if(seqs[i][j] <= 0 || seqs[i][j] > org.length){
        return false;
      }
      if(!neighbors.get(seqs[i][j-1]).has(seqs[i][j])){
        neighbors.get(seqs[i][j-1]).add(seqs[i][j]);
        inDegree.set(seqs[i][j], inDegree.get(seqs[i][j]) + 1);
      }
    }
  }
  if(count < org.length){
    return false;
  }
  console.log(inDegree);
  console.log(neighbors);
  const queue = [];
  for(let point of inDegree.keys()){
    if(!inDegree.get(point)){
      queue.push(point);
      console.log(queue);
    }
  }
  let counter = 0;
  while(queue.length == 1){
    let current = queue.shift();
    if(current != org[counter]){
      console.log(current +" "+ org[counter]);
      return false;
    }
    counter++;
    let neighborsSet = neighbors.get(current);
    for(let point of neighborsSet){
      inDegree.set(point, inDegree.get(point)-1);
      if(!inDegree.get(point)){
        queue.push(point);
      }
    }
  }
  return counter == org.length;
}

console.log(sequencePeconstruction([1,2,3], [[1,2]]));