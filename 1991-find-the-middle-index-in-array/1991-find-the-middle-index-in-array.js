/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0)
    let leftSum = 0
    for (let i in nums) {
        if (totalSum - nums[i] - leftSum == leftSum) return i
        leftSum += nums[i]
    }
    return -1
};