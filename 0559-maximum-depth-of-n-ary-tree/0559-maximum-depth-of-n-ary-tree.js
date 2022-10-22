/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
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
        for (let child of root.children) {
            helper(child, depth + 1)
        }
    }
    helper(root, 1)
    return ans
};