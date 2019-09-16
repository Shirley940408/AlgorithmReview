const myPow = function (x, n) {
    // write your code here
    if(n < 0){
        x = 1 / x;
        n = - n;
    }
    let powerAns = 1; 
    while(n){
        if(n % 2 == 1){
            powerAns *= x;
        }
        x *= x;
        n = Math.floor(n/2);
    }
    return powerAns.toFixed(3);
}
console.log(myPow(9.88023,3))