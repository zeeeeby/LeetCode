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

const getLen = (list) => {
    let c = 0;
    while (list) {
        c++
        list = list.next
    }
    return c
}

var rotateRight = function(head, k) {
    let len = getLen(head);
    k = k % len
    if (!head || k == 0) return head
  
    let reversed = reverseList(head)
    const fstEnd = reversed
    const ans = reverseBetween(reversed, 1, k)
    let snd = ans
    for (let i = 0; i < k; ++i) {
        snd = snd.next
    }
    let newSnd = reverseList(snd)
    fstEnd.next = newSnd
    return ans
};