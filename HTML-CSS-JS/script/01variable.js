console.log("I am in external JS"); //always end with;
// variables -> identifiers used to store temporary info
//declare var score

let score = 8

// you can change score in an identifier

console.log(score);
score = score + 1
console.log(score);
console.log(typeof score);

let nama= "Air Asia Academy"
console.log(typeof nama );

// Data types -> number,strings,booleans,object,undefine,null,NaN

let check = true
console.log(typeof check);

let lifeline = 9
let total = score + lifeline
console.log(total);

// other operators => + - / * %(modulo)

let nett = total*2
console.log("nett:" + nett)
;
//using template variables
console.log(`nett:${nett}`);
let alocation = "KL sentral"
let course = "software engineering"
let time = 10
let message = "I am studying " + course + " at " + alocation + ` for ${time} days`
console.log(message);
let message2 = `I am pursuing ${course} at ${alocation} for ${time} days`
console.log(message2); //it is simpler to use template variable

//assignmnt operator --> =
/* comparison operators --> > < >= <= == !=
   return only 2 possible values
*/
console.log("Working with comparison operators");
let status = 8>7
console.log(status);

// == does only value equality check,not comsidering types
// === is strict equality check, for value and data type

console.log("13" == 13);  //true
console.log("13" === 13);  //false
console.log("13" != 13);  //false
console.log("13" !== 13);  //true

//logical operators 
// OR operator -> ||
// AND  -> &&
// NOT  ->  !
// outcome is only true or false

//NOT operator
// !0 = 1

// 1 OR 0 OR 0 OR 0 => 1
// 0 OR 0 OR 0 OR 0 => 0
// 1 OR 0 OR 0 OR 1 => 1

//AND operator
// 1 AND 0 => 0
// 0 AND 1 => 0
// 1 AND 1 => 1
// 0 AND 0 => 0
// 1 AND 0 AND 0 => 0
// 1 AND 1 AND 0 => 0
// 1 AND 1 AND 0 AND 1 => 0
// 1 AND 1 AND 1 AND 1 => 1

//pre-increment and post-increment operator =>> 
// age++ == age + 1 ( post increment operation)
let age = 40
console.log(age); //40

//first case
age++
console.log(age); //41

// second case - post increment
console.log(age++) //41
console.log(age) //42

// third case - pre increment
console.log(++age); //43