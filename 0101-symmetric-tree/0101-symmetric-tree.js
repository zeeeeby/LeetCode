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
    return nonRecursive(root)
    return helper(root.left, root.right)
};

const nonRecursive = (root) => {
    const stack = [[root.left, root.right]]
    while (stack.length) {
        const [left, right] = stack.pop()
        if (!left && !right) continue
        if (!left && right || left && !right) return false 
        if (left.val !== right.val) return false
        stack.push([left.left, right.right], [left.right, right.left])
    }
    return true
}