// (function(){
//   var a = b = 3;
// })

// console.log('a defined?' + (typeof a !=='undefined'));
// console.log('b defined?' + (typeof b !=='undefined'));

// SetTimeout && SetInterval

// for(let i = 0; i < 5; i++){
//   setTimeout(function(){
//     console.log(i);
//   }, i*1000);
// }
// https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11


// interviewer: what will the following code output?
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i_block) {
    return function(){
      console.log('Index: ' + i_block + ', element: ' + arr[i_block]);
    };
  }(i), 3000);
}
// Another way is to write let i
// https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703