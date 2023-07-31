function numberToPrice(n) {
    if (!(typeof n === 'number') || n === 0) return 'NaN';
    let [x, y] = n.toString().split('.');

    y = !y ? '00' : y.slice(0, 2).padEnd(2, '0');
    let num = Number([x, y].join('.'));
    return [Number(x).toLocaleString(), y].join('.')
}


console.log((numberToPrice(1500.129))); //   '1,500.12');
console.log((numberToPrice(-5))); //         '-5.00');
console.log((numberToPrice(1000000.5))); //  '1,000,000.50');
console.log((numberToPrice('@'))); //        'NaN');
console.log((numberToPrice('invalid'))); //        'NaN');