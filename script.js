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
      console.log(inputNumber, output);
      printRomanValuesForSingleDigitNumber(inputNumber, output);
    }
    // } else if (numOfDigits === 2) {
    //   if (getRomanValue(romanToArebicObj, inputNumber)) {
    //     output.textContent = getRomanValue(romanToArebicObj, inputNumber);
    //   } else {
    //     let numberAtOncePlace = inputNumber % 10;
    //     console.log(numberAtOncePlace);
    //     output.textContent = getRomanValue(
    //       romanToArebicObj,
    //       inputNumber - numberAtOncePlace
    //     );

    //     printRomanValuesForSingleDigitNumber(numberAtOncePlace, output);
    //   }
  }
});

function printRomanValuesForSingleDigitNumber(number, HTMLElement) {
  if (getRomanValue(romanToArebicObj, number)) {
    HTMLElement.textContent =
      HTMLElement.textContent + getRomanValue(romanToArebicObj, number);
  } else {
    if (number <= 3) {
      print(HTMLElement, getRomanValue, romanToArebicObj, 1, "", 1, number);
    } else if (number >= 6 && number <= 8) {
      print(HTMLElement, getRomanValue, romanToArebicObj, 1, 5, 6, number);
    }
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
    console.log(temp);
    console.log(ele);
    ele.textContent =
      ele.textContent + temp + callback(obj, numberTobeRepeated);

    count++;
    temp = "";
  }
}
