/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    let ans = ""
    a = Array.from(a)
    b = Array.from(b)
  
    while (a.length || b.length || carry) {
        if (a.length) {
            carry += parseInt(a.pop()) 
        }
        if (b.length) {
            carry += parseInt(b.pop()) 
        }
        ans = (carry % 2) + ans
        carry = Math.floor(carry / 2)
    }
    return ans;
};