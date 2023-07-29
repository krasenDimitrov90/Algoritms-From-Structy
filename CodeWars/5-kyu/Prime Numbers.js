function isPrime(num) {
    // ...
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function getPrimes(start, finish) {
    // ...
    let s = Math.min(start, finish);
    let e = Math.max(start, finish);
    let arr = [];
    for (let i = s; i <= e; i++) {
        if (isPrime(i)) arr.push(i);
    }
    return arr;
}

console.log(getPrimes(0, 30))