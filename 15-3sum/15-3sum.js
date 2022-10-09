/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const twoSum = (nums, start, target) => {
    let i = start
    let j = nums.length - 1
    let ans = []
    while (i < j) {
        let sum = nums[i] + nums[j]
        if (sum < target) {
            i++
        }
        else if (sum > target) {
            j--
        }
        else {
            ans.push([nums[i], nums[j]])
            i++
            j--
        }
    }
    return ans
}
var threeSum = function(nums) {
    const target = 0
    const ans = {}
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; ++i) {
        let twos = twoSum(nums, i + 1, target - nums[i])
        for (let a of twos) {
            let c = [nums[i], a[0], a[1]]
            ans[c.join("-")] = c
        }
    }
    return Object.values(ans)
};