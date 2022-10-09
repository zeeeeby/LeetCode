/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


const traverse = (root: TreeNode | null, ans) => {
    if (root) {
        traverse(root.left, ans);
        ans.push(root.val);
        traverse(root.right, ans);
    }
}
function inorderTraversal(root: TreeNode | null): number[] {
    const ans = [];
    traverse(root, ans);
    return ans;
};