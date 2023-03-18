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

var twoSum = function (nums, target) {
  // we are gonna use a hashmap. basically we are gonna store what we see
  // so far and later we call if we seen that particular number
  let map = new Map();
  // so we're gonna ask the map have u seen the 7 before. its gonna say no.
  // and we are just wanna add this current number and its index to the map.
  // incase we later do see 7 and we recall that. we just return those indicis.
  for (let i = 0; i < nums.length; i++) {
    /*loop throug the array and check each value until we find our missing value*/
    let num1 = nums[i];
    let num2 = target - num1; /*number that we're looking 4 is gonna be the target - num1 */
    if (map.has(num2)) {
      /*now we are gonna ask the map if it has this num2 */
      return [i, map.get(num2)]; /* we are gonna return an array with the first index and index of the second number*/
    }
    map.set(num1,i); /*we are gonna set it in the map, the first number the current number*/
    //  that we are at and its index. that way we can recall it later and
    //  have the map return it to us incase we find the other pair.
  }
};

// console.log(twoSum(nums, target));
console.log(twoSum(nums1, target));
console.log(twoSum(nums2, target));


