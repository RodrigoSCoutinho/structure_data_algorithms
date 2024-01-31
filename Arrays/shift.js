let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return reIndex(this);
};

numbers = numbers.removeFirstPosition();

//OU 

numbers.shift();

console.log(numbers.length); // 8
console.log(numbers); // [2, 3, 4, 5, 6, 7, 8, 9]