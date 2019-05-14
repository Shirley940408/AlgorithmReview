// Given an array of integers, remove the duplicate numbers in it.

// You should:

// Do it in place in the given array.
// Move the unique numbers to the front of the array.
// Return the total number of the unique numbers.
const deduplicated = arr => {
  arr.sort()
  let n = 0
  for(let i = 0; i < arr.length-1; i++){    
    if(arr[i+1] != arr[i]){
      arr[++n]=arr[i+1]
    }
  }
  console.log(arr)
  return n+1
}

deduplicated([1,3,2,1,1,0,2])