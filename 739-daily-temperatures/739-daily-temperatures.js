/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

const peek = stack => stack[stack.length - 1]
var dailyTemperatures = function(a) {
    const stack = [a.length - 1]
    const ans = []
    ans[a.length - 1] = 0
    for (let i = a.length - 2; i >= 0; --i) {
        while (stack.length > 0 && a[i] >= a[peek(stack)]) {
                stack.pop()
        }
        if (!stack.length) {
            ans[i] = 0
        }
        else {
            ans[i] = peek(stack) - i
        }
        stack.push(i)
    }
    return ans
};