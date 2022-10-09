/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = []
    const p = []
    const ans = []
    for (let num of nums) {
        if (num < 0) n.push(num * num)
        else p.push(num * num)
    }
    let n_idx = n.length - 1
    let p_idx = 0
    while (n_idx >= 0 && p_idx < p.length) {
        if (p[p_idx] <= n[n_idx]) {
            ans.push(p[p_idx++])
        }
        else {
            ans.push(n[n_idx--])
        }
    }
    while (n_idx >= 0) {
        ans.push(n[n_idx--])
    }
    while (p_idx < p.length) {
        ans.push(p[p_idx++])
    }
    return ans
};