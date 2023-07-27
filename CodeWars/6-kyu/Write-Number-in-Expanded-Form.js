function expandedForm(num) {
    let multiplyer = 10 ** (num.toString().length - 1);
    return num
        .toString()
        .split('')
        .map(x => {
            x = Number(x) * multiplyer;
            multiplyer /= 10;
            return x;
        })
        .filter(x => x !== 0)
        .join(' + ')
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));