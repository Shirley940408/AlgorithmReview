/**
 * 372. Super Pow
Medium
Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

Example 1:

Input: a = 2, b = [3]
Output: 8
Example 2:

Input: a = 2, b = [1,0]
Output: 1024
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 * 
 */
var superPow = function(a, b) {
  if(b === null || b.length === 0){
       return 1;
   }
   let result = powerNumber(a, b[0]);
   for(let i = 1; i < b.length; i++){
       result = ((powerNumber(result, 10)) % 1337 * (powerNumber(a, b[i]) % 1337)) % 1337;
   }
   return result % 1337;
};

// const powerNumber = (a, n) => {
//     let ans = 1, temp = a;
//     while(n){
//         if(n % 2 == 1){
//             ans = (ans  % 1337 * temp % 1337) % 1337;
//         }
//         temp = (temp % 1337 * temp % 1337) % 1337;
//         n = Math.floor(n / 2);
//     }
//     return ans % 1337;
// }
const powerNumber = (a, n) => {
   if(n == 0){
       return 1 % 1337;
   }
   if(n == 1){
       return a % 1337;
   }
   ans = powerNumber(a, Math.floor(n / 2));
   ans = (ans % 1337) * (ans % 1337) % 1337;
   if(n % 2 == 1){
       ans = (ans % 1337) * (a % 1337) % 1337;
   }
   return ans % 1337;
}