/**
 * @param {number[]} nums
 * @return {boolean}
 */

const countGlobalInversions = (arr, low, high) => {
		if (low < high) {
			 const m = low + Math.floor((high - low) / 2)
			 return  countGlobalInversions(arr, low, m) + countGlobalInversions(arr, m + 1, high) + merge(arr, low, high)
		}
        return  0
}
const merge = (arr, low, high) => {
    let count = 0
    const m = low + Math.floor((high - low) / 2)
    let buffer = []
    let t = 0 
    let i = low 
    let j = m + 1
    while (i <= m && j <= high) {
        if (arr[i] < arr[j]) {
            buffer[t] = arr[i++]
        }
        else {
            buffer[t] = arr[j++] 
            count += m - i + 1
        }
        t++
    }

    while (i <= m) buffer[t++] = arr[i++] 
    while (j <= high) buffer[t++] = arr[j++]
    for(let i = 0; i < t; ++i) arr[low + i] = buffer[i] 
    return count
}
var isIdealPermutation = function(nums) {
    return countLocalInversions(nums) ===  countGlobalInversions(nums, 0, nums.length - 1) 
};

const countLocalInversions = (arr) => {
    let ans = 0
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] > arr[i + 1]) ans++
    }
    return ans
}