/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, a) {
    let ans = Number.MAX_SAFE_INTEGER
    let i = 0
    let j = i
    let sum = a[i]
    while (j < a.length) {
        if (sum >= target) {
            ans = Math.min(ans, j - i + 1)
            sum -= a[i]
            i++
        }
        else {
            j++
            sum += a[j]
        }
        
    }
        
    return ans == Number.MAX_SAFE_INTEGER ? 0 : ans
};