/*
triplet([3,1,4,6,5]);
output: true

triplet([10,4,6,12,5]);
output: false
*/

const triplet = (arr) => {
  arr.sort();
  let set = new Set();
  for(let i = 0; i < arr.length; i++){
    set.add(Math.pow(arr[i],2));
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      let sum = Math.pow(arr[i],2) + Math.pow(arr[j],2);
      if(set.has(sum)){
        return true;
      }
    }
  }
  return false;
}

console.log(triplet([10,4,6,12,5]));