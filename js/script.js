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

let grade = Number(prompt("What is the grade?"));

switch (true) {
  case grade >= 90:
    console.log("A+");
    break;

  case grade >= 80:
    console.log("A");
    break;

  case grade >= 70:
    console.log("B+");
    break;

  case grade >= 60:
    console.log("B");
    break;

  case grade >= 50:
    console.log("C");
    break;

  case grade >= 40:
    console.log("D+");
    break;

  case grade >= 30:
    console.log("D");
    break;

  default:
    console.log("NG");
    break;
}
