class Squares {
  size: number;

  constructor(size: number) {
    this.size = size;
  }

  generateNumArr(): number[] {
    const numArr = [];
    for (let index = 1; index <= this.size; index++) {
      numArr.push(index);
    }
    return numArr;
  }

  calcSquareOfSum(numArr: number[]): number {
    let sam = 0;
    numArr.forEach((num) => {
      sam += num;
    });
    return sam * sam;
  }

  calcSumOfSquares(numArr: number[]): number {
    let sam = 0;
    numArr.forEach((num) => {
      sam += num ** 2;
    });
    return sam;
  }

  get squareOfSum(): number {
    const numArr = this.generateNumArr();
    return this.calcSquareOfSum(numArr);
  }

  get sumOfSquares(): number {
    const numArr = this.generateNumArr();
    return this.calcSumOfSquares(numArr);
  }

  get difference(): number {
    const numArr = this.generateNumArr();
    return this.calcSquareOfSum(numArr) - this.calcSumOfSquares(numArr);
  }
}

export default Squares;
