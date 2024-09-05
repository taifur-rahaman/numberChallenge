const operators = document.querySelectorAll(".operator_element");
const result = document.getElementById("simpleCalc");

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    if (operator.innerHTML === "+") {
      result.innerHTML = add(Number(x), Number(y));
    }
    if (operator.innerHTML === "-") {
      result.innerHTML = subtract(Number(x), Number(y));
    }
    if (operator.innerHTML === "*") {
      result.innerHTML = multiply(Number(x), Number(y));
    }
    if (operator.innerHTML === "/") {
      result.innerHTML = divide(Number(x), Number(y));
    }
    if (operator.innerHTML === "%") {
      result.innerHTML = mod(Number(x), Number(y));
    }
  });
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Error: Division by zero is not allowed!";
  }
  let z = x / y;
  return z.toPrecision(4);
}

function mod(x, y) {
  return x % y;
}
