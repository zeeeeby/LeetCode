/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(a, target) {
    let hashMap = {}
    for (let i = 0; i < a.length; ++i) {
      
       if (target - a[i] in hashMap) {
           return [i, hashMap[target - a[i]]]
       }
       else {
           hashMap[a[i]] = i
       }
    }
};