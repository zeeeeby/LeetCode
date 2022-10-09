/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let a = []
    let hptr = head
    while (hptr) {
        a.push(hptr.val)
        hptr = hptr.next
    }
    let tmp = a[k - 1]
    let l = a.length
    a[k - 1] = a[l - k]
    a[l - k] = tmp
    
    let newHead = new ListNode(a[0])
    let ptr = newHead
    for (let i = 1; i < a.length; ++i) {
        let node = new ListNode(a[i])
        ptr.next = node
        ptr = node
    }
    return newHead
};