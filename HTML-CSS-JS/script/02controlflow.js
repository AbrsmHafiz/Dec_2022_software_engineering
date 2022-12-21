console.log("If conditions");

let score = 88

let attempt = 2

if (score > 90 && attempt < 2) {
    console.log("Excellent score in 1st attempt!")
    
}

if (score > 90 && attempt < 3) {
    console.log("Excellent score in 2nd attempt!")
    
}

if (score < 90 &&  attempt < 2) {
    console.log("You can do better to make it excellent!")

}

if (score < 90 && attempt < 3) {
    console.log("Yours is 2nd attempt. Work hard to do it better.")
}

let i = 10
let j = 30
if (i <= j) {
    if (j / 2 >= i) {
        console.log(j / 2)
        if (i * 2 < j) {
            console.log(j / i);
        }
    }
}

//ternary operatory********************************************************************************************************************************
//let check = (conditon check)? "value if condtion is true":"value if condition is false"
// let check = 50 >25?"Wow":"Alas"
// let check = 50 > 25? "wow":"alas"
// console.log(check);

let points = 10
let challenge = (points % 3 === 1)&&(points/2 >5) ? "Try again!!!":"You did it!"
console.log(challenge)

challenge = ((points % 3 === 1)&&(points/2 >5) ?true:false )  ? "Try again!!!":"You did it!"
console.log(challenge)

