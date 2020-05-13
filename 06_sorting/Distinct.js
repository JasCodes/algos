function solution(A) {
    let set = {}
    for (el of A) {
        if (!set[el]) {
            set[el] = true
        }
    }
    return Object.keys(set).length
}

console.log(solution([-1, -1011, -100, -100, -1000000000]));


// function solution(A) {
//     let hash = []
//     // o(N)
//     for (el of A) {
//         if (!hash[el]) {
//             hash[el] = true
//         }
//     }
//     let count = 0

//     for (el of hash) {
//         if (el) count++
//     }
//     return count
// }