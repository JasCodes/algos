var maxNumberOfFamilies = function (n, r) {
    let dic = {};
    reservedSeats.forEach(s => {
        let [r, c] = s;
        dic[r] || (dic[r] = new Set());
        dic[r].add(c);
    });

    let res = 0;
    let keys = Object.keys(dic);
    let len = keys.length;

    keys.forEach(row => {
        let taken = dic[row];
        let has = false;
        if (taken.has(2) || taken.has(3) || taken.has(4) || taken.has(5)) {

        } else {
            has = true;
            res++;
        }

        if (taken.has(6) || taken.has(7) || taken.has(8) || taken.has(9)) {

        } else {
            has = true;
            res++;
        }

        if (taken.has(6) || taken.has(7) || taken.has(4) || taken.has(5)) {

        } else {
            if (!has) res++;
        }
    });

    res += (n - len) * 2;

    return res;
};

console.log(maxNumberOfFamilies(2, '1A 2F 1C'))