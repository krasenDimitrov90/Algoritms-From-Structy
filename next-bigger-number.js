

// This Solution is from internet
function maxWithDigits(n) {
    return parseInt(n.toString().split("").sort(function (a, b) { return b - a; }).join(""));
}
function nextBigger(n) {
    let mx = maxWithDigits(n)
    for (i = n + 1; i <= mx; i++)
        if (maxWithDigits(i) === mx)
            return i;
    return -1;
}
console.log(nextBigger(2017))
