/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const traverse = (root, cb) => {
    if (root) {
        for (let child of root.children || []) {
            traverse(child, cb)
        }
        cb(root.val)
    }
}
const nonRecursiveTraverse = (root, cb) => {
    if (root) {
        const stack = [root.val, ...(root.children || [])]
        while (stack.length) {
            const curr = stack.pop()
            if (typeof curr === 'number') {
                cb(curr)
            }
            else {
                stack.push(curr.val, ...(curr.children || []))
            }
        }
    }
}
var postorder = function(root) {
    const ans = []
    traverse(root, ans.push.bind(ans))
    return ans
};