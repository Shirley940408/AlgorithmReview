# AlgorithmReview
## Variable 
-  Add two number without using "+" method
-  Reverse the 3 digits integer
#### 1. Add two number without using "+" method;
##### method 1 -- while loop
```Java
//Java
public static int AddAToB(int a, int b){
  while (b != 0){
    int _a = a ^ b;
    /* ^ has another name -- Non-carry addition，
for it is an unfinished adding method. Thus, we
need to recalculate the carry unit using variable
_b.*/
    int _b = (a & b) << 1;
    /* _b is using for recording which unit is
needed to be recalculated, for it only appears at
both unit of a and b are '1'. e.g. 00000110 &
00000100 = 00000100, so it is the third one not
carry to the forth unit. Thus we need to add the 1
in the forth unit, which means (a & b) << 1;*/
    a = _a;
    b = _b;
    /*it using b as the whole function controller,
that it safe because it would always be 0 at some
point, e.g. a = 01111111; b = 00000001; b would be
0 after a change to 10000000; */
  }
  return a;
}
/* why use static function: the static is not required,
but it is necessary for testing in main function, for
main function is a static function and it only allows
static function to be operated inside.  */
```
##### method 2 -- Recursive

```JS
//JS
let _a, _b
const addAToB = (a, b) => {
  _a = a ^ b
  _b = a & b
   a = _a
   if(!_b){
   //when _b is equal to zero, it means all carries 
   //are updated.
   return a
   }
   b = _b
   return addAToB(a, b)
   //return is important in every Reversive method,
   //without it, it will not get return value for 
   //the upper layer.
}
```
##### All Recursive methods need to be focused on two point:
- Stop condition. It would become a dead loop without that.
- Accumation between recursive methods, which means return the recursive-formula based function. The upper recursive function would not get its return value if lacking that "return"
#### 2. Reverse the 3 digits integer
```JS
//JS
let unit, new_num = 0
//new_num needed to be initialized 
const Reverser = num => {
const length = num.toString().length
  for(let i = 0; i <= length; i++){
    unit = num % 10
    num = num / 10
    new_num = new_num * 10 + unit
    /*that is the place to show why new_num need its
    initialization*/
  }
  return new_num  
}
/*
The common mistake is that put the num.toString().length directly into the
for(condition), that will cause the range change during this for-cycle; 
What is more, do not forget the initialization of new_num, for it would
return undefined in this case*/
```
### Deduplicated an Array
#### Given an array of integers, remove the duplicate numbers in it.

##### You should:

- Do it in place in the array.
- Move the unique numbers to the front of the array.
- Return the total number of the unique numbers.

```Java
public int deduplication(int[] nums) {
    // write your code here
    if(nums.length == 0){
        return 0;
    }
    Arrays.sort(nums);
    int n = 0;
    for(int i = 0; i < nums.length; i++){
        if(nums[n]!=nums[i]){
            nums[++n]=nums[i];
        }
    }

    // System.out.println(Arrays.toString(nums));
    return n + 1;
}  
```
##### The whole method is doing this thing:
###### - First, sorting the array to make all the members in the ascenting sequence, in that way the same members would be placed adjacent;
###### - Second, change the next different member into the place after the pervious renewed member. The arr[0] place would not be replace if this array is not empty, for is always should be shown in the renewed array.
###### - After all the replacement, the n is the record of how many exchange you have reached. But remember the arr[0] have not been changed, while this member should be calculated.

## String
### get the length of a String

```java
String str = "a string";
System.out.println(str.length());
//length vs. length()
//.length is used in an Array, and length() is used in a String
```
### The traverse of String
```Java
String str ="a string";
for(int i = 0; i < str.length(); i++){
char ch =str.charAt(i);
//...
}

```
## Algorithm
#### 1. Given a string, determine if it is a palindrome
```Java
/*
Description
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama"

Example 2:
Input: "race a car"
Output: false
Explanation: "raceacar"
*/
 
public static boolean isPalindrome(String str){
  str= str.toLowerCase();
  int i = 0;
  int j = str.length()-1;
  while(i < j){
    if(!Character.isLetterOrDigit(str.charAt(i))){
     i++;
     continue;
    }else if(!Character.isLetterOrDigit(str.charAt(j))){
     j--;
     continue;
    }else if(str.charAt(i) != str.charAt(j)){
        return false;
    }else{
        i++;
        j--;
    }   
  }
    return true;
}
```
#### 2. Given a string, convert it to an integer.

```Java
/*
Given a string, convert it to an integer. You may assume the string is a valid integer number that can be presented by a signed 32bit integer (-231 ~ 231-1).
Example 1:
	Input:  "123"
	Output: 123
	
	Explanation: 
	return the Integer.

Example 2:
	Input:  "2"
	Output: 2
	
	Explanation: 
	return the Integer.
*/
public int stringToInteger(String str) {
    // write your code here
    if(str == ""){
        return 0;
    }
    boolean flag = str.charAt(0) == '-';
    int startBit = flag ? 1 : 0;
    int digit, sum = 0;
    for(int i = startBit; i < str.length(); i++){
        digit = str.charAt(i) -'0';
        if(startBit == 1){
        sum = sum * 10 -digit;    
        }else{
           sum = sum * 10 + digit; 
        }
    }
    return sum;
}
```
