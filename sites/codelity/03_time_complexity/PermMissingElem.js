function solution(arr) {
    let m = []

    for (el of arr) {
        m[el] = true
    }

    for (var i = 0; i < m.length; i++) {
        if (!m[i + 1])
            return i + 1;
    }
    return 1;
}

console.log(solution([]));
console.log(solution([1, 3, 4,]));
let AA = [...Array(100000).keys()]
console.log(solution(AA.filter(el => el != 99999)))
