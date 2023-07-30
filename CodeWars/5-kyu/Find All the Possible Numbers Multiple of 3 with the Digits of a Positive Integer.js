// From Internet
function findMult_3(num) {
    let s = new Set();
    (function f(r, v) {
        if (v && v != 0 && +v % 3 === 0) s.add(+v)
        for (var i = 0; i < r.length; i++) {
            f(r.slice(0, i) + r.slice(i + 1), v + r[i])
        }
    })(num.toString(), '');
    console.log(s)
    return [s.size, Math.max(...s)]
}

console.log(findMult_3(362)); // == [4, 63]
// console.log(findMult_3(6630)); // ==  == [25, 6630]
