/**
 * @param {string} s
 * @return {string}
 */


var decodeString = function(s) {
    let ans = ""
    let currN = 0
    const stack = []
    for (let i in s) {
        if (s[i] === "[") {
            stack.push(ans)
            stack.push(currN)
            ans = ""
            currN = 0
        }
        else if (s[i] === "]") {
            const num = stack.pop()
            const str = stack.pop()
            ans = str + ans.repeat(num)
        }
        else if (s[i] >= 0 && s[i] <= 300) {
            currN = currN * 10 + parseInt(s[i])
        }
        else {
            ans += s[i]
        }
    }
    return ans
};