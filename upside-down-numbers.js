
function countUpsideDown(l) {
    let count = 1;
    if (l === 1) return 3;
    if (l === 2) return 4;

    let middle = l / 2;
    let isOdd = l % 2 === 1;
    if (isOdd) middle += 0.5;

    for (let i = 1; i <= middle; i++) {
        if (i === 1) count *= 4;
        else if (i === middle && isOdd) count *= 3;
        else count *= 5;
    }

    return count;
}



let count = 0;
let low = '100000', start = low.length; 
let high = '10000000000000000', end = high.length;


for (let i = start; i <= end; i++) {
    count += countUpsideDown(i);
}

let lowest = countInRange(low).filter(x => x < BigInt(low));
let highest = countInRange(high).filter(x => x > BigInt(high));

// let lowest = countInRange('100000').filter(x => x < BigInt('100000'));
// let highest = countInRange('12345678900000000').filter(x => x > BigInt('12345678900000000'));

count -= highest.length - lowest.length;

console.log({ underHighest: highest, aboveLowest: lowest });
console.log(count);

// console.log(countUpsideDown(1))


function countInRange(str,) {
    const validNums = ['0', '1', '8', '6', '9'];

    let strLength = str.length
    let validsLength = validNums.length;
    let middle = strLength / 2;
    let isOdd = strLength % 2 === 1;
    if (isOdd) middle += 0.5;

    let first = Array.from({length: strLength}, (_, i) => 0);
    let second = Array.from({length: strLength}, (_, i) => 0);
    let third = Array.from({length: strLength}, (_, i) => 0);
    let fourth = Array.from({length: strLength}, (_, i) => 0);
    let fiveth = Array.from({length: strLength}, (_, i) => 0);

    let arr = [];

    let valid

    for (let i = 1; i < validsLength; i++) {
        valid = validNums[i];
        secondValid = validNums[i];
        if (valid === '6' || valid === '9') secondValid = valid === '6' ? '9' : '6';

        [first[0], first[strLength - 1]] = [valid, secondValid];
        [second[0], second[strLength - 1]] = [valid, secondValid];
        [third[0], third[strLength - 1]] = [valid, secondValid];
        [fourth[0], fourth[strLength - 1]] = [valid, secondValid];
        [fiveth[0], fiveth[strLength - 1]] = [valid, secondValid];

        for (let j = 1; j < middle; j++) {
            // valid = validNums[i];

            if (i === 0 && valid === '0' && middle > 1) continue;

            [first[j], first[strLength - j - 1]] = ['0', '0'];
            [second[j], second[strLength - j - 1]] = ['1', '1'];
            [third[j], third[strLength - j - 1]] = ['8', '8'];

            arr.push(
                first.join(''),
                second.join(''),
                third.join(''),
            );
            if (isOdd && j === middle - 1) continue;

            [fourth[j], fourth[strLength - j - 1]] = ['6', '9'];
            [fiveth[j], fiveth[strLength - j - 1]] = ['9', '6'];
            arr.push(
                fourth.join(''),
                fiveth.join(''),
            );
        }
    }

    console.log(arr)
    return arr.map(BigInt);
}

// console.log(countInRange('1000'));