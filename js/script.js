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

// # Function Expressions (Anonymous function)
// It is a function without a name (anonymous function) which helps us avoid polluting the global scope with names.
// We can just write it and forget about it.
//  To invoke a anonymous function we write the variable name and add ()
//  _variablename();

// function sayHello() {
//   console.log("HELLO JAVASCRIPT");
// }

// sayHello();

// Making this same function in function expressions.

// const greeting = function () {
//   console.log("Hello Javascript");
// };

// greeting();

// ! Creating a Counter

// let count = 0;
// function increaseCount() {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount() {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// }

// There is an onclick event attribute in html
// onclick = "_functionname()"

// ! Creating the same Counter program using anonymous functions

// let count = 0;
// document.getElementById("increase").onclick = function () {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// };

// document.getElementById("decrease").onclick = function () {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// };

// # Arrow Function Expressions
// A compact alternative to a traditional function expression
//  It is represented by an =>
// You do not need curly braces {} if your function uses only one statment
//  But you do need curly braces {} if your function uses multiple statements

// const greeting = function (userName) {
//   console.log(`hello ${userName}`);
// };

// greeting("Wick");

// Creating this same program using arrow functions

// const greeting = (userName) => console.log(`Hello ${userName}`);
// greeting("Nero");

// # Calculate percentage

// const percent = function (x, y) {
//   return (x / y) * 100;
// };
// console.log(`The percentage is ${percent(80, 100)}%`);

// const percent = (x, y) => (x / y) * 100;
// console.log(`The percentage is ${percent(80, 100)}%`);

// let grades = [100, 50, 60, 80, 70, 90, 40];

// function descending(x, y) {
//   return y - x;
// }

// function ascending(x, y) {
//   return x - y;
// }

// function print(element) {
//   console.log(element);
// }

// grades.sort(descending);
// grades.forEach(print);

// grades.sort(ascending);
// grades.forEach(print);

// Writing the same code using arrow functions

// let grades = [100, 90, 20, 40, 50, 70];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));

// grades.sort((x, y) => x - y);
// grades.forEach((element) => console.log(element));

// Shuffle an array

// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// function shuffle(array) {
//   let currentIndex = array.length;
//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// }

// shuffle(cards);

// console.log(cards);
// OR
// cards.forEach((card) => console.log(card));

// # Nested Functions
// It is a function inside other functions.
// Outer functions have access to inner functions
// Inner functions are hidden from outside the Outer Functions
// They add data security and are used in closures

// The problem in this one is that i dont need to login to access those messages i can directly call the functions to show the messages
// let userName = "Wick";
// let userInbox = 0;

// function login() {
//   displayUserName();
//   displayUserInbox();
// }

// function displayUserName() {
//   console.log(`Welcome ${userName}`);
// }

// function displayUserInbox() {
//   console.log(`You have ${userInbox} new messages`);
// }

// login();

// To add data security

// let userName = "Wick";
// let userInbox = 0;

// function login() {
//   function displayUserName() {
//     console.log(`Welcome ${userName}`);
//   }

//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new messages`);
//   }

//   displayUserName();
//   displayUserInbox();
// }

// login();

// # Maps
// It is an object that holds key value pairs of any datatype

// const store = new Map([
//   ["t-shirt", 20],
//   ["Jeans", 30],
//   ["Socks", 10],
//   ["Underwear", 100],
// ]);

// store.forEach((value, key) => console.log(`${key} $${value}`));

// let shoppingCart = 0;
// We can get the pairs using .get() method
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("Underwear");

// We can add a pair to our map using .set() method
// store.set("hat", 500);

// To delete a pair
// store.delete("_key");

// To check if there is a key within our map:
// store.has("_key");

// To see the size
//  store.size -> property

// console.log(store);

// # Objects
// A group of properties and methods
// Properties = what an object has
//  Methods = what an object can do
// Methods are functions() but with a .
//  use. to access properties/methods

// const car = {
//   model: "Mustang",
//   color: "Black",
//   year: 2023,

//   drive: function () {
//     console.log("You drive the car");
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// console.log(car.model);

// console.log(car.color);
// console.log(car.year);

// console.log(car.drive());
// console.log(car.brake());

// const car1 = {
//   model: "Mustang",
//   color: "Black",
//   year: 2023,

//   drive: function () {
//     console.log("You drive the car");
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// console.log(car1.model);

// console.log(car1.color);
// console.log(car1.year);

// car1.drive();
// car1.brake();

// const car2 = {
//   model: "Ferrari",
//   color: "Orange",
//   year: 2023,

//   drive: function () {
//     console.log("You drive the car");
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// console.log(car2.model);

// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();

// 3:21:08

// # this keyword
// A reference to a particular object the object depends on the immediate context

