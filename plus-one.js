// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = []
    let overflow = false
    let add = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + add > 9) {
            result.push(0)
            overflow = true
        } else {
            result.push(digits[i] + add > 9 ? digits[i] : digits[i] + add)
            add = 0
            overflow = false
        }
    }
    if (overflow) {
        result.push(digits[0] + add > 9 ? 1 : digits[0] + add)
    }
    return result.reverse()
};


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
        if (i === 0) {
            digits.unshift(1)
            return digits
        }
    }
};
