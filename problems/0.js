/**
 * Problem 0: If statements
 * 
 * Given a percentage, return the letter grade for that percentage. 
 * (Don't worry about +/-).
 * 
 * A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
 * 
 * @example 92 -> "A", 75 -> "B"
*/
function problem(percentage) {
    switch(true){
        case percentage < 60: 
            return 'F'
            break
        case percentage < 70:
            return 'D'
            break
        case percentage < 80:
            return 'C'
            break
        case percentage < 90:
            return 'B'
            break
        case percentage <= 100:
            return 'A'
            break
        default:
            return 'Fail'
            break
    }
}

const tests= [
    [100, "A"],
    [92, "A"],
    [90, "A"],
    [85, "B"],
    [70, "C"],
    [69, "D"],
    [0, "F"]
]

module.exports = {problem, tests};