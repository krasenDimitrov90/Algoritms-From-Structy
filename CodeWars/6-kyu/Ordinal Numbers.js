function ordinal(n, brief) {
    let suffix = { 1: 'st', 2: 'nd', 3: 'rd', '11': 'th' ,'12': 'th', '13': 'th' };
    let suffix2 = { 1: 'st', 2: 'd', 3: 'd', '11': 'th' ,'12': 'th', '13': 'th' };
    let last2Digets = n.toString().slice(-2);
    if (!brief) return (suffix[last2Digets] || suffix[last2Digets[1]] ||'th');
    return (suffix2[last2Digets] || suffix2[last2Digets[1]] || 'th');
}

console.log(ordinal(1)) // "st");
console.log(ordinal(11)) // "th");
console.log(ordinal(111)) // "th");
console.log(ordinal(121)) // "st");
console.log(ordinal(20)) // "th");
console.log(ordinal(52)) // "nd");
console.log(ordinal(903, true)) // "d");