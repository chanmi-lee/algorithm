// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ''
    if (strs.length === 0) return result

    result = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(result) !== 0) {
            result = result.substring(0, result.length - 1)
            if (!result) return ''
        }
    }
    return result
};
