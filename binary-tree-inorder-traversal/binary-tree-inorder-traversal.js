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
 * @return {number[]}
 */

const traverse = (root, ans) => {
    if (root) {
        traverse(root.left, ans);
        ans.push(root.val);
        traverse(root.right, ans);
    }
}
const traverseNonRecursive = (root, cb) => {
    if (root) {
        const stack = [root.right, root.val, root.left] 
        while (stack.length) {
            const curr = stack.pop()
            if (curr === null || curr === undefined) continue
            if (!(curr instanceof TreeNode)) {
                cb(curr)
            }
            else {
                stack.push(curr.right, curr.val, curr.left)
            }
        }
    }
}
function inorderTraversal(root) {
    const ans = [];
    // traverse(root, ans);
    traverseNonRecursive(root, x => ans.push(x));
    return ans;
};