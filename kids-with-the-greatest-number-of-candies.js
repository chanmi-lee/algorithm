// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    let max = Math.max(...candies)
    for (const candy of candies) {
        result.push(max <= candy + extraCandies)
    }
    return result
};
