// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
Input: strs1 = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
Input: strs2 = [""]
Output: [[""]]

// Example 3:
Input: strs3 = ["a"]
Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs){
  // first step is to create the sorted array. so in js we do it like this so we can 
  // map over the string , then we split the str to turn into an array then
  //  we sort the str then we join the str so we turn it back to a string
  // so this is gonna give us the string sorted in alfabeticaly
  let sorted = strs.map((str) => str.split('').sort().join(''))

  // now we need to create the map data structure
  let map = {};  /*we can define this as plain object */

  // now we need to loop through sorted array that we just created and check if the map
  // contains that value if it doesntt then we can add it to map and map it to string values.
  for ( let i = 0; i < sorted.length; i++){
    if(!map[sorted[i]]){   /*so if map doesnt have the sorted value*/
      map[sorted[i]] = [strs[i]] /* we can create it. dont forget to put in an [] after the = part*/
    }else{ /* if sorted is already in map then we can just push the value in to it */
      map[sorted[i]].push(strs[i]);

    }
  }
  /*and lastly in order to get the values out of this object what we can do is we can 
  return object.values and pass inthe map*/
  return Object.values(map);

}

console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));