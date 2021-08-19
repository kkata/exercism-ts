class Squares {
  constructor(private size: number) {}

  calcSquareOfSum(num: number) {
    return ((num * (num + 1)) / 2) ** 2;
  }

  calcSumOfSquares(num: number) {
    return (num * (num + 1) * (2 * num + 1)) / 6;
  }

  get squareOfSum(): number {
    return this.calcSquareOfSum(this.size);
  }

  get sumOfSquares(): number {
    return this.calcSumOfSquares(this.size);
  }

  get difference(): number {
    return this.calcSquareOfSum(this.size) - this.calcSumOfSquares(this.size);
  }
}

export default Squares;
