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

// Given a number N return the index value of the Fibonnaci sequence. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.

function fibonnaciIterative(n: number): number {
  // let's set an array and hardcode the first two values
  // we can't compute them as they don't have n-2 and n-1 values.
  const result = [0, 1];

  // we want to start our loop from the third value in our array
  // as the two previous one are already computed
  for (let i = 2; i <= n; i++) {
    const a = result[n - 1];
    const b = result[n - 2];

    // lets add to our array the next fibonnaci number
    result.push(a + b);
  }

  return result[n];
}

// Linear Time Complexity O(n), we are looping n times.

function fibonnaciRecursive(n: number): number {
  if (n < 2) {
    return n;
  }

  return fibonnaciRecursive(n - 1) + fibonnaciRecursive(n - 2);
}

// Exponential Time Complexity O(2^n),

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str: string): string | undefined {
  if (str === '') {
    return '';
  } else {
    console.log(reverseString(str.substr(1)))
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'
