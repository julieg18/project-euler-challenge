function multiplesOf3And5(num) {
  const multiples = [];
  for (let i = 1; i < num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((num1, num2) => num1 + num2);
}

function fiboEvenSum(n) {
  const sequence = [1, 2];
  while (sequence[sequence.length - 1] < n) {
    const firstNum = sequence[sequence.length - 2];
    const secondNum = sequence[sequence.length - 1];
    sequence.push(firstNum + secondNum);
  }
  return sequence
    .filter((num) => num % 2 === 0)
    .reduce((num1, num2) => num1 + num2);
}
