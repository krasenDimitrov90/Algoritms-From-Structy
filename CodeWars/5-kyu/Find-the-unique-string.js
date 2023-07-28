function findUniq(arr) {

    const newArr = [];
    for (let str of arr) {
        let strWithoutRepetiotion = Array.from(new Set(
            str.toLowerCase().split(' ').join('').split('').sort((a, b) => a.localeCompare(b))
        )).join('');
        newArr.push(strWithoutRepetiotion);
    }

    let str1 = newArr[0];
    let str2 = newArr[1];
    let str3 = newArr[2]
    if (str1 !== str2) return str1 === str3 ? arr[1] : arr[0];

    for (let i = 2; i < newArr.length; i++) {
        if (newArr[i] !== str1) return arr[i];
    }
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])) // === 'BbBb'
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])) // === 'foo'