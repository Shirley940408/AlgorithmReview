const fastPower = function (a, b, n) {
  let Ans = 1, temp = a;
  while(n){
      if(n % 2 == 1){
          Ans = (Ans * temp) % b;
      } 
      n = Math.floor(n/2);
      temp = (temp * temp) % b;
  }
  return Ans % b;
}

console.log(fastPower(2147483647,1000000007,2));

