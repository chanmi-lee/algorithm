// https://leetcode.com/problems/ransom-note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {}
    // to count the occurrences of each character in the magazine
    for (let c of magazine) {
        map[c] = (map[c] || 0) + 1
    }
    for (let c of ransomNote) {
        // if c is not in map, it means c does not exist in magazine
        // or if c is in map, but less or equal to zero, all occurrences of c have already been used
        if (!map[c] || map[c] <= 0) {
            return false
        }
        // minus character count
        map[c]--
    }
    // return true if constructible
    return true
};
