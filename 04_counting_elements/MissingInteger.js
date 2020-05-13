function solution(A) {
    let hash = []
    for (el of A) {
        hash[el] = true
    }
    let i = 0
    while (true) {
        i++
        if (!hash[i])
            return i
    }
}
