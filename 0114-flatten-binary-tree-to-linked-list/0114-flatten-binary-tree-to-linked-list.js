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

var flatten = function(root) {
    let ptr = root
    const stack = []
    
    while (ptr) {
        if (ptr.left) {
            if (ptr.right) stack.push(ptr.right)
            ptr.right = ptr.left
            ptr.left = null
        }
        else {
            if (!ptr.right && stack.length) {
                ptr.right = stack.pop()
            }
        }
            
        ptr = ptr.right
    }
    return root
};