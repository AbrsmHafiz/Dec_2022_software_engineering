// let captureNumber = 0
// captureNumber = prompt("Give me any number !")

// function table(n){
// for(i = 0; i <= 5; i++){
//     console.log(`${n} x ${i} = ${n*i}`);
// }
// }

// table(captureNumber)

let anyNumber=0
let total = 0
anyNumber = parseInt(prompt("Any number please !")) //The parseInt method parses a value as a string and returns the first integer  
function sum(n){
    for(counter = n;counter >= 0;counter--){
        total = total + counter
    }
    console.log(total);
}

sum(anyNumber)