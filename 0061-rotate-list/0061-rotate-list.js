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
    let prev = null
    let curr = head
    while(curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

var reverseBetween = function(head, left, right) {
    if (!head.next) return head
    let fakeStart = new ListNode(0, head)
    let rightNode = fakeStart
    let leftNode = fakeStart
    let gap = right - left + 1
    for (let i = 0; i < gap; ++i) {
        rightNode = rightNode.next
    }
    for (let i = 0; i < left - 1; ++i) {
        leftNode = leftNode.next
        rightNode = rightNode.next
    }
    const snd = rightNode.next 
    rightNode.next = null
    const reversed = reverseList(leftNode.next)
    
    leftNode.next.next = snd
    leftNode.next = reversed
    return fakeStart.next
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