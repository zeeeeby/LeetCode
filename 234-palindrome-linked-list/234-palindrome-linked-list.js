/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function reverseList(head) {
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
function findMiddle(head) {
    let fast = head
    let slow = head
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
// var isPalindrome = function(head) {
//     let arr = []
//     let ptr = head
//     while (ptr) {
//         arr.push(ptr.val)
//         ptr = ptr.next
//     }
    
//     for (let i = 0; i < arr.length / 2; ++i) {
//         if (arr[i] !== arr[arr.length - 1 - i]) return false
//     }
//     return true
    
// };

var isPalindrome = function(head) {
   const fstListTail = findMiddle(head)
   const sndListHead = fstListTail.next
    let reversedSnd = reverseList(sndListHead)
    let p1 = head
    let p2 = reversedSnd
    while(p2) {
        if (p1.val !== p2.val) return false
        p1 = p1.next
        p2 = p2.next
    }
    fstListTail.next = reverseList(sndListHead)
    return true
};