
var MyQueue = function() {
    this.base = []
    this.helper = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.base.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.base.length > 1) {
        this.helper.push(this.base.pop())
    }
    let ans = this.base.pop()
    while (this.helper.length) {
        this.base.push(this.helper.pop())
    }
    return ans
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.base[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.base.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */