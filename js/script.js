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

// 50:54