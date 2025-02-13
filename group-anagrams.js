// https://leetcode.com/problems/group-anagrams

/**
 * Solution #1 Using Hashmap
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()

    for (let str of strs) {
        // sort each string to create key of hashmap
        let sorted = str.split('').sort().join('')
        // grouping
        if (map.has(sorted)) {
            map.set(sorted, [...map.get(sorted), str])
        } else {
            map.set(sorted, [str])
        }
    }
  
    return Array.from(map.values())
};

/**
 * Solution #2 Using Object
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = {}

    for (let s of strs) {
        // sort each string to create a key of object
        let key = s.split('').sort().join('')
        if (!result[key]) {
            result[key] = []
        }
        // group the string if it has its anagrams
        result[key].push(s)
    }

    return Object.values(result)
};
