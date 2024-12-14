// https://leetcode.com/problems/unique-number-of-occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map()
    for (let num of arr) {
      map.set(num, (map.get(num) || 0) + 1)
    }
    const uniqVal = new Set(map.values())
    return map.size === uniqVal.size
};
