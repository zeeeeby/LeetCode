/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 const mergeTwoLists = function(l1, l2) {
        if (!l1) {
            return l2;
      }
      if (!l2) {
         return l1;
      }
      if (l1.val < l2.val) {
         l1.next = mergeTwoLists(l1.next, l2);
         return l1;
       }
      else {
         l2.next = mergeTwoLists(l2.next, l1);
         return l2;
       }
    };
var mergeKLists = function(lists) {
    if (!lists.length) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    let l = mergeTwoLists(lists[0], lists[1]);
    for (let i = 2; i < lists.length; ++i) {
        l = mergeTwoLists(l, lists[i]);
    }
    return l;
   
};