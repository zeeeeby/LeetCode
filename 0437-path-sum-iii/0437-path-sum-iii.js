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
 * @return {number}
 */
var helper = function(root, targetSum, onAnswerFound) {
    if (!root) return false
    const stack = [[root, targetSum]]
    while (stack.length) {
        const [r, val] = stack.pop()
        if (!r) continue
        if (r.val === val) {
            onAnswerFound()
          
        }
        stack.push([r.left, val - r.val], [r.right, val - r.val])
    }
};

const traverse = (root, cb) => {
    if (root) {
        traverse(root.left, cb);
        traverse(root.right, cb);
        cb(root);
    }
}

var pathSum = function(root, targetSum) {
    let ans = 0
    traverse(root, (x) => {
        helper(x, targetSum, () => ans += 1 ) 
    })
    return ans
};