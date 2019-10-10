/*
ABCD -> BCDA: true
ABCD -> ACBD: false

*/

const RotationString = (str1, str2) => {
  if(str1.length != str2.length){
    return false;
  }
  return checkQueue(str1, str2);
}
//Method 1. Duplicate the orginal string, and check whether it is a substring. O(1)
const findTheSub = (str1, str2) => {
  str1 += str1;
  if(str1.includes(str2)){
    return true;
  }
  return false;
}
//Method 2. use a queue to check each time. O(N)
const checkQueue = (str1, str2) => {
  const arr2 = str2.split('');
  for(i = 0; i < arr2.length; i++){
    let char = arr2.shift();
    arr2.push(char);
    let temp = arr2.join('');
    if(temp === str1){
      return true;
    }
  }
  return false;
}
console.log(RotationString("ABCD", "BCDA")) 