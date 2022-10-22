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
 * @return {number}
 */


var maxDepth = function(root) {
    if (!root) return 0
    let ans = 1
    const helper = (root, depth) => {
        if (!root) return
        if (!(root.left || root.right)) {
            ans = Math.max(ans, depth)
        }
        helper(root.right, depth + 1)
        helper(root.left, depth + 1)
    }
    helper(root, 1)
    return ans
};