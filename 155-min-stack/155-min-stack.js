const Node = function(val, min, next) {
    this.val = val
    this.min = min
    this.next = next
}
var MinStack = function() {
    this.head = null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.head) this.head = new Node(val, val, this.head)
    else {
        this.head = new Node(val, Math.min(this.head.min, val), this.head)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.head = this.head.next
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */