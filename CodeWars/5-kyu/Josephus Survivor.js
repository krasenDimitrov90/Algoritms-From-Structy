// This is from internet

function josephusSurvivor(n, k) {
    let i = 1, ans = 0;
    while (i <= n) {

        ans = (ans + k) % i;
        i++;
    }
    return ans + 1;
}


console.log(josephusSurvivor(7,3)); // 4)
console.log(josephusSurvivor(11,19)); // 10)
console.log(josephusSurvivor(1,300)); // 1)
console.log(josephusSurvivor(14,2)); // 13)
console.log(josephusSurvivor(100,1)); // 100)