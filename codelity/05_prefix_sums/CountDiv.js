
// function mod(val, div) {
//     return ((val % div) + div) % div
// }

function solution(A, B, K) {
    let left
    if (K > A) {
        left = K
    }
    else {
        left = A + (A % K)
    }
    left

    let right = B - (B % K)
    right

    let sol = Math.floor((right - left) / K) + 1
    return A == 0 ? sol + 1 : sol

}

console.log(solution(0, 0, 2));

