/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

var findNode = (head, pos) => {
    let ans = head
    for (let i = 1; i < pos; ++i) {
        ans = ans.next
    }
    return ans
}
var reverseBetween = function(head, left, right) {
    if (!head.next) return head
    let fakeStart = new ListNode(0, head)
    let rightNode = fakeStart
    let leftNode = fakeStart
    let gap = right - left + 1
    for (let i = 0; i < gap; ++i) {
        rightNode = rightNode.next
    }
    for (let i = 0; i < left - 1; ++i) {
        leftNode = leftNode.next
        rightNode = rightNode.next
    }
    const snd = rightNode.next 
    rightNode.next = null
    const reversed = reverseList(leftNode.next)
    
    leftNode.next.next = snd
    leftNode.next = reversed
    return fakeStart.next
};