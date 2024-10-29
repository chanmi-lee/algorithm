// https://leetcode.com/problems/is-subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // edge case
    if (s.length > t.length) return false
    
    let subsequence = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[subsequence]) {
            subsequence++
        }
    }
    return s.length === subsequence
};
