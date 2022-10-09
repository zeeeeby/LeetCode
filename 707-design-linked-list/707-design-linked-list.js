// singly list
// var Node = function(val, next = null) {
//     this.val = val
//     this.next = next
    
// }
// var MyLinkedList = function() {
//     this.head = null
// };

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//     const node = this.findNode(index)
//     return node ? node.val : -1
// };

// MyLinkedList.prototype.findNode = function(index) {
//     let ptr = this.head
//     while (index > 0 && ptr) {
//         ptr = ptr.next
//         index--
//     }
//     return ptr
// };
// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//     const newNode = new Node(val, this.head)
//     this.head = newNode
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//     if (!this.head) return this.addAtHead(val)
//     let ptr = this.head
//     while (ptr.next) ptr = ptr.next
//     ptr.next = new Node(val)
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     // start
//     if (index == 0) return this.addAtHead(val)
//     const beforeInject = this.findNode(index - 1)
//     if (!beforeInject) return 
//     // end
//     if (!beforeInject.next) {
//         beforeInject.next = new Node(val)
//         return
//     }
//     const newNode = new Node(val, beforeInject.next)
//     beforeInject.next = newNode
// };

// /** 
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if (!this.head) return
//     if (index == 0) {
//         this.head = this.head.next
//         return
//     }
//     const node = this.findNode(index - 1)
//     if (node && node.next) {
//         node.next = node.next.next
//     }
// };

// /** 
//  * Your MyLinkedList object will be instantiated and called as such:
//  * var obj = new MyLinkedList()
//  * var param_1 = obj.get(index)
//  * obj.addAtHead(val)
//  * obj.addAtTail(val)
//  * obj.addAtIndex(index,val)
//  * obj.deleteAtIndex(index)
//  */

// doubly list
var Node = function(val, next = null, prev = null) {
    this.val = val
    this.next = next
    this.prev = prev
    
}
var MyLinkedList = function() {
    this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    const node = this.findNode(index)
    return node ? node.val : -1
};

MyLinkedList.prototype.findNode = function(index) {
    let ptr = this.head
    while (index > 0 && ptr) {
        ptr = ptr.next
        index--
    }
    return ptr
};
/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val, this.head)
    if(this.head) this.head.prev = newNode
    this.head = newNode
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (!this.head) return this.addAtHead(val)
    let ptr = this.head
    while (ptr.next) ptr = ptr.next
    ptr.next = new Node(val, null, ptr)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index == 0) return this.addAtHead(val)
    const curr = this.findNode(index - 1)
    if (!curr) return
    const newNode = new Node(val, curr.next, curr)
    if(curr.next) curr.next.prev = newNode
    curr.next = newNode
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (!this.head) return
    if (index == 0) {
        this.head = this.head.next
        if(this.head) this.head.prev = null
        return
    }
    const curr = this.findNode(index)
    if (!curr) return 
    if(curr.next) curr.next.prev = curr.prev
    curr.prev.next = curr.next
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */