// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

// Example 1:
Input: s1 = "anagram", t1 = "nagaram"
Output: true

// Example 2:
Input: s = "rat", t = "car"
Output: false


var isAnagram = function(s, t){
  return (sorter(s) == sorter(t))  /* now we need to return the output(last thing)so here we are passing the function twice and 
  comparing the s function to t function. seeing if they are the same or not  */
}
function sorter(str){  /* i am gonna start making helper function and call it sorter 
and we are gonna input str for this helper function , return after u write the function
return it both lines as last thing*/
  return str.split('').sort().join('')
  // console.log(str.split(''))  /* now we are changing string to an array.*/
  // console.log(str.split('').sort())  /* now we are gonna call .sort which it will sort this array */
  // console.log(str.split('').sort().join(''))  /* now with .join which will change it back from array to a string again */
}

// sorter('anagram')

console.log(isAnagram(s1, t1));
console.log(isAnagram(s, t));



// var isAnagram = (s, t) => {
// // our first check here. For checking the length of s and t. if it's not equal length return false
//   if(s.length !=t.length){
//     return false;
//   }
//   // i am instantiatin sLetters object.This is my map between letter and number of occurrances
//   const sLetters = {};

//   // we are gonna iterate through s to built that map
//   for(let char of s){  /* every char in string of s  */
//     if(!sLetters[char]){  /* if it doesnt exist */
//       sLetters[char] = 1   /* we're gonna map as it occurring once */
//     }else{      /* if i encounter that letter again */
//       sLetters[char] ++ /* we are gonna increase that count */
//     } 
//   }    /* 25 to 31 these lines built the map */

//   // now we are gonna compare t to the map
//   for( let char of t){  /* every char in t  */
//     if(!sLetters[char]){   /* if that char doesnt exist in my map*/
//       return false    /* we can also return early and it will be false */
//     }
//     if(sLetters[char]){   /* but if it is in this map we can subtract it */
//       sLetters[char]--  /* we can subtract it */
//     }
//     if(sLetters[char] === 0){  /* and if it becomes zero */
//       delete sLetters[char] /* we are going to delete that key */
//     }
//     /* and after all the iteration of the characters if at the end everything is deleted
//     we will get an array from object.keys with a length of zero*/
//   }
//   return Object.keys(sLetters).length === 0 /* in js we can do object.keys and that will return an empyt 
//   array a length of zero,and if its zero we'll return true.  otherwise we return false*/
// }

// console.log(isAnagram(s1, t1));
// console.log(isAnagram(s, t));
