const reverter = (num) => {
  let new_num = 0;
  let unit ;
  let len = num.toString().length;
  // do not use len = num.toString().length directally in the for-loop, 
  // for the length is changed base on the num change.
  for (let i = 0; i < len; i++){
    unit = num % 10;  
    num = Math.floor(num/10)
    new_num = new_num * 10 + unit
  }
  // while(num != 0){
  //   unit = num % 10;  
  //   num = Math.floor(num/10)
  //   new_num = new_num * 10 + unit
  // }
  return new_num
}
n=1234567
console.log(reverter(n));
console.log(n.toString().length)