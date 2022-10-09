/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let i = 0
    for (; i < strs[0].length; ++i) {
        for (let j = 1; j < strs.length; ++j) {
             // можно заметить, что, если на этом шаге i == strs[j].length, то мы вышли за пределы строки j, а значит ответом будет подстрока от 0 до i, потому что более длинных префиксов быть не может.
             if (strs[j][i] !== strs[0][i]) {
                 return strs[0].slice(0, i)
             }
        }
    }
    return strs[0].slice(0, i)
};