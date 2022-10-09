/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    if (!head.next) return null
    let start = new ListNode(0, head)
    let fst = start
    let snd = start
    for (let i = 0; i < n; ++i) {
        snd = snd.next
    }
    while (snd && snd.next) {
        fst = fst.next
        snd = snd.next
    }
    
    fst.next = fst.next.next
    return start.next
};