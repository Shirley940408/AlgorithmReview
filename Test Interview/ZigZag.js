/*
zigzag [4,3,7,8,6,2,1]
------>[3,7,4,8,2,6,1]
        a<b>c<d>e<f>g
*/

const ZigZag = (arr) => {
  arr.sort();
  for(let i = 0; i < arr.length; i++){
    if(i % 3 == 2){
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(ZigZag([4,3,7,8,6,2,1]));