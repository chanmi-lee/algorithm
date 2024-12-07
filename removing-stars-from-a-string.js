// https://leetcode.com/problems/removing-stars-from-a-string

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let remainings = []
    for (const word of s) {
        if (word !== '*') {
            remainings.push(word)
        } else {
            remainings.pop()
        }
    }
    return remainings.join('')
};
