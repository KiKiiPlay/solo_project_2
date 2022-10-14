const x = "John";
const y = "Doe";

console.log(x, "<>", y);

let personalData = {
  name: "Kiril",
  surname: "Vandzsurak",
  email: "kiril.wandzurak@gmail.com",
};

delete personalData.email;

let arrayStr = [
  "String1",
  "String2",
  "String3",
  "String4",
  "String5",
  "String6",
  "String7",
  "String8",
  "String9",
  "String10",
];

console.log(arrayStr); //first way to print array

for (let i = 0; i < arrayStr.length; i++) {
  //second way to print array
  console.log(arrayStr[i]);
}

let randArr = [];

function fulfilArr(arr, numOfEl) {
  for (let i = 0; i < numOfEl; i++) {
    let randNum = Math.floor(Math.random() * 100);
    arr[i] = randNum;
  }
}

fulfilArr(randArr, 100);

console.log(randArr);
function getMaxValue() {
  let maxValue = 0;
  for (let i = 0; i < randArr.length; i++) {
    if (maxValue < randArr[i]) {
      maxValue = randArr[i];
    }
  }
  return maxValue;
}

console.log(getMaxValue());

function getMinValue() {
  let minValue = randArr[0];
  for (let i = 0; i < randArr.length; i++) {
    if (randArr[i] < minValue) {
      minValue = randArr[i];
    }
  }
  return minValue;
}

console.log(getMinValue());

let arrOfArr = [[], [], []];
for (let i = 0; i < arrOfArr.length; i++) {
  for (let j = 0; j < 10; j++) {
    let randNum = Math.floor(Math.random() * 100);
    arrOfArr[i][j] = randNum;
  }
}

console.log("-------------------------------------");
let randArr2 = [];
fulfilArr(randArr2, 50);

console.log("First array:", randArr);
console.log("Second array:", randArr2);

function theLongestArr(arr1, arr2) {
  const arrLength1 = arr1.length;
  const arrLength2 = arr2.length;

  if (arrLength1 > arrLength2) {
    return arr1;
  } else {
    return arr2;
  }
}

console.log("The longest array is:");
console.log(theLongestArr(randArr, randArr2));

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}

function theHighestSum(arr1, arr2) {
  let arr1Sum = calculateSum(arr1);
  let arr2Sum = calculateSum(arr2);

  if (arr1Sum > arr2Sum) {
    console.log("array 1 has the biggest sum:", arr1Sum);
    return arr1;
  } else {
    console.log("array 2 has the biggest sum:", arr2Sum);
    return randArr2;
  }
}

console.log(theHighestSum(randArr, randArr2));
