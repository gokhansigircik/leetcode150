// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
// Explanation: 2 does not exist in nums so return -1 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {  //function search(nums, target)
  let left = 0, //so we create left and right pointers
    right = nums.length - 1;
  while (left <= right) {  //we go through this until they meet

    //we are creating the mid element 
    //M = 0 + (5-0)/2 = 2.5 (floor so its 2) so middle element is 3
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // m = 3 + (5-3)/2 = 4 oda target value 9. what if it wasnt 9
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));

// [-1, 0, 3, 5, 9, 12] => with O(log n) we start in the middle
// target = 9
// O(n) if u go through every element in the array its O of(n) runtime complexity
// cuz u have to go through every element
// O(log n) means better than O of(n) we have to have input everytime and go through the array
