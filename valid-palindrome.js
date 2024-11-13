// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // convert all uppercase letters into lowercase letters
    // remove all non-alphanumeric characters
    const replaced = s.toLowerCase().replace(/[^a-z0-9]|\s+|/gi, '')

    // check if it is the same forward and backward
    let right = replaced.length - 1
    for (let i = 0; i < replaced.length; i++) {
        if (replaced[i] !== replaced[right-i]) {
            return false
        }
    }
    return true
};
