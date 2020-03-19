"use strict";
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop.
function findFactorialRecursive(number) {
    if (number > 0) {
        return findFactorialRecursive(number) * findFactorialRecursive(number - 1);
    }
}
function findFactorialIterative(number) {
    var answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (var i = 2; i <= number; i++) {
        answer *= i;
    }
    return answer;
}
console.log(findFactorialIterative(5));
