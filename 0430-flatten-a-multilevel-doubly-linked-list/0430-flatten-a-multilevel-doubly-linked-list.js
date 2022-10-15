/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// var flatten = function(head) {
//     if (!head) return head
//     let ans = new Node(0, null, null, null)
//     let writer = ans
//     const helper = (head) => {
//         for (let p = head; p !== null; p = p.next) {
//             writer.next = new Node(p.val, writer, null, null)
//             writer = writer.next
//             if (p.child) helper(p.child)
//         }
//     }
//     helper(head)
//     ans.next.prev = null
//     return ans.next
// };

var flatten = function(head) {
    let ptr = head
    const stack = []
    
    while (ptr) {
        if (ptr.child) {
            if (ptr.next) stack.push(ptr.next)
            ptr.next = ptr.child
            ptr.next.prev = ptr
            ptr.child = null
        }
        else {
            if (!ptr.next && stack.length) {
                ptr.next = stack.pop()
                if(ptr.next) ptr.next.prev = ptr
            }
        }
            
        ptr = ptr.next
    }
    return head
};