// const car1 = {
//   model: "Mustang",
//   color: "Black",
//   year: 2023,

//   drive: function () {

// if you just write the ${model} it will not work so you need to use this.model
// this = object name
// if we write the object name . model it will work the same
//  this.model and car1.model is the same

//     console.log(`You drive the ${this.model}`);
//   },
// };

// const car2 = {
//   model: "Ferrari",
//   color: "Orange",
//   year: 2023,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// car1.drive();
// car2.drive();

// If you use this outside of an object that you it will be in context of window object of the browser as it is the immediate context for this.

// # Classes
// It is a blueprint for creating objects which defines what kind of properties and methods they have and it uses a constructor for unique properties

// class Player {
//   score = 0;

// When you declare a method within a class you dont necessarily need the function keyword
//   pause() {
//     console.log("You paused the Game");
//   }

//   exit() {
//     console.log("You exited the Game");
//   }
// }

// To utilize the class to create an object
// Use the 'new' keyword
//  objectname = new  classname();

// const Player1 = new Player();

// console.log(Player1.score);

// Player1.pause();

// Player1.exit();

// You can utilize the same Class to create multiple objects

// const Player2 = new Player();

// console.log(Player2.score);
// Player2.pause();
// Player2.exit();

// # Constructors
// It is a special method of a class
// It's job is to accept arguments and assign properties
// You can use the same constructors as template for other values

// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }

//   study() {
//     console.log(`${this.name} studies 4 hours a day`);
//   }
// }

// const student1 = new Student("Wick", 30, 3.9);
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// const student2 = new Student("Bruce", 32, 4.0);
// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();

// # static Keyword
// It belongs to the class and not the objects
// properties: useful for caches, fixed-configuration
// methods: useful for utility functions

// class Car {
// If you dont use static keyword each car will have its own copy of constructor so the numberofCars is shown as 1 for all 3 of them
// If you use static keyword then instead of all the cars having its own copy the Car class itself has the only copy.

//   static numberOfCars = 0;

//   constructor(model) {
//     this.model = model;
// this.numberOfCars += 1; Instead of this after using static
// classname.numberofCars += 1;
//     Car.numberOfCars += 1;
//   }

//   Static methods

// This is not static
// startRace(){
//     console.log("3...2...1... GO!");
// }

// Making it static
//   static startRace() {
//     console.log("3...2...1... GO!");
//   }
// }

// const car1 = new Car("Ferrari");
// const car2 = new Car("BMW");
// const car3 = new Car("Mustang");

// console.log(car1.numberOfCars);
// console.log(car2.numberOfCars);
// console.log(car3.numberOfCars);

// Since none of these objects have ownership to the static variable
// To access the static property of the numberofCars

// console.log(Car.numberOfCars);

// To invoke the static method
// nameoftheclass.staticmethodname();

// Car.startRace();
// 3:34:23

// # inheritance
// A child class can inherit all the methods and properties from another class

// class Rabbit {
//   alive = true;
//   name = "Rabbit";

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is Sleeping.`);
//   }

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }

// class Fish {
//   alive = true;
//   name = "Fish";

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is Sleeping.`);
//   }

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }

// class Hawk {
//   alive = true;
//   name = "Hawk";

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is Sleeping.`);
//   }

//   Fly() {
//     console.log(`This ${this.name} is Flying.`);
//   }
// }

// In programming we dont like to repeat code
// Using class  to create Parent class so that the child class can inherit

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is Sleeping.`);
//   }
// }

// class Rabbit extends Animal {
//   name = "Rabbit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "Fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animal {
//   name = "Hawk";

//   fly() {
//     console.log(`This ${this.name} is Flying.`);
//   }
// }

// // Creating the objects
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// console.log(fish.alive);
// console.log(hawk.alive);

// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// fish.eat();
// fish.sleep();
// fish.swim();

// hawk.eat();
// hawk.sleep();
// hawk.fly();

// # super keyword
//  It refers to the parent class.
// It is commonly used to invoke constructor of a parent class

// It promotes code reusability.

// class Animal {
// We pass the property inside constructor(property1,property2){}
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
// this.name = name;
// this.age = age;
// We need to use super to access these so
//     super(name, age);

//     this.runSpeed = runSpeed;
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
// this.name = name;
// this.age = age;
//     super(name, age);

