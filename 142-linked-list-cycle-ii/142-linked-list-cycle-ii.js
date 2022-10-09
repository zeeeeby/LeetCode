/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            let fst = head
            let snd = fast
            while (fst !== snd) {
                fst = fst.next
                snd = snd.next
            }
            return fst
        }
    }
   
    return null
};

