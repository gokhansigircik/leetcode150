// Given an integer array nums, return true if any value appears at least twice
//  in the array, and return false if every element is distinct.

// Example 1:
Input: nums = [1,2,3,1]
// Output: true

// Example 2:
Input: nums1 = [1,2,3,4]
// Output: false

// Example 3:
Input: nums2 = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums, numsSet = new Set()) => {
  // going throug every value in the input array nums
  for (const num of nums){  /*Time O(N) */
  // we wanna know is num a duplicate , does this value already exist in our hashset?
  // and if it does we know that our array contains duplicates. 
  // so we dont even have to continue through rest of the array.
  // we can immidiately return true.
    if (numsSet.has(num))     return true;

    // if it doesnt contain duplicate we are gonna add that value and 
    // iterate through the rest of the array of nums and then loop would exit
    numsSet.add(num);       /*Space O(N) */
  }
  // then we can return false to indicate that we didnt find any duplicates in the array
  return false;

};
console.log(containsDuplicate(nums));
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));


// CONTAINS DUPLICATE : 1, 2, 3 , 1
// First thing we look at the first number and how do we know if this is a duplicate or not we have to compare with the other.

// We can also consider sorting and see how the sorting would help us.
// 1, 1, 2, 3  

// MOST EFFICINET WAY OF SOLVING IS A HASHSET
// So we can use a HashSet but what exactly HashSet gonna do for us. It’s gonna 
// allow us to insert elements in to the hashest in big O(1) .
//  We can also ask our hash map does a curtain value exist? If it doesn’t exit we have to add in to the hashset
//  so we check the others and if we found something that already in the hashset 
//  it means we have a duplicate and we can return it true. Time O(n)
// Space O(n) cuz we create a hashSet. Very efficient




// var containsDuplicate = function(nums) {
//   for(let right = 0; right<nums.length; right++){
//     for(let left = 0; left<right; left++){
//       const isDuplicate = nums[left] === nums[right];
//       if (isDuplicate)
//       return true;
//     }
//   }
//   return false;

// };