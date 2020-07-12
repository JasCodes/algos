const maxNumberOfFamilies = function (n, reservedSeats) {
    const map = {}
    for (const [row, seat] of reservedSeats) {
        map[row] = map[row] || [true, true, true]
        if (seat === 2 || seat === 3) {
            map[row][0] = false
        }
        if (seat === 4 || seat === 5) {
            map[row][0] = false
            map[row][1] = false
        }
        if (seat === 6 || seat === 7) {
            map[row][2] = false
            map[row][1] = false
        }
        if (seat === 8 || seat === 9) {
            map[row][2] = false
        }
    }
    let result = 0
    const rows = Object.keys(map)
    rows.forEach((i) => {
        if (!map[i] || (map[i][0] && map[i][1] && map[i][2])) {
            result += 2
        } else if (!map[i][0] && !map[i][1] && !map[i][2]) {
            result += 0
        } else {
            result += 1
        }
    })
    return result + (n - rows.length) * 2
}

console.log(maxNumberOfFamilies(2, '1A 2F 1C'))