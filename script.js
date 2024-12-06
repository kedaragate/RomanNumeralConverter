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
function getStdRomanValue(obj, value) {
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
  if (getStdRomanValue(romanToArebicObj, inputNumber)) {
    output.textContent = getStdRomanValue(romanToArebicObj, inputNumber);
  }
  if (numOfDigits === 1) {
    if (inputNumber <= 3) {
      getNonStdRomanValues(
        inputNumber,
        output,
        getStdRomanValue,
        romanToArebicObj,
        1,
        "",
        1,
        inputNumber
      );
    } else if (inputNumber >= 6 && inputNumber <= 8) {
      getNonStdRomanValues(
        inputNumber,
        output,
        getStdRomanValue,
        romanToArebicObj,
        1,
        5,
        6,
        inputNumber
      );
    }
  } else if (numOfDigits === 2) {
    if (getStdRomanValue(romanToArebicObj, inputNumber)) {
      output.textContent = getStdRomanValue(romanToArebicObj, inputNumber);
    } else {
      let numberAtOncePlace = inputNumber % 10;
      let numberAtTensPlace = inputNumber - numberAtOncePlace;
      if (numberAtOncePlace === 0) {
        //developing here
        if (inputNumber <= 30) {
          getNonStdRomanValues(
            inputNumber,
            output,
            getStdRomanValue,
            romanToArebicObj,
            10,
            "",
            1,
            3
          );
        }
      } else {
        output.textContent =
          getStdRomanValue(romanToArebicObj, numberAtTensPlace) +
          getNonStdRomanValues(numberAtOncePlace, output);
      }
    }
  }
});

function getNonStdRomanValues(
  number,
  HTMLElement,
  getStdRomanValue,
  romanToArebicObj,
  numberTobeRepeated,
  fixedNumber,
  countToStartAt,
  countEndAt
) {
  if (getStdRomanValue(romanToArebicObj, number)) {
    HTMLElement.textContent =
      HTMLElement.textContent + getStdRomanValue(romanToArebicObj, number);
    return HTMLElement.textContent;
  } else {
    return print(
      HTMLElement,
      getStdRomanValue,
      romanToArebicObj,
      numberTobeRepeated,
      fixedNumber,
      countToStartAt,
      countEndAt
    );
  }
}
function print(
  ele,
  callback,
  obj,
  numberTobeRepeated,
  fixedNumber,
  countToStartAt,
  countEndAt
) {
  count = countToStartAt;
  let temp = callback(obj, fixedNumber) || "";

  while (count <= countEndAt) {
    ele.textContent =
      ele.textContent + temp + callback(obj, numberTobeRepeated);

    count++;
    temp = "";
  }
  return ele.textContent;
}
