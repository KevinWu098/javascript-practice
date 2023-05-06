/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    // const cleanedString = str.replace(/\s+/g, "").toLowerCase()
    // x = cleanedString.length-1; y = 0
    // while(x > cleanedString.length/2){
    //     if(!(cleanedString.charAt(y) == cleanedString.charAt(x)))
    //         return false;
    //     x--
    //     y++
    // }
    // return true

    const cleanedString = str.toLowerCase().replace(/\s+/g, "").split('')
    const xx = cleanedString.map((char, i) =>
        char === cleanedString[cleanedString.length - 1 - i])
    return xx.every(Boolean)
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};