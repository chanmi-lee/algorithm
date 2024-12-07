// https://leetcode.com/problems/merge-strings-alternately


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ''
    let idx = 0
    for (const w of word1) {
        result += w
        if (idx < word2.length) {
            result += word2[idx++]
        }
    }
    if (idx < word2.length) {
        result += word2.slice(idx)
    }
    return result
};


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ''
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) result += word1[i]
        if (i < word2.length) result += word2[i]
    }
    return result
};
