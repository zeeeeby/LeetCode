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
// var copyRandomList = function(head) {
//     const ans = new Node(0, null, null)
//     let a = ans 
//     const nodesMap = new Map()
//     let h = head
//     while (h) {
//         nodesMap.set(h, new Node(h.val, null, null))
//         h = h.next
//     }
//     let p = head
//     while (p) {
//         a.next = nodesMap.get(p)
//         a.next.random = nodesMap.get(p.random)
//         p = p.next
//         a = a.next
//     }
//     return ans.next
// };

var copyRandomList = function(head) {
    if (!head) return null
    let p = head
    while(p) {
        let node = new Node(p.val, p.next, null)
        p.next = node
        p = p.next.next
    }
    let i = head
    while(i) {
        if (i.random)
            i.next.random = i.random.next
        i = i.next.next
    }
    let ans = head.next
    let p2 = head.next 
    let p1 = head
    while(p2 && p2.next) {
        const t = p2.next
        p2.next = p2.next.next
        p1.next = t
        p1 = p1.next
        p2 = p2.next
    }
    p1.next = null
    return ans
};