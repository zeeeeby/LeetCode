/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode(0)
    let p = ans
    let c = 0
    while (l1 && l2) {
        let sum = l1.val + l2.val + c
        p.next = new ListNode(sum % 10)
        c = sum > 9 ? 1 : 0
        p = p.next
        l1 = l1.next
        l2 = l2.next
    }
    let r = l1 || l2
    while (r) {
        let sum = r.val + c
        p.next = new ListNode(sum % 10)
        c = sum > 9 ? 1 : 0
        p = p.next
        r = r.next
    }
    if (c) p.next = new ListNode(1)
    return ans.next
};