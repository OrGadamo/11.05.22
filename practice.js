function printMany(i, text) {
  while (i > 0) {
    console.log(text);
    i--;
  }
}

// printMany(1, "ISRAEL");
// printMany(1, "Or Gadamo");
// printMany(1, 5);
// printMany(5, 7);

function getFromPrompt(txt) {
  return prompt("please enter " + txt);
}

function getSum(i) {
  var sum = 0;
  while (i > 0) {
    sum += +getFromPrompt("number");
    i--;
  }
  console.log("the sum is: " + sum);
  return sum;
}
function getAvg(i) {
  return getSum(i) / i;
}
// console.log("the avrage is: " + getAvg(4));

function getmul(num1, num2) {
  return num1 * num2;
}
// console.log(getmul(getFromPrompt("width"), getFromPrompt("height")));
function getmodule(num1, num2) {
  return num1 % num2;
}
// console.log(
//   "the remain is " +
//     getmodule(getFromPrompt("first number"), getFromPrompt("second number"))
// );

function getCirclePerimeter(radius) {
  return radius * 2 * 3.14;
}
function getCircleArea(radius) {
  return radius * radius * 3.14;
}
function printCircleDetails(radius) {
  console.log("The perimeter is " + getCirclePerimeter(radius));
  console.log("The area is " + getCircleArea(radius));
}
// printCircleDetails(+getFromPrompt("radius"));

function getOnlyAvg(i, sum) {
  return sum / i;
}
function addUp(num1, num2) {
  return num1 + num2;
}
function playeravg(i) {
  var sum = 0;
  for (var j = 0; j < i; j++) {
    console.log(getFromPrompt("player name"));
    sum = addUp(sum, +getFromPrompt("player age"));
  }
  console.log("the avrage age is " + getOnlyAvg(i, sum));
}
// playeravg(+getFromPrompt("how many players"));

// console.log("the avrage is " + getAvg(5));

function assembly(num) {
  var mul = 1;
  while (num > 0) {
    mul = getmul(mul, num);
    num--;
  }
  return mul;
}
// console.log(assembly(+getFromPrompt("a number for assembly")));

function getMin(num1, num2) {
  if (num1 > num2) {
    return num2;
  }
  return num1;
}
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
function printMinMax(i) {
  var min = +getFromPrompt("number from list");
  var max = min;
  while (i - 1 > 0) {
    var check = +getFromPrompt("number from list");
    max = getMax(max, check);
    min = getMin(min, check);
    i--;
  }
  console.log("min-" + min + " max-" + max);
}
// printMinMax(+getFromPrompt("how many number on your list"));

function printMinMaxtillstop() {
  var min = +getFromPrompt("number from list");
  if (min > 0) {
    var max = min;
    var check = +getFromPrompt("number from list");
    while (check > 0) {
      max = getMax(max, check);
      min = getMin(min, check);
      check = +getFromPrompt("number from list");
    }
    console.log("min-" + min + " max-" + max);
  } else {
    console.log("invalid input");
  }
}
// printMinMaxtillstop();
