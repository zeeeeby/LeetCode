/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     const temp = nums.slice()
//     const len = nums.length
//     for (let i = 0; i < len; ++i) {
//         nums[(i + k) % len] = temp[i]
//     }
// };

const reverse = (arr, start, finish) => {
    while (start < finish) {
        let a = arr[start]
        arr[start] = arr[finish]
        arr[finish] = a
        start++
        finish--
    }
}

var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};