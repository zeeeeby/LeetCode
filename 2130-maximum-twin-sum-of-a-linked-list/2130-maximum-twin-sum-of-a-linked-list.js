/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */


function reverseList(head) {
    if (!head) return head;
    let prev = null;
    let curr = head;
    while(curr) {
        let tmp = curr.next
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
   
    return prev;
};
function findMiddle(head) {
    let fast = head
    let slow = head
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
function pairSum(head) {
    const fstListTail = findMiddle(head)
    const sndListHead = fstListTail.next
    let reversedSnd = reverseList(sndListHead)
    let p1 = head
    let p2 = reversedSnd
    let ans = 0
    while (p2) {
        ans = Math.max(ans, p1.val + p2.val)
        p1 = p1.next 
        p2 = p2.next
    }
    return ans
};