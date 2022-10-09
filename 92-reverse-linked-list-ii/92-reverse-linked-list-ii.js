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
    if (!head) return head
    let newHead = head
    if (head.next) {
        newHead = reverseList(head.next)
        head.next.next = head
        head.next = null
    }
    return newHead
};

var findNode = (head, count) => {
    let ans = head
    for (let i = 1; i < count; ++i) {
        ans = ans.next
    }
    return ans
}
var reverseBetween = function(head, left, right) {
    if (!head.next) return head
    
    let fake = new ListNode(0, head)
    let beforeReversing = fake
    for (let i = 0; i < left - 1; ++i) {
        beforeReversing = beforeReversing.next
    }
    let start = beforeReversing.next
    let prev = null
    let curr = start
    let next = curr.next
    for (let i = 0; i < right - left; ++i) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = next.next;
    }
    curr.next = prev;
    if (next) {
        start.next = next
    }
    if (left == 1) {
        return curr
    }
    beforeReversing.next = curr
    
   
    return fake.next
};