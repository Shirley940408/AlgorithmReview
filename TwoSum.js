/**
 * 给一个整数数组，找到两个数使得他们的和等于一个给定的数 target。返回这两个数。
 */
const TwoSum = (numArray, target) => {
  const set = new Set();
  for(i = 0; i < numArray.length; i++){
    if(set.has(numArray[i])){
      return [numArray[i], target - numArray[i]];
    }
    set.add(target - numArray[i]);
  }
  return null;
}

// console.log(TwoSum([1,2,3,4,5], 7));

const twoSum = (numArray, target) => {
  numArray.sort();
  let left = 0; let right = numArray.length - 1;
  while(left < right){
    if(numArray[left] + numArray[right] == target){
      return [numArray[left], numArray[right]];
    }
    else if(numArray[left] + numArray[right] < target){
      left++;
    }
    else{
      right--;
    }
  }
  return null;
}
console.log(twoSum([1,2,3,4,5], 7));