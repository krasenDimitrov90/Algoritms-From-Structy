function generateHashtag(str) {
    if (str === '' || str.trim().length === 0) return false;
    let newStr = str.trim().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join('');
    return newStr.length > 139 ? false : '#' + newStr;
}

console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag("a".repeat(141)));

console.log(generateHashtag("code                                                                                                                                            wars"));