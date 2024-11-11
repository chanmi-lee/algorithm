// https://leetcode.com/problems/valid-anagram

/**
 * check if t is anagram of s, return true, and false otherwise
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let map = {}
    for (let char of s) {
        map[char] = (map[char] || 0) + 1
    }
    for (let char of t) {
        if (!map[char] || map[char] <= 0) {
            return false
        }
        map[char]--
    }
    return true
};
