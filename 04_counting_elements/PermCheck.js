function solution(A) {
    const arrLen = A.length;
    let hash = []
    for (el of A) {
        hash[el - 1] == undefined ? hash[el - 1] = 1 : hash[el - 1]++
    }
    for (let i = 0; i < arrLen; i++) {
        // console.log(hash[i])
        if (!hash[i]) return 0;
    }
    // console.log(hash)
    return 1;
}
