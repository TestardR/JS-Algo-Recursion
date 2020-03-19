// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop.

function findFactorialRecursive(number: number): number | undefined {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

// Linear Time Complexity O(n), we are calling the function n times

function findFactorialIterative(number: number): number {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }

  return answer;
}

// Linear Time Complexity O(n), we are looping n times.

