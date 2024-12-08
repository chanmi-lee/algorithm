// https://leetcode.com/problems/successful-pairs-of-spells-and-potions

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let result = []
    potions.sort((a, b) => a - b)
    for (let i = 0; i < spells.length; i++) {
        let cnt = 0
        let left = 0
        let right = potions.length - 1
        while (left <= right) {
            const mid = Math.floor((left+right)/2)
            if (spells[i] * potions[mid] >= success) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        cnt = potions.length - left
        result.push(cnt)
    }
    return result;
};
