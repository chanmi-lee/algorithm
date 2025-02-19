// https://leetcode.com/problems/valid-parentheses

/**
 * Solution #1 Using HashMap and Stack
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (const c of s) {
        if (Object.values(mapping).includes(c)) {
            stack.push(c)
        } else if (mapping.hasOwnProperty(c)) {
            if (!stack.length || mapping[c] !== stack.pop()) {
                return false
            }
        }
    }
    return stack.length === 0
};


/**
 * Solution #2 Using Stack only
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    const isPair = (compare, target) => {
        return (
            compare === '(' && target === ')' ||
            compare === '{' && target === '}' ||
            compare === '[' && target === ']'
        )
    }

    for (const c of s) {
        if (stack.length) {
            const last = stack[stack.length - 1]
            if (isPair(last, c)) {
                stack.pop()
                continue;
            }
        }
        stack.push(c)
    }
    return stack.length === 0
};
