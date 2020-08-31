function solution(N, A) {
    const counters = N
    const maxCounterOp = N + 1
    const opArr = A
    const sol = Array(N).fill(0) // o(N)
    let maxTrack = 0
    let max = 0

    for (op of opArr) {
        if (op == maxCounterOp) {
            max = maxTrack
        }
        else {
            if (sol[op - 1] < max) {
                sol[op - 1] = max + 1
            }
            else {
                sol[op - 1]++
            }
            maxTrack = Math.max(sol[op - 1], maxTrack)
        }
    }
    for (i in sol) {
        if (sol[i] < max) {
            sol[i] = max
        }
    }
    return sol
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));

// function solution(N, A) {
//     const counters = N
//     const maxCounterOp = N + 1
//     const opArr = A
//     const sol = Array(N).fill(0)
//     let max = 0;
//     for (op of opArr) {
//         if (op == maxCounterOp) {
//             sol.fill(max)
//         }
//         else {
//             sol[op - 1]++
//             max = Math.max(sol[op - 1], max)
//         }
//     }
//     return sol
// }

// console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
