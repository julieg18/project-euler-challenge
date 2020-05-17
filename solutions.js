// problem 1
function multiplesOf3And5(num) {
  const multiples = [];
  for (let i = 1; i < num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((maxNum, num2) => maxNum + num2);
}

// problem 2
function fiboEvenSum(n) {
  const sequence = [1, 2];
  while (sequence[sequence.length - 1] < n) {
    const firstNum = sequence[sequence.length - 2];
    const secondNum = sequence[sequence.length - 1];
    sequence.push(firstNum + secondNum);
  }
  return sequence
    .filter((num) => num % 2 === 0)
    .reduce((maxNum, num2) => maxNum + num2);
}

// problem 3
function largestPrimeFactor(number) {
  let i = 2;
  let num = number;
  while (i <= num) {
    if (num % i === 0) {
      num /= i;
    } else {
      i += 1;
    }
  }
  return i;
}

// problem 4
function largestPalindromeProduct(n) {
  const maxNum = '9'.repeat(n) - '';
  const palindromeProducts = [];
  const isPalindrome = (num) =>
    (num + '').split('').reverse().join('') === (num + '').split('').join('');
  function loopThroughFirstNum(n1, n2) {
    for (let j = n1; j <= n1 && j > 0; j -= 1) {
      const product = j * n2;
      if (isPalindrome(product) && !palindromeProducts.includes(product)) {
        palindromeProducts.push(product);
      }
    }
  }
  for (let i = maxNum; i <= maxNum && i > 0; i -= 1) {
    loopThroughFirstNum(maxNum, i);
  }
  return Math.max(...palindromeProducts);
}

// problem 5
function smallestMult(n) {
  let smallestMultiple = 0;
  const nums = [];
  for (let i = 1; i <= n; i += 1) {
    nums.push(i);
  }

  const isNumberMultiple = (number) => nums.every((num) => number % num === 0);

  for (let i = 2; smallestMultiple === 0; i += 2) {
    if (isNumberMultiple(i)) {
      smallestMultiple = i;
    }
  }
  return smallestMultiple;
}

// problem 6
function sumSquareDifference(num) {
  const nums = [];
  for (let i = 1; i <= num; i += 1) {
    nums.push(i);
  }
  const squareOfSum = nums.reduce((n1, n2) => n1 + n2) ** 2;
  const sumOfSquares = nums.map((n) => n ** 2).reduce((n1, n2) => n1 + n2);

  return squareOfSum - sumOfSquares;
}
