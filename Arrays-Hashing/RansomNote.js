// Given two strings ransomNote and magazine, return true if ransomNote 
// can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

// Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

// Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

var canConstruct = function(ransomNote, magazine) {
  let ransomNote = true;
  let map = {};
  for (let word of magazine){
    map[word] = (map[word] || 0) + 1;
  }
  for (let word of ransomNote){
    map[word] = (map[word] || 0) - 1;
  }
  for (let key in map){
    if(map[key] < 0){
      ransomNote = false;
      break
    }
  }
  if (ransomNote){
    console.log("Yes")
  }else{
    console.log("No")
  }
}
console.log(checkMagazine(ransomNote))