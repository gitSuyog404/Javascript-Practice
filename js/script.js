// # First Program

// console.log("Hello World!");
// console.log("Me");

// #Alert box :
// window.alert("I really love programming");

// #Comments : // /* */

// Variables
// Container for storing data
// 1.Declaration (var, let , const)

// In Javascript using 'let' is best practice due to 'variable scope'
// 2.Assignment(= Assignment Operator)

// let firstName = "Keanu";
// let age = 10;
// let student = true;
//  console.log( `${age}  ${firstName}`);
//  console.log("Hello", firstName);
//  console.log("You are", age, "years old");
//  console.log( "Enrolled:", student);

// We can change inner Html by using
//  document.getElementById("_id").innerHTML = "Hello " + firstName

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age +" years old.";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// 14:27

//  # Arithmetic Expressions
/*
    Arithmetic expression is a combination of operands(values, variables, etc.)
    opeartors ( + - * / % )
    they can be evaluated to a value
    ex. y = x + 5;
*/

//  let students = 20;
//  students = students +1;
//  console.log(students);
//  students = students -1;
//  console.log(students);

//  students = students * 2
//  console.log(students);

//  students = students / 2;
//  console.log(students);

//  let extraStudents = students % 3;
//  console.log(extraStudents);

//  # augmented assignment operators
// Can be used if you are reassigning the same variable
/*
    +=
    -=
    *=
    /=
*/

// ## Operator precedence
/*
 This words just like BODMAS in maths 
 first brackets than exponents then multiplication or divison then addition or subtraction.


 However you can force a precedence to make it run first by adding parenthesis
    1. parenthesis ()
    2. exponents **
    3. multiplication and division * /
    4. addition and subtraction 
*/

// This code runs from left to right
// let result =  1+2* (3+4);
// console.log(result);

// # Accepting user inputs
// Easy way with a window prompt
//  Difficult way using Html Textbox

//  ## Using window Prompt

// let input = window.prompt('Choose a number between 1 to 10');
// console.log(input)

// ## The difficult way which is more practical is by using Html textbox

// let userInput ;
// document.getElementById("_btn").onclick = function(){
//     userInput = document.getElementById("myText").value;
//     console.log(userInput);
//     document.getElementById("myLabel").innerHTML = `Hello ${userInput} !!!`;

// }

// # Datatype conversion
//  You can use these constructors to change the datatype
// 1. Number();
// Fun fact: you cannot change something which shouldn't be a number to a number
//  It will result in Nan which is (Not a number)
// 2. String();
// 3. Boolean();
// The ability to change the datatype of a value to another (strings, numbers, booleans)

// If you want to see the datatype of the variable
//  You can use  typeof _variablename
// Example: console.log(typeof age);

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;

// console.log(`Happy Birthday! You are ${age} years old`)

// let x;
// let y ;
// let z;

// x = Number("3.14");
// console.log(x, typeof x);

// y = String(3.14);
// console.log(y, typeof y);

// If you convert an empty value to boolean it will give you false but if you convert a value into boolean it will give you true

// z = Boolean("1");
// console.log(z, typeof z);

// # Const
// We assign variables as constant when we know the value doesn't need to be changed later
//  It is a variable that cannot be changed later after its already declared

// A naming convention for constant variables is the variable's name is in uppercase it is not necessary but it is considered a good practice

// const PI = 3.14159;
// let radius = Number(window.prompt("What is the radius of a circle"));
// let circumference = 2*PI*radius;
// console.log(circumference);

// # Math
// It is an intrinsic object that provides basic mathematics functionality and constants.

// let x = Math.round(3.14);
// console.log(x);

// let y = Math.floor(3.14);
// console.log(y)

// let z = Math.ceil(3.14);
// console.log(z);

/*
    There are a lot more than discussed here for that read docs
    some basic ones are listed below:
    Math.pow(base, exponent);
    Math.sqrt(_name);
    Math.abs(_name) - absolute value which means distance away from zero
*/

// let a = 5;
// let b = 9;
// let max = Math.max(a,b);
// let min = Math.min(a,b);
// console.log(max);
// console.log(min);

//  We can give the value of pi by using Math.PI;

// let p = Math.PI;
// console.log(p);

// # Creating a Hypotenuse calculating practice program

// 1. Basic one

// let a  = Number(window.prompt("Enter the value for the side a"));
// let b  = Number(window.prompt("Enter the value for the side b"));

