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