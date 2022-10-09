/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    
    const pow = (x, n) => {
        if (n === 0) {
            return 1;
        }
        if (n === -1) {
            return 1/x;
        }
        if (n % 2 === 0) {
            let b = pow(x, n / 2);
            return b * b;
        }
        else {
            return x * pow(x, n - 1);
        }
    } 
    return pow(x,n);
};