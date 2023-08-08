function rgb(r, g, b) {
    return [r, g, b]
        .map(x => x < 0 ? 0 : x > 255 ? 255 : x)
        .map(v => v.toString(16) === '0' ? '00' : v.toString(16))
        .join('').toUpperCase();
}

console.log(rgb(197, 87, 87)); // '000000')
console.log(rgb(0, 0, 20)); // '000000')
console.log(rgb(0, 0, -20)); // '000000')
console.log(rgb(300,255,255)); // 'FFFFFF')
console.log(rgb(173,255,47)); // 'ADFF2F')