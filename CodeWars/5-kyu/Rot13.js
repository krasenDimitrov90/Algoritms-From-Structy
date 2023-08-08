function rot13(message) {
    String.prototype.isUpperCase = function () {
        return this.valueOf().toUpperCase() === this.valueOf();
    }

    let arr = [];
    for (let char of message) {
        if (/[A-Za-z]/.test(char)) {
            let num;
            let newChar;
            if (char.isUpperCase()) {
                num = char.charCodeAt(0) + 13 > 90
                    ? 64 + (char.charCodeAt(0) + 13 - 90)
                    : char.charCodeAt(0) + 13;
            } else {
                num = char.charCodeAt(0) + 13 > 122
                ? 96 + (char.charCodeAt(0) + 13 - 122)
                : char.charCodeAt(0) + 13;
            }
            newChar = String.fromCharCode(num);
            arr.push(newChar);
        }
        else arr.push(char);
    }

    return arr.join('')
}

console.log(rot13('test')); // 'grfg'
console.log(rot13('9 pjbmPl,')); // '9 cwozCy,'