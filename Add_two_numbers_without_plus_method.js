let _a, _b, result;
const AddAToB = (a, b) =>{
    _a = a ^ b
    // console.log(_a)
    _b = (a & b) << 1
    // console.log(_b)
     a = _a
    //  console.log('a = '+a)
     if(!_b){
       console.log('answer = '+a);
       result = a;
      return;
    }
     b = _b 
    AddAToB(a, b)
}
const answer = AddAToB(10, 7)
console.log(result);
