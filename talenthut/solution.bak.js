/*
For random string s=‘zxzzzay’ and consecutive numbers as k=2 should return zzyzzxa. 
Other example s=axxyyw & k=1 -> xyxywa
*/

const allEqual = (arr, cmp) => arr.every(v => v === cmp);
function getSortedKeys(obj) {
    var keys = keys = Object.keys(obj);
    return keys.sort(function (a, b) { return obj[b] - obj[a] });
}
function isMaxConsective(ret, k, indexKey) {
    let lastK = ret.slice(-k)
    if (lastK.length === k) {
        return allEqual(lastK.split(""), indexKey)
    }
    return false
}

function solution(s, k) {

    // Scan svinto hashmap
    let hashmap = {}

    for (let index of s) {
        hashmap[index] = hashmap[index] + 1 || 1
    }

    // Print 
    let ret = ''
    // let index = 0
    let prevKey = ''
    while (Object.keys(hashmap).length != 0) {
        const sortedKeys = getSortedKeys(hashmap)
        let indexKey = sortedKeys[0]
        // console.log(getSortedKeys(hashmap))
        // const indexKey = getSortedKeys(hashmap)[index]
        // let indexKey = getSortedKeys(hashmap)[0]
        // let indexKey;
        // console.log(indexKey, prevKey);

        // if (indexKey === prevKey)
        if (isMaxConsective(ret, k, indexKey)) {
            // if (hashmap[indexKey] >= k) {
            //     console.log(Object.keys(hashmap))
            //     return false;
            // }
            if (sortedKeys.length === 1) {
                //last item 
                return "No solution"

            }
            indexKey = sortedKeys[1]
        }
        // else {
        //     indexKey = getSortedKeys(hashmap)[0]
        // }
        prevKey = indexKey


        const indexValue = hashmap[indexKey]


        // if (Object.keys(hashmap).length < index) {
        //     return false;
        // }
        // console.log(indexValue);

        // if (indexValue < k)
        {
            ret += indexKey;

            hashmap[indexKey] === 1 ?
                delete hashmap[indexKey] :
                hashmap[indexKey]--

            console.log(ret, hashmap)
        }
        // else {
        //     ret += indexKey.repeat(k)
        //     hashmap[indexKey] === k ?
        //         delete hashmap[indexKey] :
        //         hashmap[indexKey] -= k
        //     console.log(ret, hashmap)
        //     // index++;
        // }
        // else {

        //     console.log(indexKey, indexValue, index)
        //     ret += indexKey.repeat(k)
        //     hashmap[indexKey] -= k
        //     index++;
        // }
        // prevKey = indexKey
    }

    // for (index of Object.keys(hashmap)) {
    //     // ret += hashmap[index]
    //     // ret += index
    //     const times = hashmap[index]
    //     if (times <= k) {
    //         ret += index.repeat(times)
    //     }
    //     else {
    //         ret += index.repeat(k)
    //     }
    // }

    return ret

}

// console.log(solution('zxzzzay', 2))
// console.log(solution('axxyyw', 1))
console.log(solution('', 1))
console.log(solution('abccccb', 1))
// ddxxddyyxxaaxxddy
/* aaaaabbbbccc -> aabbaabbccca
k=2
ccbccacc
curr=c


cc

*/
