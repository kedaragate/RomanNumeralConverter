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

console.log(getNumberatOncePlace(1200, 1000));
convertBtn.addEventListener("click", () => {
  output.textContent = "";

  let inputNumber = Number(input.value);
  let numOfDigits = checkNumberOfDigits(inputNumber);
  if (getStdRomanValue(romanToArebicObj, inputNumber)) {
    output.textContent = getStdRomanValue(romanToArebicObj, inputNumber);
  } else {
    let count = 1;
    let tempMultiplyer =
      numOfDigits === 1
        ? 1
        : numOfDigits === 2
        ? 10
        : numOfDigits === 3
        ? 100
        : 1000;
    let tempInput = inputNumber - (inputNumber % tempMultiplyer);

    while (count <= numOfDigits) {
      if (tempInput / (5 * tempMultiplyer) < 1) {
        let numberTobeRepeated = tempMultiplyer;

        let fixedNumber = numOfDigits === 1 ? null : tempInput;
        let countToStartAt = numOfDigits === 1 ? 1 : tempInput;
        let countEndAt = inputNumber;
        console.log(
          numberTobeRepeated,
          fixedNumber,
          countToStartAt,
          countEndAt
        );

        print(
          output,
          getStdRomanValue,
          romanToArebicObj,
          numberTobeRepeated,
          fixedNumber,
          countToStartAt,
          countEndAt
        );
      } else if (tempInput / (5 * tempMultiplyer) > 1) {
        let numberTobeRepeated = 1;
        let fixedNumber = 5;
        let countToStartAt = 1;
        let countEndAt = inputNumber - fixedNumber;
        print(
          output,
          getStdRomanValue,
          romanToArebicObj,
          numberTobeRepeated,
          fixedNumber,
          countToStartAt,
          countEndAt
        );
      }
      count++;
    }
  }
});

function getStdRomanValue(obj, value) {
  let objectKeys = Object.keys(obj);

  let key = objectKeys.find((key) => {
    return obj[key] === value;
  });
  return key;
}

function print(
  ele,
  callback,
  obj,
  numberTobeRepeated,
  // fixedNumber,
  countToStartAt,
  countEndAt
) {
  count = countToStartAt;
  // let temp = callback(obj, fixedNumber) || "";
  // console.log(
  //   ele.textContent,
  //   "numberTobeRepeated:" + numberTobeRepeated,
  //   "fixedNumber:" + fixedNumber,
  //   "countToStartAt:" + countToStartAt,
  //   "countEndAt:" + countEndAt
  // );
  // console.log(count, countEndAt);
  while (count <= countEndAt) {
    console.log(temp);
    ele.textContent = ele.textContent + callback(obj, numberTobeRepeated);

    count++;
    // temp = "";
  }
  return ele.textContent;
}
