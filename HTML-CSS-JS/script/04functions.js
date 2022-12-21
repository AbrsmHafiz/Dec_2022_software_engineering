console.log("working with functions");

// funcions are used to create reusable blocks of code

//use function
function welcomeMessage(){
    for(i=0; i<5; i++){
        console.log(`${i}. Welcome to Mars`);
    }

}

welcomeMessage() //call function

function welcomeFor(name){

    console.log(`${name}, welcome to mars`);

}// adding parameter

welcomeFor("Hafiz")

// function can return values

function evenChecker(n){
    return n%2 == 0
}

console.log(evenChecker(5));



let captureNumber = 0
captureNumber = prompt("Give me your number")

