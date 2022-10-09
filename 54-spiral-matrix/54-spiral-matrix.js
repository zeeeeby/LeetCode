/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    const n = matrix.length
    const m = matrix[0].length
    const ans = []
    let up = 0
    let down = n - 1
    let left = 0
    let right = m - 1
    const shouldStop = () => ans.length >= n * m
    while (!shouldStop()) {
        for (let i = left; i <= right && !shouldStop(); ++i) {
           ans.push(matrix[up][i])
        }
        
        for (let j = up + 1; j <= down - 1  && !shouldStop(); ++j) {
            ans.push(matrix[j][right])
        }
        
        for (let i = right; i >= left  && !shouldStop(); --i) {
            ans.push(matrix[down][i])
        }
        
        for (let j = down - 1; j >= up + 1  && !shouldStop(); --j) {
            ans.push(matrix[j][left])
        }
        up += 1
        down -= 1
        left += 1
        right -= 1
    }
    return ans
};

