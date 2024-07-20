const display = document.querySelector(".display");
const numbers = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let ans = "";

const calculate = (inputval) => {
  // display.focus();
  if (inputval === "=" && ans !== "") {
    ans = eval(ans.replace("%", "/100"));
  } else if (inputval === "AC") {
    ans = "";
  } else if (inputval === "DEL") {
    ans = ans.toString().slice(0, -1);
  } else {
    if (ans === "" && specialChars.includes(inputval)) return;
    ans += inputval;
  }
  display.value = ans;
};

numbers.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});