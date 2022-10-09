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
 * @return {ListNode[]}
 */

const listSize = (head) => {
    let ptr = head
    let size = 0
    while (ptr) {
        ptr = ptr.next 
        size++
    }
    return size
}
var splitListToParts = function(head, k) {
    let ans = []
   
    let size = listSize(head)
    const partSize = Math.floor(size / k)
    const remainder =  size % k
    
    let ptr = head
    let part = 0
    for (let part = 0; part < k; ++part) {
        let temp = new ListNode(0)
        let writer = temp
        for (let i = 0; i < partSize + (part < remainder ? 1 : 0); ++i) {
            writer.next = new ListNode(ptr.val)
            writer = writer.next
            if (ptr) ptr = ptr.next
        }
        ans[part] = temp.next
    }
   
    return ans
};