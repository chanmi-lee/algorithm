// https://leetcode.com/problems/reverse-words-in-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ').filter((x) => x)
    let reversed = ''
    for (let i = words.length - 1; i > 0; i--) {
        reversed += `${words[i]} `
    }
    reversed += words[0]
    return reversed
};
