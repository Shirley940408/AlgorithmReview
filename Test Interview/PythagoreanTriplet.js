/*
triplet([3,1,4,6,5]);
output: true

triplet([10,4,6,12,5]);
output: false
*/

// const triplet = (arr) => {
//   arr.sort();
//   let set = new Set();
//   for(let i = 0; i < arr.length; i++){
//     set.add(Math.pow(arr[i],2));
//   }
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       let sum = Math.pow(arr[i],2) + Math.pow(arr[j],2);
//       if(set.has(sum)){
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(triplet([10,4,6,12,5]));

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let mapA = new Map();
  let mapB = new Map();
  for(let i = 0; i < A.length; i++){
      if(!mapA.has(A[i])){
          mapA.set(A[i],1);
      }else{
          mapA.set(A[i], mapA.get(A[i]) + 1);
      }
      if(!mapB.has(B[i])){
          mapB.set(B[i],1);
      }else{
          mapB.set(B[i], mapB.get(B[i]) + 1);
      }
  }
  let sortedA = new Map([...mapA.entries()].sort((a, b) => b[1] - a[1]));
  let sortedB = new Map([...mapB.entries()].sort((a, b) => b[1] - a[1]));
  return sortedA;
}

console.log(solution([1, 2, 1, 2], [2, 6, 1, 2]));