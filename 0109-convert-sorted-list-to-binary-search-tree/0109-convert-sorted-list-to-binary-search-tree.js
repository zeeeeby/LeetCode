/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const findBeforeMiddle = (list) => {
    let fast = list
    let slow = list
    let prev = null
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    return prev
}
const helper = (list) => {
    if (!list) return null
    if (!list.next) {
        return new TreeNode(list.val,null,null)
    }
    const beforeMiddle = findBeforeMiddle(list)
    const l2 = beforeMiddle.next.next
    const middle = beforeMiddle.next
    beforeMiddle.next = null
    const l1 = list
    return new TreeNode(middle.val, helper(l1), helper(l2))
}
var sortedListToBST = function(head) {
    return helper(head)
};