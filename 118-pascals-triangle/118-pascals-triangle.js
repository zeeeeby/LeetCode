/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = []
    const row = [1]
    ans.push(row.slice())
    for (let i = 1; i < numRows; ++i) {
        row.push(1)
        for (let i = row.length - 2; i >= 1; --i) {
            row[i] = row[i] + row[i - 1]
        }
        ans.push(row.slice())
    }
    return ans
};