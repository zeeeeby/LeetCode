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
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stack = [];
    stack.push([p, q]);
    
    while(stack.length) {
        const last = stack.pop();
        
        if (last[0] && last[1] && last[0].val == last[1].val) {
            stack.push([last[0].left, last[1].left])
            stack.push([last[0].right, last[1].right])
        }
        else if (last[0] || last[1])
            return false;
        
    }
    
    return true;  
};