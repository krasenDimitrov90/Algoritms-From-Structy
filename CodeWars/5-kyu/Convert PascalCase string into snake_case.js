function toUnderscore(string) {
    return string
        .toString()
        .split('')
        .map((ch, i) => {
            if (/[0-9]/.test(ch)) return ch;
            return ch.toUpperCase() === ch && i > 0 ? `_${ch.toLowerCase()}` : ch.toLowerCase();
        })
        .join('')
}

console.log(toUnderscore('TestController'))
console.log(toUnderscore('MoviesAndBooks'))
console.log(toUnderscore('App7Test'))
console.log(toUnderscore('Am7Days'))
console.log(toUnderscore('1'))