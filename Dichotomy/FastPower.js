// const fastPower = function (a, b, n) {
//   let Ans = 1, temp = a;
//   while(n){
//       if(n % 2 == 1){
//           Ans = (Ans * temp) % b;
//       } 
//       n = Math.floor(n/2);
//       temp = (temp * temp) % b;
//   }
//   return Ans % b;
// }

// console.log(fastPower(2147483647,1000000007,2));

var superPow = function(a, b) {
  let n = powerNumber(b);
  let ans = 1;
  while(n){
      if(n % 2 == 1){
          ans = (ans * a) % 1337;
      }
      a = (a * a) % 1337;
      n = Math.floor(n / 2);
  }
  return ans % 1337;
};

const powerNumber = b => {
  if(b === null || b.length === 0){
      return 0;
  }
  let sum = 0;
  for(let i = 0; i < b.length; i++){
      sum *= 10;
      sum += b[i];
  }
  return sum;
}