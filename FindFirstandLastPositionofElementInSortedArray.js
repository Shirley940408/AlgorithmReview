/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if(nums == null || nums.length == 0) {
      return [-1, -1];
  }
  let start = 0; 
  let end = nums.length - 1;
  if(nums.length == 1 && nums[0] == target){
      return [0, 0];
  }
  const result = [];
  while(start + 1 < end){
      let mid = Math.floor((start + end)/2);
      if(nums[mid] == target){
          end = mid;
      }
      else if(nums[mid] < target){
          start = mid;
      }
      else{
          end = mid;
      }
  }
  if(nums[start] == target){
      result.push(start);
      console.log("start = " + start);
      console.log(result);
  }
  if(nums[end] == target){
      result.push(end);
      console.log("end = " + end);
  }
  if(result.length >= 1){
      let num = result.length - 1;
      while(result[num] + 1 >= 0 && nums[result[num] + 1] == target){
          result.push(result[num] + 1);
          num = result.length - 1;
          console.log(result);
      }
      // result.sort((a, b) => a - b);
  }
  if(result.length == 1){
    return [result[0], result[0]]; 
  }
  if(result.length == 0){
      return [-1, -1];
  }
  return [result[0], result[result.length - 1]];
};
const nums = [0,0,1,1,1,1,2,2,2,3,3,4,5,6,6,6,6,7,8]
const target = 3;
console.log(searchRange(nums, target));