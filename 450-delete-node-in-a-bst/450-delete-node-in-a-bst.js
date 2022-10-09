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
 * @param {number} key
 * @return {TreeNode}
 */

// const _deleteNode = (node, parent) => {
//     // 0 child case
//     if (!(node.left || node.right)) {
//         if (parent.left === node) {
//             parent.left = null
//         }
//         else {
//             parent.right = null
//         }
//         return 
//     }
//     // 1 child case
//     if (!(node.left && node.right)) {
//         if (!node.left) {
//             const right = node.right
//             node.val = right.val
//             node.left = right.left
//             node.right = right.right
//         }
//         else {
//             const left = node.left
//             node.val = left.val
//             node.left = left.left
//             node.right = left.right
//         }
//         return
//     }
//     // 2 child case
//     if (!node.right.left) {
//         const tmp = node.right.right
//         node.val = node.right.val
//         node.right = tmp
//     }
//     else {
//         let par = parent
//         let ptr = node.right
//         while (ptr.left) {
//             par = ptr
//             ptr = ptr.left
//         }
//         node.val = ptr.val
//         _deleteNode(ptr, par)
//     }
// }
// var deleteNode = function(root, key) {
//     let parent = null
//     let node = root
//     while (node) {
//         if (node.val === key) {
//             // 1 size case...
//             if (!parent && !node.left && !node.right) {
//                 return null
//             }
//             _deleteNode(node, parent)
//             return root
//         }
//         else if (node.val < key) {
//             parent = node
//             node = node.right
//         }
//         else {
//             parent = node
//             node = node.left
//         }
//     }
//     return root
// };

var deleteNode = function(root, key) {
    if (!root) return null
    
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    }
    else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    }
    else {
        if (!root.left) return root.right
        if (!root.right) return root.left
        
        let leftMinimum = root.right
        while (leftMinimum.left) leftMinimum = leftMinimum.left
        leftMinimum.left = root.left
        return root.right
    }
    return root
}