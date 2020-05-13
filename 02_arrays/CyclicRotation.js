function mod(val, div) {
    return ((val % div) + div) % div;
}

function solution(arr, times) {
    let cArr = []
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        const modI = mod((i - times), arr.length);
        cArr[i] = arr[modI];
    }
    return cArr;
}
var x = -2
console.log(x.mod(5));

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([1, 2, 3, 4], 4));