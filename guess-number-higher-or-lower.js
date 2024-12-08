// https://leetcode.com/problems/guess-number-higher-or-lower

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return
 * -1 if num is higher than the picked number
 *  1 if num is lower than the picked number
 *  otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1
    let end = n
    while (start <= end) {
        let pick = Math.floor((start+end)/2)
        let res = guess(pick)
        if (res === 0) {
            return pick;
        } else if (res === 1) {
            start = pick+1
        } else {
            end = pick-1
        }
    }
};
