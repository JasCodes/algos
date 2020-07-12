
function solution(A) {
    hashmap = {}
    for (const num of A) {
        if (hashmap[num]) {
            delete hashmap[num];
        }
        else {
            hashmap[num] = true
        }
    }
    return parseInt(Object.keys(hashmap)[0])
}


console.log(solution([9, 3, 9, 3, 7]));
