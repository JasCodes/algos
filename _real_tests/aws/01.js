function solution(A) {
    let map = {}
    let matches = 0

    for (e of A) {
        map[e] = map[e] + 1 || 1
    }
    for (m of Object.values(map)) {
        matches += m * (m - 1) / 2
    }
    return matches
}

let a = solution([1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1])
// a
// function solution(A) {
//     let map = {}
//     let matches = 0

//     for (e of A) {
//         map[e] = map[e] + 1 || 1
//     }
//     for (m of Object.values(map)) {
//         matches += m * (m - 1) / 2
//     }
//     return matches
// }

// let a = solution([1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1])
// a