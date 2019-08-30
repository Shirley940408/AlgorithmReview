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
    /* _b is using for recquording which unit is
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
#### Review Point
##### Always remember the "null" situation that needs to be considered.

## What is Object - Oriented ?
- Object-Oriented is a kind of world view
- Object-Oriented is a way to design program
### as an Object, it always has two things:
- attritube--member parameter
- behavior -- member function
## what is class
- Class is the abstract of Object. Object is an instance of the class.
- type of class name -- upper camel case
### constructor function
- has the same name of class
- does not have the return type, for it does not have return value
- cannot be visited from outside
- constructor function is called automatically when the object being initialized.
- constructor function has the overload（重载）
### this
- to avoid the misleading of parameter brought from outside and the class attributes.
- let the attributes always point to this object 
```Java
public class Example {
    public static void main(String[] args){
        Student stu = new Student("Jack", 89);
        stu.speak();

    }
}

class Student{
    public String name;
    public int score;
    public Student(String name, int score){
        this.name = name;
        score = score;// it would not get the 89 from outside, cause this is missing.
    }
     public void speak(){
        System.out.println(name +" "+ score);
     }
}
```
## Reference, List
### Algorithm
#### 1. Reverse Linked List
```Java
/**
 * Definition for ListNode
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

public class Solution {
    /**
     * @param head: n
     * @return: The new head of reversed linked list.
     */
    public ListNode reverse(ListNode head) {
        // write your code here
        ListNode pre = null;
        ListNode temp;
        while(head != null){
            temp = head.next;
            head.next = pre;
            pre = head;
            head = temp;
        }
        return pre;
    }
}
```
##### Remember to traverse all the LinkedList from head, if your are using a dummy point, then from dummy.next.
#### 2.Merge Two Sorted Lists
##### Merge two sorted (ascending) linked lists and return it as a new sorted list. The new sorted list should be made by splicing together the nodes of the two lists and sorted in ascending order.
```Java
/*
Example 1:
	Input: list1 = null, list2 = 0->3->3->null
	Output: 0->3->3->null


Example 2:
	Input:  list1 =  1->3->8->11->15->null, list2 = 2->null
	Output: 1->2->3->8->11->15->null
*/

/**
 * Definition for ListNode
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

public class Solution {
    /**
     * @param l1: ListNode l1 is the head of the linked list
     * @param l2: ListNode l2 is the head of the linked list
     * @return: ListNode head of linked list
     */
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // write your code here
        ListNode dummy = new ListNode(-1);
        ListNode lastNode = dummy;
        
        while (l1 != null && l2 != null){
            if(l1.val < l2.val){
                lastNode.next = l1;
                l1 = l1.next;
            }else{
                lastNode.next = l2;
                l2 = l2.next; 
            }
            lastNode = lastNode.next;
        }
        if(l1 != null){
            lastNode.next = l1;
        }else{
            lastNode.next = l2;
        }
        
    return dummy.next;    
    }
}
```
#### 3.Remove Linked List Elements
##### Remove all elements from a linked list of integers that have value val.
```Java
/*
Example 1:

Input: head = 1->2->3->3->4->5->3->null, val = 3
Output: 1->2->4->5->null
Example 2:

Input: head = 1->1->null, val = 1
Output: null
*/

/**
 * Definition for ListNode
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

public class Solution {
    /**
     * @param head: a ListNode
     * @param val: An integer
     * @return: a ListNode
     */
    public ListNode removeElements(ListNode head, int val) {
        // write your code here
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode lastNode = dummy;
        while(lastNode.next != null){
            if(lastNode.next.val == val){
                lastNode.next = lastNode.next.next;
            }else{
                lastNode = lastNode.next; 
            }
        }
        return dummy.next;
    }
}
```
#### 4. Insert Node in Sorted Linked List
```Java
/**
 * Definition for ListNode
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

public class Solution {
    /**
     * @param head: The head of linked list.
     * @param val: An integer.
     * @return: The head of new linked list.
     */
    public ListNode insertNode(ListNode head, int val) {
        // write your code here
        ListNode dummy = new ListNode(-1);
        ListNode newNode = new ListNode(val);
        dummy.next = head;
        ListNode lastNode = dummy;
        while(lastNode.next != null && lastNode.next.val <= val){
            lastNode = lastNode.next;
        }
        newNode.next = lastNode.next;
        lastNode.next = newNode;
        return dummy.next;
        
    }
}
```
##### Remember how to insert a node into a linkedList
1. newNode.next = preNode.next.next;
// It is not newNode = preNode.next.next -- **wrong way**
3. preNode.next = newNode;

## 双指针算法 -- 不是算法的算法
### 相向双指针：
1. ##### 一个典型的相向双指针问题 -- 翻转字符串
> #### 要把大象装冰箱总共分几步 -- 三步
- #### `swap(left, right)`
- #### `left++`
- #### `right--`
```js
const ReverseString = str => {
  strArray = str.split("");
  let left = 0 ; let right = strArray.length - 1;
  while(left < right){
    let temp = strArray[left];
    strArray[left] = strArray[right];
    strArray[right] = temp;
    left++;
    right--;
  }
  return strArray.join("");
}
```
2. ##### 给一个整数数组，找到两个数使得他们的和等于一个给定的数 target。返回这两个数。
> #### 使用哈希表来解决 -- JS(ES6) 也有Set和Map, 哈哈哈哈哈
```js
const TwoSum = (numArray, target) => {
  const set = new Set();
  for(i = 0; i < numArray.length; i++){
    if(set.has(numArray[i])){
      return [numArray[i], target - numArray[i]];
    }
    set.add(target - numArray[i]);
  }
  return null;
}

```
> #### 使用双指针算法解决
```js
const twoSum = (numArray, target) => {
  numArray.sort();
  let left = 0; let right = numArray.length - 1;
  while(left < right){
    if(numArray[left] + numArray[right] == target){
      return [numArray[left], numArray[right]];
    }
    else if(numArray[left] + numArray[right] < target){
      left++;
    }
    else{
      right--;
    }
  }
  return null;
}
```
### 同向双指针
#### 1. 数组去重
> #### O(nlogn) time, O(1) extra space 
```jsx
const removeDuplicates = function(nums) {
  // nums.sort();
  let slowPointer = 0;
  for(i = 0; i < nums.length; i++){
      if(nums[i] != nums[slowPointer]){
          nums[++slowPointer] = nums[i];
      }
  }
  while(nums.length > slowPointer + 1){
      nums.pop();
  }
  // console.log(nums);
  return nums;
};
```
## BFS -- 宽度优先搜索

#### Question： 图上的宽度优先搜索与树上的宽度优先搜索的区别？
#### Answer：图上的点会成环, 所以要记录点是否已经查过

```js
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const map = new Map();
  const old = getNode(node);
  //copy nodes
  for(let node of old){
    map.set(node, new Node(node.val, []))
  }
  //copy neighbors(edges)
  for(let node of old){
    let newNode = map.get(node);
    for(let neighbor of node.neighbors){
      newNeighbor = map.get(neighbor)
      newNode.neighbors.push(newNeighbor)
      // Why need to push every newNeighbor into newWode.neighbors.push() -- you need to copy values, not copy reference.
    }
  }
  return map.get(node)    
};

const getNode = node => {
  const queue = []; // remain all the nodes in the graph for level control
  const set = new Set(); // record for every node.
  queue.push(node);
  set.add(node);
  while(queue.length){
    const node = queue.shift();
    for(let neighbor of node.neighbors){
      if(!set.has(neighbor)){
        queue.push(neighbor);
        set.add(neighbor);
      }
    }
  }
  return set;
}
```
#### Attention point: 增强for循环js：
循环key: `for(key in array){...}`
循环value: `for(value of array){...}`

### BST 图的问题的时间复杂度：O(N+M): N 为点数， M为边数

---------
## 你以为很简单的二分法
---------
### 二分法(binary search)是面试中常见的算法。如果你的学校有算法课，那么你可能已经学习过二分这个算法了。

### 但是很多同学在二分法的问题上，依然无法熟练掌握，以下问题经常会不断发生：

1.  #### 写出来的二分法总是死循环
2.  #### start + 1 < end 还是 start <= end 还是 start < end 总是搞不清楚
3.  #### start = mid + 1 还是 start = mid 也总是搞不清楚

### 在这一章的学习中，我们要会学到：

*   #### 一个通用的二分模板
*   #### 为什么会出现死循环
*   #### 哪些题目可以用二分法来做
*   #### 通过时间复杂度倒推算法的技巧
*   #### 其他的 Log N 算法（倍增法，辗转相除法，快速幂算法）

### 先修内容有：

*   #### 基本的二分法该如何写
*   #### 第一个位置，最后一个位置该如何变化
*   #### Big O，时间复杂度，空间复杂度
*   #### 什么是递归，二分法用递归如何实现
*   #### 内存中的栈空间和堆空间有什么区别
*   #### 什么是 Stack Overflow，什么情况下会造成 Stack Overflow

### 补充内容有：

*   #### 三步翻转法
*   #### 递增矩阵找数
*   #### 快速幂算法
*   #### 辗转相除法
------
### 时间复杂度
------
### 时间复杂度是面试中必问的问题。学好时间复杂度，有如下的帮助：

1.  #### 面试官会问你的算法时间复杂度是什么
2.  #### 当面试官说，有没有更好的方法时，你知道朝什么样的复杂度优化
3.  #### 利用时间复杂度倒推算法是面试常用技巧。如O(logN)O(logN)的算法几乎可以确定是二分法。

### 时间复杂度计算的要点：

*   #### **只包含多项式的最高次项**。这是因为在复杂度计算中，最高次项对运行时间有决定性的作用，次高次项可以忽略不计。例如f(n) = n^2 + nf(n)=n2+n， 此时n这一项对于多项式的值的影响想对于n^2可以忽略不计。在定性的描述中，我们只取最高次项。
*   #### **不包含多项式最高次项的系数**。对于最高次项，我们忽略它的系数，在算法中，我们称之为常数。上面代码中，常数是2,但是时间复杂度的计算，我们只取O(n)。

--------
### 面试中常见算法的时间复杂度
--------
算法中，常见的时间复杂度有：

|复杂度|可能对应的算法|备注
---|:--:|---
O(1)|位运算|常数级复杂度，一般面试中不会有

O(logn)|二分法，倍增法，快速幂算法，辗转相除法| |

O(n)|枚举法，双指针算法，单调栈算法，KMP算法，Rabin Karp，Manacher's Algorithm|又称作线性时间复杂度

O(nlogn)|快速排序，归并排序，堆排序| |

O(n^2)|枚举法，动态规划，Dijkstra| |

O(n^3)|枚举法，动态规划，Floyd| |

O(2^n)|与组合有关的搜索问题| |

O(n!)|与排列有关的搜索问题| |

#### 在面试中，经常会涉及到时间复杂度的计算。当你在对于一个问题给出一种解法之后，面试官常会进一步询问，是否有更优的方法。此时就是在问你是否有时间复杂度更小的方法（有的时候也要考虑空间复杂度更小的方法），这个时候需要你对常用的数据结构操作和算法的时间复杂度有清晰的认识，从而分析出可优化的部分，给出更优的算法。

#### 例如，给定一个已经排序的数组，现在有多次询问，每次询问一个数字是否在这个数组中，返回True or False.

*   #### 方法1： 每次扫描一遍数组，查看是否存在。  
    #### 这个方法，每次查询的时间复杂度是:O(n)。
    
*   #### 方法2：由于已经有序，可以使用二分查找的方法。  
    #### 这个方法，每次查询的时间复杂度是:O(logn)。
    
*   #### 方法3：将数组中的数存入Hashset。  
    #### 这个方法，每次查询的时间复杂度是:O(1)。
    

#### 可以看到，上述的三种方法是递进的，时间复杂度越来越小。

#### 在面试中还有很多常见常用的方法，他们的时间复杂度并不是固定的，都需要掌握其时间复杂度的分析，要能够根据算法过程自己推算出时间复杂度。
---------
## 你以为很简单的二分法
---------
### 二分法(binary search)是面试中常见的算法。如果你的学校有算法课，那么你可能已经学习过二分这个算法了。

### 但是很多同学在二分法的问题上，依然无法熟练掌握，以下问题经常会不断发生：

1.  #### 写出来的二分法总是死循环
2.  #### start + 1 < end 还是 start <= end 还是 start < end 总是搞不清楚
3.  #### start = mid + 1 还是 start = mid 也总是搞不清楚

### 在这一章的学习中，我们要会学到：

*   #### 一个通用的二分模板
*   #### 为什么会出现死循环
*   #### 哪些题目可以用二分法来做
*   #### 通过时间复杂度倒推算法的技巧
*   #### 其他的 Log N 算法（倍增法，辗转相除法，快速幂算法）

### 先修内容有：

*   #### 基本的二分法该如何写
*   #### 第一个位置，最后一个位置该如何变化
*   #### Big O，时间复杂度，空间复杂度
*   #### 什么是递归，二分法用递归如何实现
*   #### 内存中的栈空间和堆空间有什么区别
*   #### 什么是 Stack Overflow，什么情况下会造成 Stack Overflow

### 补充内容有：

*   #### 三步翻转法
*   #### 递增矩阵找数
*   #### 快速幂算法
*   #### 辗转相除法
------
### 时间复杂度
------
### 时间复杂度是面试中必问的问题。学好时间复杂度，有如下的帮助：

1.  #### 面试官会问你的算法时间复杂度是什么
2.  #### 当面试官说，有没有更好的方法时，你知道朝什么样的复杂度优化
3.  #### 利用时间复杂度倒推算法是面试常用技巧。如O(logN)O(logN)的算法几乎可以确定是二分法。

### 时间复杂度计算的要点：

*   #### **只包含多项式的最高次项**。这是因为在复杂度计算中，最高次项对运行时间有决定性的作用，次高次项可以忽略不计。例如f(n) = n^2 + nf(n)=n2+n， 此时n这一项对于多项式的值的影响想对于n^2可以忽略不计。在定性的描述中，我们只取最高次项。
*   #### **不包含多项式最高次项的系数**。对于最高次项，我们忽略它的系数，在算法中，我们称之为常数。上面代码中，常数是2,但是时间复杂度的计算，我们只取O(n)。

--------
### 面试中常见算法的时间复杂度
--------
算法中，常见的时间复杂度有：

|复杂度|可能对应的算法|备注
---|:--:|---
O(1)|位运算|常数级复杂度，一般面试中不会有

O(logn)|二分法，倍增法，快速幂算法，辗转相除法| |

O(n)|枚举法，双指针算法，单调栈算法，KMP算法，Rabin Karp，Manacher's Algorithm|又称作线性时间复杂度

O(nlogn)|快速排序，归并排序，堆排序| |

O(n^2)|枚举法，动态规划，Dijkstra| |

O(n^3)|枚举法，动态规划，Floyd| |

O(2^n)|与组合有关的搜索问题| |

O(n!)|与排列有关的搜索问题| |

#### 在面试中，经常会涉及到时间复杂度的计算。当你在对于一个问题给出一种解法之后，面试官常会进一步询问，是否有更优的方法。此时就是在问你是否有时间复杂度更小的方法（有的时候也要考虑空间复杂度更小的方法），这个时候需要你对常用的数据结构操作和算法的时间复杂度有清晰的认识，从而分析出可优化的部分，给出更优的算法。

#### 例如，给定一个已经排序的数组，现在有多次询问，每次询问一个数字是否在这个数组中，返回True or False.

*   #### 方法1： 每次扫描一遍数组，查看是否存在。  
    #### 这个方法，每次查询的时间复杂度是:O(n)。
    
*   #### 方法2：由于已经有序，可以使用二分查找的方法。  
    #### 这个方法，每次查询的时间复杂度是:O(logn)。
    
*   #### 方法3：将数组中的数存入Hashset。  
    #### 这个方法，每次查询的时间复杂度是:O(1)。
    

#### 可以看到，上述的三种方法是递进的，时间复杂度越来越小。

#### 在面试中还有很多常见常用的方法，他们的时间复杂度并不是固定的，都需要掌握其时间复杂度的分析，要能够根据算法过程自己推算出时间复杂度。

-------
### 什么是空间复杂度
-------
#### 类似于时间复杂度，空间复杂度就是衡量算法运行时所占用的临时存储空间的度量。也是一个与问题规模nn有关的函数。  
#### 我们同样使用O(大写字母o)O(大写字母o)来标记。

#### 算法所占用的空间主要有三个方面：算法代码本身占用的空间、输入输出数据占用的空间、算法运行时临时占用的空间。  
#### 其中，代码本身和输入输出数据占用的空间不是算法空间复杂度考虑的范围内，空间复杂度只考虑运行时临时占用的空间，又称为算法的额外空间（Extra space）。

#### 临时占用的空间包括：

*   #### 为参数列表中形参变量分配的空间
*   #### 为函数体中局部变量分配的空间  
（如果是递归函数，需要将上述两部分占用空间的和乘以递归的深度，这是堆栈空间，在下面小节中详细讲解这部分）
#### 在面试中，很多时候面试官给出的问题会附带一个“不能使用多余的空间”这样的要求。很多时候这是在要求你的空间复杂度只能是O(1)的，也就是你只能开几个辅助变量，而不能开大数组。

#### 其他常见的还有，分析一下你的算法空间复杂度，寻找空间复杂度更优的解法等。  
#### 一般来说，算法占用的时间和空间会是两个互相平衡的元素，有的时候我们牺牲空间来换取时间，有的时候我们牺牲时间来换取空间。

#### 在面试中常见算法的空间复杂度：

*   快速排序： 最优：O(logn)O(logn)，最差:O(n)
*   二分查找：O(1)
*   最短路(Dijkstra)算法：O(V)(V表示点集大小)

#### 在递归函数中，除了变量和数组所开辟的临时空间以外，还有一个空间我们需要纳入考虑，就是递归时占用的栈空间（Stack）。

#### 递归函数需要保存当前的环境，以便在递归返回的时候能够还原之前的现场。因此递归的深度越深，所要占用的栈空间越大。当空间超出一定范围的时候就会出现程序**爆栈**（Stack Overflow）的情况。

#### 很多博客文章中会写堆栈空间与递归调用的次数成正比，这个是不完全正确的，应该是与递归的深度成正比（此处只讨论单线程）。  
#### 因为递归在返回到上一层的时侯，就会将本层的空间释放，因此占用的栈空间不会比最深的一次调用所占用的空间更多。

### 大部分的空间复杂度计算方法

累加下面两个部分的内容即是你代码的空间复杂度：

#### 1.你的代码里开辟了多少新的空间（new 了多少新的内容出来）
#### 2. 你的递归深度 * 递归函数内部的参数和局部变量所占用的空间

### 以快速排序为例子

### 快速排序的思路如下：  
#### 1.选择一个基准元素，将原数组分为两部分，左边部分小于该元素，右边部分大于该元素。  
#### 2.分别递归处理左边和右边。

*   #### 最好情况：  
    #### 每次都能恰好将数组分成左右相同长度的两部分，需要的递归深度是:lgn，每次将数组分成两部分时，我们选择不使用辅助数组，在原数组上“就地”处理，所以每层的空间是O(1)。  
    #### 因此总的复杂度是:O(logn)
    
*   #### 最差情况：  
    #### 每次都将数组分成长度差最大的两部分，即一边只有一个元素，其余的在另外一边，最大深度为：n， 因此空间复杂度为:O(n)。
    

#### 有些递归算法的空间复杂度是稳定的，不会退化，快排的递归深度与其每次选择的“基准值”有很大关系，因此存在退化的情况。