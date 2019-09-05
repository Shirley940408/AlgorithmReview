const ReverseString = str => {
  strArray = str.split("");
  let left = 0 ; let right = strArray.length - 1;
  while(left < right){
    let temp = strArray[left];
    strArray[left] = strArray[right];
    strArray[right] = temp;
    left++;
    right--;
  }
  return strArray.join("");
}

console.log(ReverseString("abcde"));