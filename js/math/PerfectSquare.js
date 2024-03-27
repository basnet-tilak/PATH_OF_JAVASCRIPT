
function perfectSquare(lower, upper) {
  const result = [];
  for (let i = lower; i <= upper; i++) {
    const sqrt = Math.sqrt(i);
    if (sqrt === Math.floor(sqrt)) {
      result.push(i);
    }
  }
  return result;
}
console.log(perfectSquares(1, 64));
