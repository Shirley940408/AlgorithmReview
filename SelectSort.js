const SelectSort = (arr) =>{
  for(i = 0; i < arr.length; i++){
    let min = arr[i];
    for (j = i + 1; j < arr.length; j++){
      let temp;
      if(arr[j] < min){
        temp = arr[i];
        arr[i] = arr[j];
        min = arr[i];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(SelectSort([4,3,1,2,7,6,5,0,9,8]));