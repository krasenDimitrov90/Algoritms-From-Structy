function solution(str, comments) {
    return str.split('\n')
        .map(s => {
            let idx = Infinity;
            comments.forEach(com => {
                let index = s.indexOf(com);
                if (index > -1) idx = Math.min(idx, index);
            });
            if (idx !== Infinity) {
                return s.slice(0, idx).trim();
            }
            return s;
        })
        .join('\n');
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])) // "apples, pears\ngrapes\nbananas"