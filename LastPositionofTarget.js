/**
 * 458. Last Position of Target
Find the last position of a target number in a sorted array. Return -1 if target does not exist.

Example
Example 1:

Input: nums = [1,2,2,4,5,5], target = 2
Output: 2
Example 2:

Input: nums = [1,2,2,4,5,5], target = 6
Output: -1
     * @param A an integer array sorted in ascending order
     * @param target an integer
     * @return an integer
*/

const lastPosition = (nums, target) => {
  if(nums == null || nums.length == 0){
    return -1;
  }
  let start = 0; let end = nums.length - 1;
  while(start + 1 < end){
    let mid = Math.floor((start + end)/2);
    if(nums[mid] == target){
      start = mid;
    }else if(nums[mid] < target){
      start = mid;
    }else{
      end = mid;
    }
  }

  if(nums[end] == target){
    return end;
  }
  if(nums[start] == target){
    return start;
  }
  return -1;
}

console.log(lastPosition([1,2,2,4,5,5], 6));