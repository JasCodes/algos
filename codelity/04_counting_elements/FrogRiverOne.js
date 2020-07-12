function solution(X, A) {
    let steps = X
    const arr = A
    const hash = []
    for ([i, el] of arr.entries()) {
        el
        if (!hash[el]) {
            hash[el] = true
            steps--
        }
        steps
        if (steps == 0) return i
    }
    return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]))

// O(n**2)
// function solution(dist, arr) {
//     const count = Array(dist).fill(false)
//     for ([i, el] of arr.entries()) {
//         count[el - 1] = true;
//         // count
//         let step = true;

//         for (el of count) {
//             if (!el) {
//                 step = false
//                 break
//             }
//         }
//         // const step = count.reduce((prev, curr) => prev && curr)
//         if (step) return i;
//         // console.log(el)
//     }
//     return -1;
// }
// console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
