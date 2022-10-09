/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let ans = "0"
    for (let i = 0; i < number.length; ++i) {
        const d = number[i]
        if (d === digit) {
            let candidate = number.slice(0, i) + number.slice(i + 1)
            if (candidate > ans) {
                ans = candidate
            }
        }
    }
    return ans
};