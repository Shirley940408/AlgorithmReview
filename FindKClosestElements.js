/**
 * @param A: an integer array
 * @param target: An integer
 * @param k: An integer
 * @return: an integer array
 */
const kClosestNumbers = function (A, target, k) {
  if(A == null || A.length == 0){
      return A;
  }
  if(A.length < k){
      return A;
  }
  let end = firstIndex(A, target);
  let start = end - 1;
  const result = [];
  for(let i = 0; i < k; i++){
      if(start < 0){
          result[i] = A[end++];
      }else if(end == A.length){
          result[i] = A[start--];
      }else{
          if(target - A[start] <= A[end] - target){
              result[i] = A[start--];
          }else{
              result[i] = A[end++];
          }
      }
  }
  return result;
}

const firstIndex = (A, target) => {
  let start = 0; let end = A.length - 1;
  while(start + 1 < end){
      let mid = Math.floor((end + start)/2);
      if(A[mid] == target){
          end = mid;
      }
      else if(A[mid] < target){
          start = mid;
      }
      else{
          end = mid;
      }
  }
  if(A[start] >= target){
      return start;
  }
  if(A[end] >= target){
      return end;
  }
  return A.length;
}
console.log(kClosestNumbers([1,4,6,8], 3, 3));