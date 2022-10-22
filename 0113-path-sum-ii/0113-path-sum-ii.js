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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
};

let buffer = []
const helper = (root, res, sum) => {
    if (!root) return
    if (!root.left && !root.right) {
        if (sum === root.val) {
            buffer.push(root.val)
            res.push(buffer.slice())
            buffer.pop()
        }
    }
    buffer.push(root.val)
    helper(root.left, res, sum - root.val)
    helper(root.right, res, sum - root.val)
    buffer.pop()
}
var pathSum = function(root, targetSum) {
    if (!root) return []
    const ans = []
    helper(root, ans, targetSum)
    return ans
};