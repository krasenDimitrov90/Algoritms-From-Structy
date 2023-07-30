function subtract(a, b) {
    return (BigInt(a) - BigInt(b)).toString().split('').filter(x => x!== 'n').join('');
}



console.log((subtract("2", "3"))); // "-1");
console.log((subtract("30", "69"))); // "-39");
console.log((subtract("6", "2"))); // "4");
console.log((subtract("85", "11"))); // "74");

console.log(subtract("2" ,"0")); // "2");
console.log(subtract("0", "30")); // "-30");
console.log(subtract("0000001", "3")); // "-2");
console.log(subtract("1009", "03")); // "1006");
console.log(subtract("234", "242")); // "-8");
console.log(subtract("294", "334")); // "-40");

console.log(subtract("98765", "56894")); // "41871");
console.log(subtract("1020303004875647366210", "2774537626200857473632627613")); // "-2774536605897852597985261403");
console.log(subtract("58608473622772837728372827", "7586374672263726736374")); // "58600887248100574001636453");
console.log(subtract("9007199254740991", "9007199254740991")); // "0");