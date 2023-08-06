function checkValidTrNumber(n) {
    let nAsStr = n.toString();
    if (nAsStr.length !== 11 || isNaN(n) || nAsStr[0] === '0') return false;

    let oddSum = 0;
    let evenSum = 0;
    nAsStr.slice(0, 9).split('').map((x, i) => {
        if ((i + 1) % 2 !== 0)  oddSum += Number(x);
        else evenSum += Number(x);
    })

    let result = ((oddSum * 7) - evenSum) % 10;
    if (result !== Number(nAsStr[nAsStr.length - 2])) return false;
    let tenDigetsSum = nAsStr.slice(0, 10).split('').reduce((a, x) => a += Number(x), 0);
    if (tenDigetsSum % 10 !== Number(nAsStr[nAsStr.length - 1])) return false;
    return true;
}

console.log(checkValidTrNumber(10167994524))
console.log(checkValidTrNumber(10000000146))
console.log(checkValidTrNumber('03868894286'))