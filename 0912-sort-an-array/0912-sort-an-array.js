/**
 * @param {number[]} nums
 * @return {number[]}
 */

const partition = (arr, l, r) => {
    let w = l
    const pivot = arr[r]
    for (let i = l; i < r; ++i) {
        if (arr[i] < pivot) {
            [arr[i], arr[w]] = [arr[w], arr[i]]
            w++
        }
    }
    
    [arr[r], arr[w]] = [arr[w], arr[r]]
    return w
}
const quickSort = (arr, l, r) => {
    if (l < r) {
        const p = partition(arr, l, r)
        quickSort(arr, l, p - 1)
        quickSort(arr, p + 1, r)
    }
}

const merge = (a, l, r, m) => {
    const t = []
    let p1 = l
    let p2 = m + 1
    while (p1 <= m && p2 <= r) {
        if (a[p1] < a[p2]) {
            t.push(a[p1++])
        }
        else {
            t.push(a[p2++])
        }
    }
    while (p1 <= m)  t.push(a[p1++])
    while (p2 <= r)  t.push(a[p2++])
    for (let i = 0; i < t.length; ++i) {
        a[i + l] = t[i]
    }
    
}
const mergeSort = (nums, l, r) => {
    if (l < r) {
        const m = Math.floor(l + (r - l) / 2)
        mergeSort(nums, l, m)
        mergeSort(nums, m + 1, r)
        merge(nums, l, r, m)
    }
}
var sortArray = function(nums) {
    // quickSort(nums, 0, nums.length - 1)
    mergeSort(nums, 0, nums.length - 1)
    return nums
};