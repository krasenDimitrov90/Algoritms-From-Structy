// Write a function, maxPalinSubsequence, that takes in a string as an argument. 
// The function should return the length of the longest subsequence of the string that is also
//  a palindrome.

// A subsequence of a string can be created by deleting any characters of the string, 
// while maintaining the relative order of characters.

const maxPalinSubsequence = (str, start = 0, end = str.length - 1, memo = {}) => {
    let range = start + ',' + end;
    if (range in memo) return memo[range];

    if (start === end) return 1;
    if (start > end) return 0;

    let maxPalinLength = 0;

    if (str[start] === str[end]) {
        maxPalinLength = 2 + maxPalinSubsequence(str, start + 1, end - 1, memo);
    } else {
        maxPalinLength = Math.max(
            maxPalinSubsequence(str, start, end - 1, memo),
            maxPalinSubsequence(str, start + 1, end, memo)
        );
    }

    memo[range] = maxPalinLength;
    return maxPalinLength;
};


console.log(maxPalinSubsequence('luwxult')); // 5
console.log(maxPalinSubsequence('xyzaxxzy')); // 6
console.log(maxPalinSubsequence('lol')); // 3
console.log(maxPalinSubsequence('boabcdefop')); // 3
console.log(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe")); // -> 31
