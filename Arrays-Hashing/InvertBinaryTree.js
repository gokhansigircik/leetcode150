// Given the root of a binary tree, invert the tree, and return its root.


// Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

// Example 2:
Input: root1 = [2,1,3]
Output: [2,3,1]

// Example 3:
Input: root2 = []
Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//time complexity: O(n)
//space complexity: O(n)
// 1-if root is null, return null
// 2-create temp variable and assign it to root.left 
// 3-change root.left to equal root.right
// 4-change root.right to equal to temp
// 5-invertTree(root.left)
// 6-invertTree(root.right)

var invertTree = function(root){
  if (root === null) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree (root.left); // we call it recurvisely
  invertTree (root.right);  // we call it recurvisely

  return root //return the root cuz its been inverted
}
console.log(invertTree(root))
console.log(invertTree(root1))
console.log(invertTree(root2))