// let c = Math.pow(a,2) + Math.pow(b,2);
// c = Math.sqrt(c);

// console.log(`The value of side C is ${c}`);

// making the same thing in lesser steps

// let c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
// console.log(`Side C: ${c}`);

// Making a little more advanced version of this same program
// By accepting user inputs using Html Textboxes

// document.getElementById("submitbtn").onclick = function(){
//     let a = Number(document.getElementById("atxtbox").value);

//     let b = Number(document.getElementById("btxtbox").value);

//    let c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

//     document.getElementById("cLabel").innerHTML = `Side C: ${c};`
// }

// # Creating a simple counter program

// let count = 0;
// document.getElementById("decBtn").onclick = function(){
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("resetBtn").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("incBtn").onclick = function(){
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;

// };

// # Creating a random number generator

// If you multiply Math.random with a number then it will give results between 0(but if you want to change the initial value then add the mulitplied value with + _number) to 6
// For example:
//  let x = Math.floor(Math.random()*7)+1;

// Basic :
// let x = Math.floor(Math.random()*6) +1;
// console.log(x);

// Making the same program using User inputs in html textbox

// document.getElementById("rollButton").onclick = function (){
//     let x = Math.floor(Math.random()*6) +1;
//     let y = Math.floor(Math.random()*6) +1;
//     let z = Math.floor(Math.random()*6) +1;

//     document.getElementById("xlabel").innerHTML =x;
//     document.getElementById("ylabel").innerHTML =y;
//     document.getElementById("zlabel").innerHTML =z;
// }

// # Useful String Properties and Methods

// The .length property gives the length of the value
// We can get the character at a given index
// .charAt(_indexno);
// In computer programming index start from zero
// We can find the index of first occurence of the letter- which shows the index of the selected letter
// To remove the unnecessary white space we can use .trim();
// To make it uppercase we can use .toUpperCase();
// To make it lowercase we can use .toLowerCase();
// we can replace things by using .replaceAll("_character we would like to replace","what will replace the selected words");

// let phoneNumber = "123-345-567";
// let userName = "   John Wicko   ";

// console.log(userName.length);
// console.log(userName.charAt(2));

// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// console.log(userName.trim());

// 53:06

// # Slice method
// Extracts a section of a string and returns it as a new string, without modifying the original string
// .slice(starting index of the word, ending index of the word)
// If you dont give the ending index then it will copy everything after the starting index

// let fullName = "John Wick";
// let lastName = fullName.slice(6);
// Or you can do this
// the + 1 means everything after " " to get rid of the white space

// The two indices are to define that 0- starts from the first and it ends at the first " ".
// let firstName = fullName.slice(0, fullName.indexOf(" "));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

// # Method Chaining
//  Calling one method after another in one continuous line of code
//  we can just write .method.method.method.method continously

// let userName = "wick";
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// To this in a better way we can use method chaining

// let letter = userName.charAt(0).toUpperCase().trim();

// # if statement
// a basic form of decision making if a condition is true,then do something, if not then don't do it!
// 1:01:14

// The code executes from the top to bottom
//  The order of the if ,else if, else statement matters

// let age = Number(prompt("What is the you age"));

// if(age>=18){
//     console.log("You are an adult !!!");

// }
// else if(age >=13){
//     console.log("You are a teenager");

// }
// else{
//     console.log("You are still a Child !!!");
// }

// Checking boolean value it is really easy with if statements

// let online = true;
// if(online){
//     console.log("You are Online!");
// }

// else{
//     console.log("You are Offline!");
// }

// # Checked Property
// Let us know if a radio or checkbox is selected
// Asking the checked property will give us a boolean value true or false

// .checked

// The ==true is optional
// document.getElementById("submitBtn").onclick = function(){
//     const myCheckBox = document.getElementById("_checkBox");
//     const visaBtn = document.getElementById("visaBtn");
//     const mastercardBtn = document.getElementById("mastercardBtn");
//     const paypalBtn = document.getElementById("paypalBtn");

//     if (myCheckBox.checked == true){
//         console.log("You liked the website");
//     }

//     else{
//         console.log("You haven't liked this website yet");
//     }

//     if(visaBtn.checked == true){
//         console.log("You are paying with a Visa card");
//     }

//     else if(mastercardBtn.checked==true){
//         console.log("You are paying with a Master Card");
//     }

//     else if(paypalBtn.checked == true){
//         console.log("You are paying with Paypal");
//     }

//     else{
//         console.log("You must select a payment method");
//     }
// }

// # Switch Case
// Statement that explains a value for a match against many case clauses and it is more efficient than many "else if" statements
// It is normally not a good practice to use a lot of else if statements so it is better to use switch in those cases

// let grade = prompt("What is the grade?");

// if(grade == "A+"){
//     console.log("Excellent Work");
// }
// else if(grade == "A"){
//     console.log("Great");
// }
// else if(grade == "B+"){
//     console.log("Good but you can do better");
// }
// else if(grade == "B"){
//     console.log("You did good");
// }
// else if(grade == "C+"){
//     console.log("Nice");
// }
// else if(grade == "C"){
//     console.log("You did okay");
// }
// else if(grade == "D+"){
//     console.log("Acceptable");
// }
// else if(grade == "D"){
//     console.log("You have barely passed");
// }
// else if(grade == "F"){
//     console.log("You Failed miserably");
// }

// else{
//     console.log("NG");
// }

// ! Creating the same program using switches

// let grade = prompt("What is the grade?");

// switch (grade) {
//   case "A+":
//     console.log("Excellent Work");
//     break;

//   case "A":
//     console.log("Great");
//     break;

//   case "B+":
//     console.log("Good but you can improve");
//     break;

//   case "B":
//     console.log("Good but you can do better");
//     break;

//   case "C+":
//     console.log("Sufficient");
//     break;

//   case "C":
//     console.log("You did okay but need improvements");
//     break;

//   case "D+":
//     console.log(" Acceptable");
//     break;

//   case "D":
//     console.log("You need to study alot");
//     break;

//   case "E":
//     console.log("You failed miserably");
//     break;
// If there is no matching cases you can add default:
//   default:
//     console.log("NG");
//     break;
// }

// ! You can use conditions in switches

// let grade = Number(prompt("What is the grade?"));

// switch (true) {
//   case grade >= 90:
//     console.log("A+");
//     break;

//   case grade >= 80:
//     console.log("A");
//     break;

//   case grade >= 70:
//     console.log("B+");
//     break;

//   case grade >= 60:
//     console.log("B");
//     break;

//   case grade >= 50:
//     console.log("C");
//     break;

//   case grade >= 40:
//     console.log("D+");
//     break;

//   case grade >= 30:
//     console.log("D");
//     break;

//   default:
//     console.log("NG");
//     break;
// }

// 1:16:23

// # AND OR logical operators
// Gives us the ability to check more than 1 condition concurrently
//  && AND (Both conditions must be true)
//  || OR (Either condition can be true)

// We can add more than one logical operator

// let temp = Number(prompt("What is the temperature ?"));

// if (temp > 0 && temp < 30) {
//   console.log("The temperature is optimal");
// } else {
//   console.log("The temperature is not optimal");
// }

// OR example:

// let temp = Number(prompt("What is the temperature ?"));

// if (temp <= 0 || temp >= 30) {
//   console.log("The weather is bad!");
// } else {
//   console.log("The weather is good");
// }

// let temp = Number(prompt("What is the temperature"));

// let sunny = true;
// If you are working with a boolean value then you dont need to give == true or false you can just give the value which in this case is sunny
// if (temp > 0 && temp < 30 && sunny) {
//   console.log("The weather is good");
// } else {
//   console.log("The weather is BAD");
// }

// # Not Logical Operator (!)
// typically used to reverse a condition's boolean value
//  true -> false and false -> true

// let temp = Number(prompt("What is the temperature?"));

// if (temp > 0) {
//   console.log("Its warm outside");
// } else {
//   console.log("It's cold outside");
// }

// Making the same condition using not operator(!)

// let temp = Number(prompt("What is the temperature"));

// if (!(temp > 0)) {
//   console.log("It's COLD outside");
// } else {
//   console.log("It's a warm outside");
// }

// # Using Not Operator with boolean values
// It's not necessary to surround with ! ()
//  the brackets are optional

// let sunny = true;

// if (sunny) {
//   console.log("It's sunny outside");
// } else {
//   console.log("It's cloudy outside");
// }

// let sunny = true;

// if (!sunny) {
//   console.log("It's CLOUDY outside");
// } else {
//   console.log("It's SUNNY outside");
// }

// # While Loops
//  It is like an if statement but it repeats some code
// while some condition is true the code is repeated
//  Potentially repeat infinite amount of times
// First condition is checked then the code is executed

// let userName = "";

// while (userName == "" || userName == null) {
//   userName = window.prompt("Enter your name");
// }
// console.log("Hello", userName);

// # do while loop
//  do something then check the condition, repeat if the condition is true
//  First the code is executed at least once then the condition is checked and if the condition is true then the code will run again
// 1:26:35

// let userName;
// do {
//   userName = window.prompt("Enter your name");
// } while (userName == "");
// {
//   console.log(`Hello ${userName}`);
// }

// 1:28:38

// # for loop
//  Repeat some code a certain amount of times
// You tend to use for loops when you want to repeat the code a limited amount of times

// for (i = 0; i <= 10; i += 1) {
//   console.log(i);
// }
// console.log("Hello World!");

// # break and continue statements
// break - breaks out of a loop entirely
// continue - skip an iteration of a loop

// for (let i = 0; i <= 20; i += 1) {
//   if (i == 13) {
//     break;
//   }

//   if (i == 13) {
//     continue;
//   }
//   console.log(i);
// }

// # Nested loop
//  a loop inside of another loop
// First the inner loop executes and after that one iteration of the outer loop is completed

// for (let i = 1; i <= 3; i += 1) {
//   for (let j = 1; j <= 3; j += 1) {
//     console.log(j);
//   }
// }

// Drawing a rectangle using nested loops
// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt("Enter no of rows");
// let columns = window.prompt("Enter no of columns");

// for (let i = 1; i <= rows; i += 1) {
//   for (let j = 1; j <= columns; j += 1) {
//     document.getElementById("myRectangle").innerHTML += symbol;
//   }
//   document.getElementById("myRectangle").innerHTML += "<br>";
// }

// # Functions
// Define code once, and use it many times.
//  To perform some code, call the function name.
// Functions have access to global variables
// it has access to variables out of the function but it doesn't recognize variables with let keyword as it only exists within the {}
// Arguments are passed while calling the function
//  Parameters are assigned while creating the function
// The parameters dont have need to have the same names as the arguments you can change it while creating the function but you need to have the order of the arguments and parameters correct
// For example you cannot write (1,2) in arguments and (2,1) while creating the function and assigning the respective parameters within the code inside the function the values  must be in order

// function happyBirthday() {
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday dear ____");
//   console.log("Happy Birthday to you!");
//   console.log("You are ___ years old!");
// }

// happyBirthday();

// # return statement
//  returns a value back to the place where you invoked a function
// returns the value to the arguments

// let width = Number(window.prompt("Enter the value of width"));
// let height = Number(window.prompt("Enter the value of height"));

// let area = getArea(width, height);

// function getArea(width, height) {
//   let result = width * height;
//   return result;
// }
// console.log(area);

// # Ternary Operator
//  Shortcut for an 'if/else statement' - takes 3 operands:
// 1. a condition with ?
// 2. expression if True:
// 3. expression if False
// syntax :
//  condition ? expressionIfTrue : expressionIfFalse

// Example:

// let adult = checkAge(21);
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(adult);

// Making the same example with ternary operators
// let adult = checkAge(21);
// function checkAge(age) {
//   return age >= 18 ? true : false;
// }
// console.log(adult);

// function checkWinner(win) {
//   win ? console.log("You win") : console.log("You lose");
// }

// checkWinner(true);

// # var vs let
//  Variable scope = where a variable is accessible

//  let = variables are limited to block scope {}
//  var = variables are limited to a function(){}
// if var is declared inside a function it cannot exist out of that function

// Examples
// let
// for (let i = 1; i <= 3; i += 1) {
//   console.log(i);
// }
// console.log(i);

// var
// function Something() {
//   for (var i = 1; i <= 3; i += 1) {}
// }

// console.log(i);

// Global variable = is declared outside any function
// If a variable declared with var is global then it will change browser's window properties
// so use let or const to declare global variables
// That is why it is considered a good practice to use let instead of var

// # Template literals
//  declared with Back ticks [ `` ]  instead of single quotes or double quotes
// It allows us to embed variables and expressions

// let userName = "Wick";
// let items = 3;
// let total = 75;

// let answer = `${userName} just bought ${items} items and it cost him a total of ${total}`;

// document.getElementById("myLabel").innerHTML = answer;
// console.log(answer);

// # Format Currency
// It is a built in method for number
// toLocaleString()
//  returns a string with a language sensitive representation of this number

//  number.toLocaleString(locale, {options});
// 'locale' = specify that language (undefined = default set in browser)
//  'options' = object with formatting options

// let myNum = 1234567.89;
// myNum = myNum.toLocaleString("en-US"); // Us English
// console.log(myNum);

// myNum = myNum.toLocaleString("hi-IN");  Hindi
// console.log(myNum);

// myNum = myNum.toLocaleString("de-DE"); Standard German
// console.log(myNum);

// using options
// myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
// console.log(myNum);

// myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
// console.log(myNum);

// myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
// console.log(myNum);

// Percentage
// let myNum = 100;
// myNum = myNum.toLocaleString(undefined, { style: "percent" });
// console.log(myNum);

// Units
// let myNum = 100;
// myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });
// console.log(myNum);

// # Creating a basic number guessing game in Javascript

// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitBtn").onclick = function () {
//   let guess = document.getElementById("guessField").value;
//   guesses += 1;

//   if (guess == answer) {
//     alert(
//       `${answer} is the Number. It took you ${guesses} guesses to complete`
//     );
//   } else if (guess < answer) {
//     alert("Too small!");
//   } else {
//     alert("Too large");
//   }
// };

// # Temperature conversion program 🌡️

// document.getElementById("submitBtn").onclick = function () {
//   let temp;
//   if (document.getElementById("cButton").checked == true) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toCelsius(temp);
//     document.getElementById("tempLabel").innerHTML = `${temp}℃ `;
//   } else if (document.getElementById("fButton").checked == true) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toFahreinheit(temp);
//     document.getElementById("tempLabel").innerHTML = `${temp}℉`;
//   } else {
//     document.getElementById("tempLabel").innerHTML = "Select a Unit";
//   }
// };

// function toCelsius(temp) {
//   return (temp - 32) * (5 / 9);
// }

// function toFahreinheit(temp) {
//   return (temp * 9) / 5 + 32;
// }

// 2:15:52

// # Arrays
// Think of Arrays as a variable that can store multiple values

// let fruits = ["🍏", "🥭", "🍊", "🍐"];
// console.log(fruits);
// console.log(fruits[0]);

// We can also update and change the elements of the array

// fruits[0] = "coconut";
// console.log(fruits);

// You can use the .push method to add items to an array

// fruits.push("🍇");
// console.log(fruits);

// To remove the last element
// fruits.push("🍇");
// fruits.pop();
// console.log(fruits);

// To add element to the beginning
// fruits.unshift("Kiwi");
// console.log(fruits);

// To remove the first element
// fruits.shift();
// console.log(fruits);

// You can see the length of the array by:
// let length = fruits.length;
// console.log(length);

// To find the index of element

// let index = fruits.indexOf("🍏");
// console.log(index);

// # Loop through an array
// let prices = [5, 10, 15, 20, 25];

// using standart for loop

// for (let i = 0; i < prices.length; i += 1) {
//   console.log(prices[i]);
// }

// To reverse this process
// for (let i = prices.length - 1; i >= 0; i -= 1) {
//   console.log(prices[i]);
// }

// ! Using for of statements

// let prices = [5, 10, 15, 20, 25];

// for (let price of prices) {
//   console.log(price);
// }

// # Sort an array of strings
// We use the sort method
// It arranges in alphabetical order

// let fruits = ["Apple", "Mango", "Orange", "Pear"];
// fruits = fruits.sort();
// To do the opposite
// reverse alphabetical order
// fruits = fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// # 2D Array
// An array of arrays
// also known as multi dimensional arrays

// let fruits = ["Apples", "Oranges", "Grapes"];
// let vegetables = ["Carrots", "Potatoes", "Onions"];
// let meats = ["Eggs", "Chicken", "Fish"];

// let groceryList = [fruits, vegetables, meats];

// To access the values inside 2D arrays
// We use groceryList [][]
//  The first brackets are for rows and the second brackets are for columns

// groceryList[2][2] = "steak";
// Using nested for loops
// for (let grocery of groceryList) {
//   for (let food of grocery) {
//     console.log(food);
//   }
// }

// Spread Operator
//  Allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements) into individual arguments

// By preceding the _name with ... you unpack the elements
// Syntax -     ...

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...numbers);

