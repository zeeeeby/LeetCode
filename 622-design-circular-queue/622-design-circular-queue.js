/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.arr = Array.from({ length: k })
    this.head = null
    this.tail = null
    this.size = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false
    if (this.isEmpty()) {
        this.head = this.tail = 0
        this.arr[this.head] = value
    } else {
        this.tail = (this.tail + 1) % this.arr.length
        this.arr[this.tail] = value
    }
    this.size++
    return true

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false
    if (this.size === 1) {
        this.head = this.tail = null
    } else {
        this.head = (this.head + 1) % this.arr.length
    }
    this.size--
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1
    return this.arr[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1
    return this.arr[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.arr.length
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */