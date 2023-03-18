// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
Input: s1 = "()";
Output: true;

// Example 2:
Input: s2 = "()[]{}";
Output: true;

// Example 3:
Input: s3 = "(]";
Output: false;
// for the parentheses we use the stack method **********

var isValid = function (s) {
  const stack = [];  /*create the stack*/
  const parens = "() {} []"; /* i need this element here to compare our element in the stack too*/
  let i = 0;  /*i am using a variable to store the index
  this way i am not creating a lot of extra space*/

  while (i < s.length) { /*iterate over the input string*/
    stack.push(s[i]); /*we wanna push in the i element of the string*/
    i++;

    let open = stack[stack.length - 2]; /*we wanna pull out the last 2 elements in our stack*/
    let closed = stack[stack.length - 1];

    let potParens = open + closed; /*we are gonna check is these 2 elements we pull out of a stack is it a valid parentheses*/

    if (parens.includes(potParens)) { /*open and closed are included in here but is it a valid parens in that stack if it is we wanna pop of those 2 things off of the stack */
      stack.pop(); 
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
