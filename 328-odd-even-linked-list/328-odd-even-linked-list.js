/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var oddEvenList = function(head) {
    if (!head) return null
    let even = head.next
    let odd = head
    let evenHead = even

    while(even && even.next) {
       odd.next = odd.next.next
       even.next = even.next.next

       odd = odd.next
       even = even.next
    }

    odd.next = evenHead
    return head
};