//     this.swimSpeed = swimSpeed;
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flightSpeed) {
// this.name = name;
// this.age = age;
//     super(name, age);

//     this.flightSpeed = flightSpeed;
//   }
// }

// const rabbit = new Rabbit("Bunny", 1, 40);
// const fish = new Fish("Bunny", 1, 100);
// const hawk = new Hawk("Mihawk", 1, 260);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flightSpeed);

// # getters and setters

// get - it binds an object property to a function when that property is accessed.
// The property and getter cannot have the same name.
// A common naming convention with properties of objects is by preceeding the name with _
// using _ will let the other developers know that this is a protected property and aware them abt not messing with it.

// By associating a protected property with only a getter , it will become read only and not writable;

// Benefits of getters
// 1. It increases data security
// 2. You can perform some additional logic when you access a property directly.
// To use a getter you type the object name followed by the getter name
// car.power

// Example:

// class Car {
//   constructor(power) {
//     this._power = power;
//     this._gas = 30;
//   }

//   get power() {
//     return `${this._power}HP`;
//   }

//   get gas() {
//     return `${this._gas}L (${(this._gas / 50) * 100}%)`;
//   }

// set gas(value) {
//   if (value > 50) {
//     value = 50;
//   } else if (value < 0) {
//     value = 0;
//   }
//   this._gas = value;
// Since gas has a setter that means it is writable
//   }
// }

// let car = new Car(600);
// car.gas = 38;
// console.log(car.power);
// console.log(car.gas);

// Setters
//  set - it binds an object property to a function when that property is assigned a value.

// 3:49:20

// # Passing objects as arguments

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Mustang", 2023, "BLACK");
// const car2 = new Car("Ferrari", 2022, "RED");
// const car3 = new Car("Buggati", 2024, "ORANGE");

// When you are passing objects into the function the parameter name is a nickname that you assign temporarily
// Set the parameter name to something descriptive of what you are accepting as an argument
// function displayInfo(car) {
//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);
// }

// displayInfo(car1);
// displayInfo(car2);
// displayInfo(car3);

// function changeColor(car, color) {
//   car.color = color;
// }
// changeColor(car3, "GOLD");
// displayInfo(car3);

// # Create an array of objects

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   drive() {
//     console.log(`You drive the ${this.model}`);
//   }
// }

// const car1 = new Car("Mustang", 2023, "BLACK");
// const car2 = new Car("Ferrari", 2022, "RED");
// const car3 = new Car("Buggati", 2024, "ORANGE");
// const car4 = new Car("McLaren", 2025, "SILVER");

// const cars = [car1, car2, car3, car4];
// If you need properties or methods console.log(cars[0].properties or methods())
// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[1].drive();

// function startRace(cars) {
//   for (const carr of cars) {
//     carr.drive();
//   }
// }

// startRace(cars);

// # Anonymous objects
//  Objects without a name , it is not directly referenced and has less syntax, No need for unique names
// One downside is that we dont have direct access to these objects

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }

// let card1 = new Card("A", "Spades");
// let card2 = new Card("A", "Hearts");
// let card3 = new Card("A", "Diamonds");
// let card4 = new Card("A", "Clubs");
// let card5 = new Card("2", "Spades");
// let card6 = new Card("2", "Hearts");
// let card7 = new Card("2", "Diamonds");
// let card8 = new Card("2", "Clubs");

// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];
// To access one of these properties of one of these card we can do so directly by the object name or by an array element

// console.log(`${card1.value} of ${card1.suit}`);
// console.log(`${cards[0].value} of ${cards[0].suit}`);
// Both of these are the same

// We need to create a lot of unique names for objects in this one
// A better way to do this would be to use anonymous functions

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }

// new Card("A", "Spades");
// new Card("A", "Hearts");
// new Card("A", "Diamonds");
// new Card("A", "Clubs");
// new Card("2", "Spades");
// new Card("2", "Hearts");
// new Card("2", "Diamonds");
// new Card("2", "Clubs");

// In place of adding some object names directly to our array when we instanciate a card object we can actually place that within the array

// let cards = [
//   new Card("A", "Spades"),
//   new Card("A", "Hearts"),
//   new Card("A", "Diamonds"),
//   new Card("A", "Clubs"),
//   new Card("2", "Spades"),
//   new Card("2", "Hearts"),
//   new Card("2", "Diamonds"),
//   new Card("2", "Clubs"),
// ];

// In order to access the properties of an anonymouos object we need to access it indirectly

// console.log(`${cards[0].value} of ${cards[0].suit}`);

// printing out all of them using forEach()

// cards.forEach((card) => console.log(`${card.value} of ${card.suit}`));

// Error Handling
// Errors are objects with a description of something went wrong
// Can't open a file
// Lose connection
// User types incorrect input
// TypeError

// throw = executes a user-defined error

// console.lag();

// One way to handle errors is to surround any dangerous could with try block

// !try block and catch Block
// If you use try block then you need to follow it with a catch block

// try {
//   console.lag();
// } catch (error) {
//   console.log(error);
// }

// Sometimes in your program something will go wrong but it wont generate an error
// In that case you should use throw keyword

