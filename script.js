let romanToArebicObj = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let convertBtn = document.querySelector("#convert-btn");
let input = document.querySelector("#number");
let output = document.querySelector("#output");

function checkNumberOfDigits(num) {
  let count = 0;
  let n = num;
  while (n >= 1) {
    n = n / 10;
    count++;
  }
  return count;
}
function getRomanValue(obj, value) {
  let objectKeys = Object.keys(obj);
  console.log(objectKeys);
  let key = objectKeys.find((key) => {
    return obj[key] === value;
  });
  return key;
}

convertBtn.addEventListener("click", () => {
  let inputNumber = Number(input.value);
  let numOfDigits = checkNumberOfDigits(inputNumber);

  if (getRomanValue(romanToArebicObj, inputNumber)) {
    output.textContent = getRomanValue(romanToArebicObj, inputNumber);
  } else {
    if (numOfDigits === 1) {
      if (inputNumber <= 3) {
        let count = 1;
        while (count <= inputNumber) {
          output.textContent =
            output.textContent + getRomanValue(romanToArebicObj, 1);
          count++;
        }
      }
    }
  }
});
