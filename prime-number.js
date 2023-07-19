const isPrime = (n) => {
    if (n === 2) return true;
    if (n === 1) return false;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0 && n != i) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(5));
console.log(isPrime(4));