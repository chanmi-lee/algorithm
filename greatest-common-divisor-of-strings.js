// https://leetcode.com/problems/greatest-common-divisor-of-strings

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let gcd = ''
    // check if both has common prefix
    if (str1 + str2 !== str2 + str1) {
        return gcd
    }

    let n = str1.length
    let k = str2.length
    let gcds = (x, y) => {
        if (!y) return x
        return gcds(y, x % y)
    }
    let idx = gcds(n, k)
    gcd = str1.slice(0, idx)
    return gcd
};
