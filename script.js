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
function checkPlaceValue(num) {}

function getRomanValue(obj, value) {
  let objectKeys = Object.keys(obj);

  let key = objectKeys.find((key) => {
    return obj[key] === value;
  });
  return key;
}

convertBtn.addEventListener("click", () => {
  output.textContent = "";

  let inputNumber = Number(input.value);
  let numOfDigits = checkNumberOfDigits(inputNumber);

  if (numOfDigits === 1) {
    if (getRomanValue(romanToArebicObj, inputNumber)) {
      output.textContent = getRomanValue(romanToArebicObj, inputNumber);
    } else {
      printRomanValuesForSingleDigitNumber(inputNumber, output);
    }
  } else if (numOfDigits === 2) {
    if (getRomanValue(romanToArebicObj, inputNumber)) {
      output.textContent = getRomanValue(romanToArebicObj, inputNumber);
    } else {
      let numberAtOncePlace = inputNumber % 10;
      console.log(numberAtOncePlace);
      output.textContent = getRomanValue(
        romanToArebicObj,
        inputNumber - numberAtOncePlace
      );

      printRomanValuesForSingleDigitNumber(numberAtOncePlace, output);
    }
  }
});

function printRomanValuesForSingleDigitNumber(number, HTMLElement) {
  console.log(HTMLElement);
  if (number <= 3) {
    let count = 1;
    while (count <= number) {
      HTMLElement.textContent =
        HTMLElement.textContent + getRomanValue(romanToArebicObj, 1);
      count++;
    }
  } else if (number >= 6 && number <= 8) {
    let count = 6;
    let tempNum5 = getRomanValue(romanToArebicObj, 5);
    while (count <= number) {
      HTMLElement.textContent =
        HTMLElement.textContent + tempNum5 + getRomanValue(romanToArebicObj, 1);
      count++;
      tempNum5 = "";
    }
  }
}
