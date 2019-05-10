let _a, _b
const AddAToB = (a, b) =>{
    _a = a ^ b
    // console.log(_a)
    _b = (a & b) << 1
    // console.log(_b)
     a = _a
    //  console.log('a = '+a)
     if(!_b){
       console.log('answer = '+a);
      return a
    }
     b = _b 
    return AddAToB(a, b)
}
const answer = AddAToB(10, 7)
console.log(answer);
