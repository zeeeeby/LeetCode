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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    const queue = [root]
    const ans = []
    let depth = 1
    while (queue.length) {
        const len = queue.length
        ans.push([])
        for (let i = 0; i < len; ++i) {
            const curr = queue.shift()
            queue.push(...[curr.left, curr.right].filter(Boolean))
            ans[ans.length - 1].push(curr.val)
        }
        if (depth % 2 === 0) {
            ans[ans.length - 1].reverse()
        }
        depth++
    }
    return ans
};