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
 * @return {boolean}
 */
const helper = (left, right) => {
    if (!left || !right) return right === left
    
    if (left.val !== right.val) return false
    return helper(left.left, right.right) && helper(left.right, right.left)
}
var isSymmetric = function(root) {
    return helper(root.left, root.right)
};