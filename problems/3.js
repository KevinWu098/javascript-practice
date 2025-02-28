/**
 * Problem 3: Filtering
 * 
 * Given an array of numbers, only return the ones that are divisible by 3.
 * Use the .filter function.
 * 
 * @example [1, 2, 3, 4, 5, 6, 7, 8, 9] -> [3, 6, 9]
 */
function problem(numbers) {
    const filtThree = numbers.filter(function(item){
        return item % 3 === 0
    })
    return filtThree
}

const tests = [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 6, 9]],
    [[3], [3]],
    [[], []],
]

module.exports = {problem, tests};