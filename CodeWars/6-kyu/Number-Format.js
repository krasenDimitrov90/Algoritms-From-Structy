function numberFormat(n) {
    let str = Math.abs(n).toString().split('').reverse();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 3 === 0 && i !== 0) arr.push(',');
        arr.push(str[i]);
    }
    return n / Math.abs(n) === -1 ? '-' + arr.reverse().join('') : arr.reverse().join('');
}

console.log(numberFormat(-420902 ));