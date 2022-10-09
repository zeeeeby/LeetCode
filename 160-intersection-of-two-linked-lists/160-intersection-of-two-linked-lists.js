/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const listSize = (head) => {
    let size = 0
    while (head) {
        head = head.next
        size++
    }
    return size
}
var getIntersectionNode = function(a, b) {
    let sizeA = listSize(a)
    let sizeB = listSize(b)
 
    let short = a
    let long = b
    if (sizeA > sizeB) {
        [short, long] = [b, a]
    }
    else {
        [short, long] = [a, b]
    }
    let difference = Math.abs(sizeB - sizeA)
    while (difference > 0) {
        long = long.next
        difference--
    }
    
    while(long !== short) {
        long = long.next
        short = short.next
        if (!short) return null
    }
    return long
};