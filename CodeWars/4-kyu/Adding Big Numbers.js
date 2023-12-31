function add(a, b) {
    let maxLength = Math.max(a.length, b.length);
    let x = a.padStart(maxLength, '0');
    let y = b.padStart(maxLength, '0');

    let result = [];
    let inMind = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = inMind + Number(x[i]) + Number(y[i]);
        inMind = 0;
        if (sum > 9) {
            inMind = 1;
            sum = sum.toString()[1];
        }
        result.unshift(sum);
    }
    if (inMind > 0) result.unshift(1);

    return result.join('');
}

// This is From Internet
// function add(a, b) {
//     var res = '', c = 0
//     a = a.split('')
//     b = b.split('')
//     while (a.length || b.length || c) {
//         c += ~~a.pop() + ~~b.pop()
//         res = c % 10 + res
//         c = c > 9
//     }
//     return res
// }

console.log(add("99", "9999")); // -> "10098"
console.log(add("123", "321")); // -> "444"
console.log(add("11", "99")); //   -> "110"
console.log(add("12", "123")); //   -> "135"
console.log(add('63829983432984289347293874', '90938498237058927340892374089')); // -> "91002328220491911630239667963"