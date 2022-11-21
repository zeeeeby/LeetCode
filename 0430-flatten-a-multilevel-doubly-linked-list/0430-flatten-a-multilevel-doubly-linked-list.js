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

var flatten = function(head) {
   let ptr = head
   while (ptr) {
       if (ptr.child) {
           const next = ptr.next
           
           ptr.next = ptr.child
           ptr.next.prev = ptr
           let c = ptr.child
           while (c.next) c = c.next
           
           c.next = next
           if (next) next.prev = c
           
           ptr.child = null
       }
       
       ptr = ptr.next
   }
   return head
};
