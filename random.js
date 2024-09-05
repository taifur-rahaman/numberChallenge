const btnGenerator = document.getElementById("btn");
const randomNum = document.getElementById("randomNum");

btnGenerator.addEventListener("click", () => {
  const minValue = document.getElementById("min").value;
  const maxValue = document.getElementById("max").value;
  randomNum.textContent = randomNumber(+minValue, +maxValue);
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
