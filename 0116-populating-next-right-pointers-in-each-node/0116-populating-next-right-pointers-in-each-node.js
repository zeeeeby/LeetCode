/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var levelOrder = function(root) {
    if (!root) return 
    const queue = [root]
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; ++i) {
            const curr = queue.shift()
            queue.push(...[curr.left, curr.right].filter(Boolean))
            if (queue[0] && i < len - 1) {
                curr.next = queue[0]
            }
        }
    }
};


var connect = function(root) {
    levelOrder(root)
    return root 
};