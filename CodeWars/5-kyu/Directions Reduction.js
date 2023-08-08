function dirReduc(arr) {
    let directions = [arr.shift()];
    let current = arr.shift();
    let oposite = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST",
    };

    while (current) {
        if (current === oposite[directions[directions.length - 1]]) directions.pop();
        else directions.push(current);
        current = arr.shift();
    }
    return directions;
}

// Going to one direction and coming back the opposite direction right away is a needless effort.
// So from North to South and vise versa, and From East to West and vise versa there is no point
// to going.

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []