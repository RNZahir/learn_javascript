//arithmatic operation

function add(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber){
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
  return firstNumber / secondNumber;
}

// console.log(divide(10, 2) * multiply(2, 4) + 3);

function divideThenMultiply(firstNumber, secondNumber){
  return divide(firstNumber, secondNumber) * multiply(firstNumber, secondNumber);
}

// console.log(divideThenMultiply(1, 2));

var strOne = "1";
// strOne = Number(strOne);
strOne = parseInt(strOne);
// var numOne = Number(strOne);
// console.log(typeof strOne);
console.log(add(strOne, 2));