// let userName = "John Wick";
// console.log(...userName);

// If you just do this it will give you an error so
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let max = Math.max(numbers);
// console.log(max);

// Using spread operator you can solve this error
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let max = Math.max(...numbers);
// console.log(max);

// let class1 = ["Spongebob", "Patrick", "Ben10"];
// let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

// class1.push(...class2);
// console.log(class1);
// console.log(...class1);

// # Rest parameters
// Represents an indeifinite number of parameters
//  packs arguments into an array
//  Syntax -       ...

// Example: If we want to create a function that sums a and b or a,b,c or a,b,c,d or a,b,c,d,e then we'd have to create separate functions for each of them which is not practical so

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// function sumFunction(a, b) {
//   return a + b;
// }
// console.log(sumFunction(a, b));

// function sumFunction(a, b, c) {
//   return a + b + c;
// }
// console.log(sumFunction(a, b, c));

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// function sum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total = +num;
//   }
//   return total;
// }

// Now we can use as many values as we want without having to create separate functions

// console.log(sum(a, b, c));
// console.log(sum(a, b, c, d));
// console.log(sum(a, b, c, d, e));
// 2:36:28

// # Callbacks
// A function passed as an argument to another function.
// It ensures that a function is not going to run before a task is completed
// It helps us develop asynchronous code.
// (When one function has to wait for another function) that helps us avoid errors and potential problems.
// Example. Wait for a file to load.
// While passing the name of the function do not add the () as it will call the function.

