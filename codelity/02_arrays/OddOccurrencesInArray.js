function solution(arr) {
    const hash = []
    for (el of arr) {
        !hash[el] ? hash[el] = 1 : hash[el]++
        console.log(el)
    }
    // console.log(hash)
    for (el of arr) {
        console.log(hash[el])
        if (hash[el] % 2 == 1)
            return el
    }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))