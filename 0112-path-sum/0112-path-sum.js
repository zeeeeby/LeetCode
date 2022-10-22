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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum) {
    if (!root) return false
    let ans = false
    const helper = (r, sum) => {
        if (!r || ans === true) return
        if (!r.right && !r.left) {
            if (sum === r.val) {
                ans = true
            }
        }
        helper(r.left, sum - r.val)
        helper(r.right, sum - r.val)
    }
    helper(root, targetSum)
    return ans
};