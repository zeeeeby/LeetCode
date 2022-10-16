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
 * @return {void} Do not return anything, modify root in-place instead.
 */

const flat = root => {
    if (!root) return null
    let r = root.right
    let l = flat(root.left)
    root.left = null
    
    if(l) {
        root.right = l
        let p = l
        while(p.right) {
            p = p.right
        }
        p.right = r
    }
    flat(r)
    return root
}
var flatten = function(root) {
    flat(root)
};