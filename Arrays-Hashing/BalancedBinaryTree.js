// Given a binary tree, determine if it is 
// height-balanced

// Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

// Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

// Example 3:
Input: root = []
Output: true

var isBalanced = function(root){
  let result = true;
  function solve(root){
    if(root == null){
      return 0;
    }
    let left = solve(root.left);
    let right = solve(root.right);

    if (Math.abs(right, - left) > 1){ //CHECKING IF THE TREE BALANCED OR NOT
      result = false; //UNBALANCED
    } 
    return Math.max(left, right) + 1; //HEIGHT OF THE TREE
  }
  solve(root);
  return result;
}
console.log(isBalanced(root));
// console.log(isBalanced(root2));
// console.log(isBalanced(root3));