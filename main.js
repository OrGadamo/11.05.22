//פונקציות
// function printnumfive(number) {
//   for (var i = 0; i < 5; i++) {
//     console.log(number);
//   }
// }
// // printnumfive(+prompt("enter a number:"));
// function printHello(i) {
//   while (i > 0) {
//     console.log("Hello World!");
//     i--;
//   }
// }
// printHello(+prompt("how many hello?"));
// // printHello(+prompt("how many hello:"));
// function maxIt(number1, number2) {
//   if (number1 > number2) {
//     return number1;
//   } else {
//     return number2;
//   }
// }
// console.log(maxIt(1, 2));
// function sumIt(number1, number2) {
//   return number1 + number2;
// }
// console.log(sumIt(1, 2));
// function sumAllBefore() {
//   var i = +prompt("enter a number to sum it up:");
//   var sum = 0;
//   while (i > 0) {
//     sum += i;
//     i--;
//   }
//   console.log(sum);
// }
// sumAllBefore();
// var forchange1 = 5;
// var forchange2 = 10;
// console.log(forchange1, forchange2);
// function changefor() {
//   var helpchange = forchange1;
//   forchange1 = forchange2;
//   forchange2 = helpchange;
// }
// changefor();
// console.log(forchange1, forchange2);
// function triangle(length) {
//   for (var i = 1; i < length + 1; i++) {
//     for (var j = i; j > 0; j--) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
// }
// triangle(+prompt("what is the triangle length?"));
// function checkMin(number1, number2) {
//   if (number1 < number2) {
//     return number1;
//   }
//    return number2;
//
// }
// var minnum = checkMin(
//   +prompt("enter first number to check who's smaller:"),
//   +prompt("enter second number to check:")
// );
// console.log(minnum);
// function check3Min(number1, number2, number3) {
//   return checkMin(checkMin(number1, number2), number3);
// }
// console.log(
//   check3Min(
//     +prompt("enter a number to compare:"),
//     +prompt("enter a number to compare:"),
//     +prompt("enter a number to compare:")
//   )
// );
// function avrage(i) {
//   var sum = 0;
//   for (var j = 0; j < i; j++) {
//     sum += +prompt("enter a number for avrage:");
//   }
//   return sum / i;
// }
// console.log("the avrage is " + avrage(3));
// function sumUp(num1, num2, num3, num4) {
//   return num1 + num2 + num3 + num4;
// }
// console.log(sumUp(1, 1, 1, 1));
// function powerIt(base, exponent) {
//   var power = 1;
//   while (exponent > 0) {
//     power *= base;
//     exponent--;
//   }
//   return power;
// }
// console.log(powerIt(2, 3));
// function sumDigits(num) {
//   var sum = 0;
//   while (num != 0) {
//     sum += num % 10;
//     num = (num - (num % 10)) / 10;
//   }
//   return sum;
// }
// console.log(sumDigits(+prompt("enter a number to sum digits:")));

// function fibonacci(i) {
//   var num1 = 0;
//   var num2 = 1;
//   if (i == 0) {
//     console.log(num1);
//   } else if (i == 1) {
//     console.log(num1);
//     console.log(num2);
//   } else if (i > 1) {
//     console.log(num1);
//     console.log(num2);
//     while (i - 1 > 0) {
//       var helper = num2;
//       num2 += num1;
//       num1 = helper;
//       i--;
//       console.log(num2);
//     }
//   } else {
//     console.log("invalid number had been inputed");
//   }
// }
// fibonacci(+prompt("enter the position of the number on the fibonacci:"));
//בסיסי

// function printIsrael(){
// console.log("ISRAEL");
// }
// printIsrael()

// function printMyName() {
//   console.log("Or Gadamo");
// }
// printMyName();

// function printNumber(number) {
//   console.log(number);
// }
// printNumber(5);

// function printManynumbers(i, number) {
//   for (var j = 0; j < i; j++) {
//     console.log(number);
//   }
// }
// printManynumbers(4, 9);

// function printArea(width, height) {
//   console.log(width * height);
// }
// printArea(4, 5);

// var num1 = 7;
// var num2 = 9;
// console.log(num1, num2);
// var helper = num1;
// num1 = num2;
// num2 = helper;
// console.log(num1, num2);

///אופרטורים מתמטיים חיבור חיסור כפל חילוק ומודולו

//כאשר מרנדרים את הקוד בגאווהסקריפט התוכנה המריצה מעלה את כל ההצהרות של משתניםת פונקציות ועוד לתחילת הדף.
