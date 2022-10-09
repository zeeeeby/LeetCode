/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let fakeNode = new ListNode(0, head)
    let ptr = fakeNode
    while (ptr) {
        if (ptr.next && ptr.next.val === val) {
            ptr.next = ptr.next.next
        }
        else {ptr = ptr.next}
    }
   
    return fakeNode.next
};