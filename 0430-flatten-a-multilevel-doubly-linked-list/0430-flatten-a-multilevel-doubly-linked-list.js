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
//     let ptr = head
//     const stack = []
    
//     while (ptr) {
//         if (ptr.child) {
//             if (ptr.next) stack.push(ptr.next)
//             ptr.next = ptr.child
//             ptr.next.prev = ptr
//             ptr.child = null
//         }
//         else {
//             if (!ptr.next && stack.length) {
//                 ptr.next = stack.pop()
//                 if(ptr.next) ptr.next.prev = ptr
//             }
//         }
            
//         ptr = ptr.next
//     }
//     return head
// };

var flatten = function(head) {
    let ptr = head
 
    while (ptr) {
        if (ptr.child) {
            const next = ptr.next
            
            ptr.next = ptr.child
            ptr.next.prev = ptr
            
            let c = ptr.child
            while (c.next) {c = c.next}
            c.next = next
            if (next) next.prev = c
            
            ptr.child = null
        }
        ptr = ptr.next
    }
    return head
};
