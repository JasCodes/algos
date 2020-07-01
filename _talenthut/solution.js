/*
For random string s=‘zxzzzay’ and consecutive numbers as k=2 should return zzyzzxa. 
Other example s=axxyyw & k=1 -> xyxywa
*/

function getSortedKeys(obj) {
    var keys = keys = Object.keys(obj);
    return keys.sort(function (a, b) { return obj[b] - obj[a] });
}
function isMaxConsective(result, consectiveNumbersAllowed, currentHashmapKey) {
    let lastK = result.slice(-consectiveNumbersAllowed)
    if (lastK.length === consectiveNumbersAllowed) {
        return lastK.split("").every(v => v === currentHashmapKey)
    }
    return false
}

function solution(s, k) {
    const inputString = s
    const consectiveNumbersAllowed = k
    // Check edge case of empty string
    if (inputString === "") {
        return 'Empty String'
    }

    // Scan characters from inputString 's' into hashmap
    let hashmap = {}
    for (let char of inputString) {
        hashmap[char] = hashmap[char] + 1 || 1
    }

    // Calculate Result
    let result = ''

    // Iterate until hashmap becomes empty
    while (Object.keys(hashmap).length != 0) {
        // Fuction getSorted returns keys based on largest value to smallest
        const sortedKeys = getSortedKeys(hashmap)
        let currentHashmapKey = sortedKeys[0]
        if (isMaxConsective(result, consectiveNumbersAllowed, currentHashmapKey)) {
            // if we have only one key left in hashmap and max consective is reached;
            // that means no solution is possible
            if (sortedKeys.length === 1) {
                return "No solution"
            }
            // else we be pick the second largest value from the sorted keys
            currentHashmapKey = sortedKeys[1]
        }
        result += currentHashmapKey;
        // If value of hashmap key currentHashmapKey is one then
        // we remove the last char from hashmap and append to result.
        // Else we decrement value by one and append value to result. 
        hashmap[currentHashmapKey] === 1 ?
            delete hashmap[currentHashmapKey] :
            hashmap[currentHashmapKey]--

        // Debug output
        // console.log(result, hashmap)
    }
    return result
}

console.log(solution('zxzzzay', 2))
console.log(solution('axxyyw', 1))
console.log(solution('', 1))
console.log(solution('abbcccccccc', 2))
console.log(solution(`${'a'.repeat(80)}${'b'.repeat(10)}${'c'.repeat(10)}`, 4))
