// https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    const chars = [...x.toString()]
    const mid = Math.floor(chars.length / 2)
    for (let i = 0; i < mid; i++) {
        if (chars[i] !== chars[chars.length-1-i]) return false
    }
    return true
};
