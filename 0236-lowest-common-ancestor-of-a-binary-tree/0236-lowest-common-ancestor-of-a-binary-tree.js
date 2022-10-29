/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

let dfs = (root, p, q) => {
    if (!root) return null
    if (root === p || root === q) return root
    
    const left = dfs(root.left, p, q)
    const right = dfs(root.right, p, q)
    
    if (left && right) return root
    if (!left) return right
    if (!right) return left
}
var lowestCommonAncestor = function(root, p, q) {
    const ans = dfs(root, p, q)
    return ans
};