// Example

// function sum(a, b) {
//   let result = a + b;
//   return result;
// }

// function dispConsole(output) {
//   console.log(output);
// }

// function dispDom(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

// let total = sum(2, 3);
// dispDom(total);

// Another way of writing this is using a Callback

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

// It is not necessary to name a CallBack ("callBack") you can write any name for a callback
// function sum(x, y, callBack) {
//   let result = x + y;
//   callBack(result);
// }

// sum(2, 3, displayConsole);

// To display in the DOM
// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

// It is not necessary to name a CallBack ("callBack") you can write any name for a callback

// function sum(x, y, callBack) {
//   let result = x + y;
//   callBack(result);
// }

// sum(2, 3, displayDOM);

// # array.forEach()  method:
// It executes a provided callback function once for each array element

// let students = ["john", "wick", "bruce", "wayne"];

// Making a function that will capitalize the first letter of these words

// With array.forEach() there are 3 arguments that are provided automatically behind the scenes that we have access to.
//  function _funcname (element,index,array){}
// We dont necessarily have to use this, but it is automaticaly provided
// You can rename those arguments as well
// But the default is descriptive and it will be easier to understand.

// To use .forEach(); -  _Arrayname.forEach();
// Then we pass in a callback as an argument
// Even if you do assign the name of the function dont write () as it will call the function.

