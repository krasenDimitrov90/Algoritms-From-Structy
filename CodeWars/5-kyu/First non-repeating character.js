function firstNonRepeatingLetter(s) {
    let chars = {};
    for (let i = 0, l = s.length; i < l; i++) {
        let char = s[i].toLowerCase();
        chars[char] = chars[char] + 1 || 1;
    }
    for (let i = 0, l = s.length; i < l; i++) {
        if (chars[s[i].toLowerCase()] === 1) return s[i];
    }
    return '';
}

console.log(firstNonRepeatingLetter('stress'));