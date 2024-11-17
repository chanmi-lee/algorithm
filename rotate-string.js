// https://leetcode.com/problems/rotate-string

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false
    if (s === goal) return true
    for (let i = 1; i < s.length; i++) {
        let str = s.slice(i,s.length)+s.slice(0,i)
        if (str === goal) return true
    }
    return false
};
