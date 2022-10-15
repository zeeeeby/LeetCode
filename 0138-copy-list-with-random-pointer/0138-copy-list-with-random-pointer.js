/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const ans = new Node(0, null, null)
    let a = ans 
    const nodesMap = new Map()
    let h = head
    while (h) {
        nodesMap.set(h, new Node(h.val, null, null))
        h = h.next
    }
    let p = head
    while (p) {
        a.next = nodesMap.get(p)
        a.next.random = nodesMap.get(p.random)
        p = p.next
        a = a.next
    }
    return ans.next
};