// try {
//   let x = window.prompt("Enter a number");
//   x = Number(x);

//   if (isNaN(x)) throw "That wasn't a number!";
//   if (x == "") throw "That is empty you dumb or wot";
//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("This always executes");
// }

// finally will always execute doesn't matter if your code is successful or unsuccessful
// finally block is good for clean up

//# setTimeOut()
// It invokes a function after a number of milliseconds
// It is an asynchronous function (doesn't pause execution)

// We pass in either callback, a function expression or an arrow function expression
// Syntax- setTimeout(callback/function/arrowfunction, time in milliseconds)

// It is possible to have multiple setTimeOut methods executing concurrently(at the same time)

// let item = "crypto";
// let price = 690;

// let timer1 = setTimeout(firstMessage, 3000);
// if you are going to pass arguments then

// let timer1 = setTimeout(firstMessage, 3000, item, price);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// If at any time you need to clear or cancel your setTimeOut method you can use clearTimeOut method

// function firstMessage(item, price) {
//   alert(`Buy this ${item} for ${price}`);
// }

// function secondMessage() {
//   alert(`This has valuable concepts `);
// }

// function thirdMessage() {
//   alert(`Buy it nowwwwwwww`);
// }

// document.getElementById("myButton").onclick = function () {
//   clearTimeout(timer1);
//   clearTimeout(timer2);
//   clearTimeout(timer3);
//   alert("Thanks for buying the course bwahhahahah");
// };

// 4:12:00

// # setInterval()
// It invokes a function repeatedly after a number of milliseconds
// It is an asynchronous function and it doesn't pause the execution of your program

// Count up timer
// let count = 0;
// let max = Number(window.prompt("Count up to what number?"));

// We can pass in callbacks,functions or arrow functions
// Syntax - setInterval(callback/functions/arrowfunctions, time)
// const myTimer = setInterval(countUp, 2000);

// function countUp() {
//   count += 1;
//   console.log(count);
//   if (count >= max) {
// But we need to pass in the id of the setInterval method as arguments
// clearInterval(myTimer);
// To stop the setInterval method we can use the clearInterval method
//   }
// }

// # Date Objects
// The Date object is used to work with dates and times
// We just call the Date constructor.

// Within the date constructor we can pass in the amount of milliseconds as arguments.
// we can pass in year,month,day as arguments
// let date = new Date (2023, 0, 1 , 2 ,3 ,4,5);
// let date = new Date ("January 1, 2023 00:00:00");

// We can get the current date by assigning it to a variable

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliseconds = date.getMilliseconds();

// We can set these properties as well
// date.setFullYear(2024);

// let date = new Date();
// date = date.toLocaleString();
// console.log(date);
// document.getElementById("myLabel").innerHTML = date;
// document.getElementById("myLabel").innerHTML = formatTime(date);

// We can also create our own function to format Date

// function formatDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth();
//   let day = date.getDate();

//   return `${month}/${day}/${year}`;
// }

// function formatTime(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let amOrPm = hours >= 12 ? "pm" : "am";

// To turn it into standard time
//   hours = hours % 12 || 12;

//   return `${hours}:${minutes}:${seconds} ${amOrPm}`;
// }

// Practice Program : Clock
// const myLabel = document.getElementById("myLabel");

// function update() {
//   let date = new Date();
//   myLabel.innerHTML = formatTime(date);

//   function formatTime(date) {
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm" : "am";

//     hours = hours % 12 || 12;
//     hours = formatZero(hours);
//     minutes = formatZero(minutes);
//     seconds = formatZero(seconds);

//     return `${hours}:${minutes}:${seconds} ${amOrPm}`;
//   }

//   function formatZero(time) {
//     time = time.toString();
//     return time.length < 2 ? "0" + time : time;
//   }
// }

// update();
// setInterval(update, 1000);

// ! Synchronous code
// In an ordered sequence.
// Step by Step linear instructions
// (start now, finish now)

// # Asynchronous code
// Out of sequence
//  Example:
// Access a database
// Fetch a file
// Tasks that take time
// (Start now, Finish sometime later)

// Example of synchronous code
// console.log("Start");
// console.log("This is synchronous");
// console.log("END");

// Example of Asynchronous code
// console.log("Start");
// setTimeout(() => console.log("This is synchronous"), 5000);
// console.log("END");

// # Console.time() = Starts a timer you can use to track how long an operation takes.
// Give each timer a unique name.

// You give the name as a string within the ("")
// Start
// console.time("Response time");
// alert("Click the Ok Button");

// setTimeout(() => console.log("HELLO WORLD"), 3000);

// End
// console.timeEnd("Response time");

// 4:33:41
// skip
// skip
