/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(a, target) {
    let i = 0
    let j = a.length - 1
    while (i < j) {
        let sum = a[i] + a[j]
        if (sum == target) {
            return [i + 1, j + 1]
        }
        else if (sum < target) {
            i++
        }
        else {
            j--
        }
    }
};