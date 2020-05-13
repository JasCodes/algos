var maxNumberOfFamilies = function (n, reservedSeats) {
    const rows = {}
    for (let [row, col] of reservedSeats) {
        if (col < 2 || col > 9) continue;
        if (col < 4) {
            rows[row] = rows[row] | 1;
        } else if (col < 6) {
            rows[row] = rows[row] | 3;
        } else if (col < 8) {
            rows[row] = rows[row] | 6;
        } else {
            rows[row] = rows[row] | 4;
        }
    }

    let count = 0;
    const values = Object.values(rows);

    for (let value of values) {
        if (value !== 7) count++;
    }
    return count + ((n - values.length) * 2);
};

console.log(maxNumberOfFamilies(2, '1A 2F 1C'))