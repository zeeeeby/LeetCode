/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const map = {}
    const ans = []
    for (let i = 0; i < mat.length; ++i) {
        for (let j = 0; j < mat[0].length; ++j) {
            map[i + j] = map[i + j] || []
            map[i + j].push(mat[i][j])
        }
    }
 
    for (let i in map) {
        if (i % 2 == 0) {
            ans.push(...map[i].reverse())
        }
        else {
            ans.push(...map[i])
        }
    }
    return ans
};