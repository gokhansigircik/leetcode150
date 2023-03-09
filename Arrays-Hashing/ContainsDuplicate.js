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
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(let right = 0; right<nums.length; right++){
    for(let left = 0; left<right; left++){
      const isDuplicate = nums[left] === nums[right];
      if (isDuplicate)
      return true;
    }
  }
  return false;

};
console.log(containsDuplicate(nums));
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));