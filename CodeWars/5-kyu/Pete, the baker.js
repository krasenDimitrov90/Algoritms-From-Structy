function cakes(recipe, available) {

    let max = Infinity;
    for (const [ingredient, qty] of Object.entries(recipe)) {
        if (!(ingredient in available)) return 0;
        max = Math.min(max, Math.floor(available[ingredient] / qty));
    }
    return max
}

// Return how many recipes you can make with the available ingridients
let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // 2

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available)); // 0