// TWO SUM
// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
const nums = [2, 7, 11, 15];
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

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [map.get(num2), i];
    }
    map.set(num1, i);
  }
};

console.log(twoSum(nums, target));
console.log(twoSum(nums1, target));
console.log(twoSum(nums2, target));
