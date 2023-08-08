function pigIt(str) {
    let words = str.split(' ');
    for (let i = 0, l = words.length; i < l; i++) {
        if (/\p{P}/u.test(words[i])) continue;
        let current = words[i]
        words[i] = current.slice(1) + current[0] + 'ay';
    }
    return words.join(' ');
}

console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('Hello world !')) // elloHay orldway !
console.log(pigIt('This is my string')) // 'hisTay siay ymay tringsay')