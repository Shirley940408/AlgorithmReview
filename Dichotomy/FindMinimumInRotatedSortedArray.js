/** 
 * 159. Find Minimum in Rotated Sorted Array
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

Example
Example 1:

Input：[4, 5, 6, 7, 0, 1, 2]
Output：0
Explanation：
The minimum value in an array is 0.
Example 2:

Input：[2,1]
Output：1
Explanation：
The minimum value in an array is 1.
Notice
You can assume no duplicate exists in the array.
 * @param nums: a rotated sorted array
 * @return: the minimum number in the array
*/
const findMin = function (nums) {
  if(nums === null || nums.length === 0){
      return null;
  }
  let start = 0; let end = nums.length - 1;
  let target = nums[end];
  while(start + 1 < end){
      let mid = Math.floor((start + end) / 2);
      if(nums[mid] <= target){
          end = mid;
      }
      else{
          start = mid;
      }
  }
  return Math.min(nums[start], nums[end]);
}
console.log(findMin([6,1,2,3,4,5]));

