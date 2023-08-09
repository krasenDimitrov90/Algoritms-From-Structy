function scramble(str1, str2) {
    if (str1.length < str2.length) return false;
    let str1Chars = {};
    let str2Chars = {};

    for (let i = 0, l = str1.length, l2 = str2.length; i< l; i++) {
        str1Chars[str1[i]] = str1Chars[str1[i]] + 1 || 1;
        if (i < l2) str2Chars[str2[i]] = str2Chars[str2[i]] + 1 || 1;
    }
    for (const [ch, val] of Object.entries(str2Chars)) {
        if (val > str1Chars[ch] || !(ch in str1Chars)) return false;
    }
    return true;
}


console.log(scramble('rkqodlw', 'world')); // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // ==> True
console.log(scramble('katas', 'steak')); // ==> False