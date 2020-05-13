const countPerRow = ({ B, C, D, E, F, G, H, J }) => {
    if (E && F) return 0;
    let count = 0;
    if (!B && !C && !D && !E)
        count++;
    if (!F && !G && !H && !J)
        count++;
    if (count === 0 && !D && !E && !F && !G)
        return 1;
    return count;
}

const solution = (N, S) => {

    const rows = Array(N).fill({})

    S.split(' ').forEach(seat => {
        const row = seat.slice(0, -1);
        const col = seat.slice(-1);
        rows[row - 1] = { ...rows[row - 1], [col]: true }
    })
    console.log(rows)
    return rows.reduce((count, row) => {
        count += countPerRow(row);
        return count;
    }, 0)
}

console.log(solution(3, '1C 1D 2C '))
