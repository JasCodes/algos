function solution(S) {
    if (S.length === 0)
        return 1
    if (S.length === 1)
        return 0

    pp = {
        '[': ']', '(': ')', '{': '}',
    }
    stack = []
    if (pp[S[0]]) stack.push(S[0])
    else return 0

    for (i = 1; i < S.length; i++) {
        curr = S[i]
        if (pp[curr]) stack.push(curr)
        else {
            if (stack.length === 0)
                return 0
            prev = stack.pop()
            if (pp[prev] != curr)
                return 0
        }

    }
    if (stack.length != 0)
        return 0
    return 1;
}

// a = solution("{{{")
// a