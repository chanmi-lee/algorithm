// https://leetcode.com/problems/simplify-path

/**
 * @param {string} path
 * @return {string}
 * convert a given absolute path to a simplified canonical path
 */
var simplifyPath = function(path) {
    const stack = []
    const directories = path.split('/')
    for (const dir of directories) {
        if (dir === '.' || !dir) {
            // ignore the current dirctory '.' and empty dirctories
            continue
        } else if (dir === '..') {
            // one level up if the stack is not empty
            if (stack.length > 0) {
                stack.pop()
            }
        } else {
            // for any other directory, push it to the stack
            stack.push(dir)
        }
    }
    // join the directories in the stack with slash and add a slash at the beginning
    return '/' + stack.join('/')
};
