function beeramid(bonus, price) {
    let beerCount = Math.floor(bonus / price);
    if (beerCount < 1) return 0;

    let level = 1, count = 0;

    while (beerCount > 0) {
        beerCount -= level**2;
        level++;
        count++;
    }
    return beerCount >= 0 ? count : count - 1;
}

console.log(beeramid(1500, 2))