const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((x) => this.multiplyBy * x);
  }
};

console.log(multiplier.multiply());
