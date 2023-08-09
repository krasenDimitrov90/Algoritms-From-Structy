// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

function score(dice) {
    let three = { 1: 1000, 6: 600, 5: 500, 4: 400, 3: 300, 2: 200, };
    let one = { 1: 100, 5: 50, 2: 0, 3: 0, 4: 0, 6: 0 };
    let combinations = dice.reduce((a, c) => {
        a[c] = a[c] + 1 || 1;
        return a;
    }, {})

    let score = Object.entries(combinations).reduce((a, [num, times]) => {
        let currnet = times > 2 ? three[num] + ((times - 3) * one[num]) : times * one[num];
        return a + currnet;
    }, 0);
    return score;
}

console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([4, 4, 4, 3, 3])); // 400
console.log(score([2, 4, 4, 5, 4])); // 450