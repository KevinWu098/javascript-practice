/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    // maxNum = 0; maxCount = 0;
    // for(i = 0; i < numbers.length; i++){
    //     count = 0;
    //     for(j = 0; j < numbers.length; j++){
    //         if (numbers[i] == numbers[j]){
    //             count++
    //         }
    //     }
    //     if(count>maxCount){maxCount = count; maxNum = i}
    // }

    // return numbers[maxNum]

    //robbed off chatGPT
    const sortNum = new Map()
    numbers.map((item) => {
        sortNum.set(item, (sortNum.get(item) || 0)+1)
    })
    return [...sortNum.keys()].reduce((a,b) => sortNum.get(a) > sortNum.get(b) ? a :b)
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};