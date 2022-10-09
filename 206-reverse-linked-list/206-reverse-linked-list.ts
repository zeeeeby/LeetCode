/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
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