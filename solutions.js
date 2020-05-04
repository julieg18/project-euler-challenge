function multiplesOf3And5(num) {
  const multiples = [];
  for (let i = 1; i < num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((num1, num2) => num1 + num2);
}
