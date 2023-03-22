// A phrase is a palindrome if, after converting all uppercase letters into 
// lowercase letters and removing all non-alphanumeric characters, it reads 
// the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
Input: ss = "race a car"
Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
Input: s = " "
Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

Input: sm = "beb"
Output: true

// 1- create regex to replace special charecters with ""
// 2-create leftIndex variable to kepp track of the left pointer
// 3-create rigthIndex variable to keep track of the rigth pointer.
// 4-create while loop until the pointers equal to each other.
//   a-create condition to see if values of pointers dont equal to each other. Return false
//   b-increment leftIndex
//   c-decrement rigthIndex
// 5-Return true because all the values in the string are equal to each other.

var isPalindrome = function(s){

  /* 
  we are gonna use regular expression that removes all occurrences of the (non alpha numeric numbers)
  characters 'W', 'I', and '_' from the input string s, and then converts the resulting 
  string to lowercase. This code can be useful in preparing a string for checking whether 
  it is a palindrome.
  */
  // const str=s.replace(/[WI_]/g,'').toLowerCase();  /*this works too */
  // const str = s.split(/[WI_]/).join('').toLowerCase(); 
  str = s.replace(/[^a-z0-9]/gi,"").toLowerCase(); /*this works too, 
  gi globally i including lower and upper cases, .toLowerCase() de ekleyebilirsin sona */

  let left=0, right=str.length-1;
  while(left<right){
    if(str[left]!==str[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome(s))
console.log(isPalindrome(ss))
console.log(isPalindrome(s))
console.log(isPalindrome(sm))


// When you want to find or replace a pattern of characters in a string, you can use something called a regular expression.
// In JavaScript, you can create a regular expression using a special syntax that looks like this: /pattern/.
// For example, to match all occurrences of the letters "a" or "b" in a string, you could use the regular expression /[ab]/.
// The code you provided uses a regular expression to remove all occurrences of the letters "W" and "I", as well as the underscore character, from a string.
// There are two ways to create a regular expression in JavaScript: using the /pattern/ syntax (called a "regular expression literal"), or using the RegExp constructor.
// The code you provided uses the RegExp constructor to create the regular expression. However, you could also use the regular expression literal syntax, like this: /[WI_]/g.
// Both ways of creating the regular expression will work the same way, but using the literal syntax can make the code a bit simpler and easier to read.
