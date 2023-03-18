// TWO SUM
// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
const nums = [2, 7, 11, 15];
// ok so we're gonna say we are at 2 and missing number is 7. how do we know that
// cuz target minus the current num is 7
const target = 9;
// Output: [0, 1];
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
const nums1 = [3, 2, 4];
// Output: [1, 2];
const nums2 = [3, 3];
// Output: [0, 1];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target){
  const previousValues ={}

  for(let i = 0; i<nums.length; i++){
    const currentNumber = nums[i]
    const neededValue = target - currentNumber
    const index2 = previousValues[neededValue]
    if(index2 != null){
      return [index2, i]
    }else {
      previousValues[currentNumber] = i;
    }
  }
}

// console.log(twoSum(nums, target));
// console.log(twoSum(nums1, target));
console.log(twoSum(nums2, target));