// function Capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1); // This will select the first character of every string
// }

// function print(element) {
//   console.log(element);
// }

// students.forEach(Capitalize);
// students.forEach(print);

// 2:45:46

// # Array.map() Method:
// It executes a provided callback function once for each array element and creates a new array

// ! Square Function

// let numbers = [1, 2, 3, 4, 5, 6];
// function square(element) {
//   return Math.pow(element, 2);
// }

// function print(element) {
//   console.log(element);
// }

// let squareNum = numbers.map(square);
// squareNum.forEach(print);

// ! Creating a function that returns the cube of the given values

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function cube(element) {
//   return Math.pow(element, 3);
// }

// function print(element) {
//   console.log(element);
// }

// let cubeNum = numbers.map(cube);
// cubeNum.forEach(print);

// # Array.filter() Method
// It creates a new array with all elements that pass the test provided by a function.
// A simple use case would be to sum up the values of an array

// let ages = [18, 15, 20, 23, 17, 16, 28];

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }

// let adults = ages.filter(checkAge);
// adults.forEach(print);

// # Array.reduce()
// It reduces an array to a single value

// let prices = [5, 10, 15, 20, 25, 30, 35];

// function checkOut(total, element) {
//   return total + element;
// }

// let total = prices.reduce(checkOut);
// console.log(`The total is : $${total}`);

// # Sort an Array of numbers.
// array.sort();

// let grades = [100, 50, 80, 60, 70, 90];

// Creating a function that will return this array in descending sorting order

// function descend(x, y) {
//   return y - x;
// }

// function print(element) {
//   console.log(element);
// }
// grades = grades.sort(descend);
// grades.forEach(print);

// Creating a function that will return this array in Ascending sorting order

// let grades = [100, 50, 80, 60, 70, 90];

// function ascend(x, y) {
//   return x - y;
// }

// function print(element) {
//   console.log(element);
// }

// grades = grades.sort(ascend);
// grades.forEach(print);
