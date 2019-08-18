const removeDuplicates = function(nums) {
  // nums.sort();
  let slowPointer = 0;
  for(i = 0; i < nums.length; i++){
      if(nums[i] != nums[slowPointer]){
          nums[++slowPointer] = nums[i];
      }
  }
  while(nums.length > slowPointer + 1){
      nums.pop();
  }
  // console.log(nums);
  return nums;
};

console.log(removeDuplicates([1,1,2]))