function compare(a,b){
    if (a.startsWith('-') && !b.startsWith('-')) return 'less';
    if (!a.startsWith('-') && b.startsWith('-')) return 'greater';

    if (a.includes('.') || b.includes('.')) {
        let [x1, x2] = a.split('.');
        let [y1, y2] = b.split('.');
        x1 = BigInt(x1);
        y1 = BigInt(y1);

        let result = helperCompare(x1, y1);
        if (result === 'equal') {
            let max = Math.max(x2?.length || 0, y2?.length || 0);
            x2 = BigInt(x2?.padEnd(max, 0) || 0);
            y2 = BigInt(y2?.padEnd(max, 0) || 0);
            return helperCompare(x2, y2);
        }
        return result;
    } 

    function helperCompare(n1, n2) {
        if (n1 === n2) return 'equal'
        if (n1 > n2) return 'greater';
        if (n1 < n2) return 'less';
    }

    let x = BigInt(a);
    let y = BigInt(b);
    
    return helperCompare(x, y);
}

console.log(compare("2","12")) //,"less")
console.log(compare("2","132")) //,"less")
console.log(compare("12","13")) //,"less")
console.log(compare("875","799")) //,"greater")
console.log(compare("1000","1000")) //,"equal")
console.log(compare("999","1000")) //,"less")
console.log(compare("123","122")) //,"greater")
console.log(compare("1000000000000000000000000000000000","1000000000000000000000000000000001")) //,"less")
console.log(compare("1000000000000000000000000000000002","1000000000000000000000000000000001")) //,"greater")

console.log(compare("012","13")) //,"less")
console.log(compare(".12","-120")) //,"greater")
console.log(compare("000000000000000876","000999")) //,"less")
console.log(compare("1000.00","1000")) //,"equal")
console.log(compare("1000.01","1000.02")) //,"less")
console.log(compare("1000.01","1000.00")) //,"greater")
console.log(compare("999","-00000000000001000.00")) //,"greater")