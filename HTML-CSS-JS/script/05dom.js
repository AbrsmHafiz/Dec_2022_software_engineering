console.log("DOM Traversal")

//arrays
//collection of the values of same datatype

let scores = [88, 55, 56, 57, 58]
/* length of the array is 6
name of array variable is scores
position of the first eelment is 0 (index)
size of array can be calcualted usikng array.length i.e. scores.lenght
any isngle value can be read using arrayName[position] */
console.log(scores.length);
console.log(scores[0]);
console.log(scores);

//  edit element
scores[3]= 100
console.log(scores);



function closeMe(){
    console.log(window.close());
}

// console.log(window.document.getElementsByTagName("li"));

let allTheLi = document.getElementsByTagName("li")
console.log(allTheLi); //array
console.log(allTheLi[0]);  //first element array
console.log(allTheLi[0].innerText); 

//change element in array, can either be inner text or inner html
allTheLi[0].innerText = "HTML"
console.log(allTheLi[0].innerText); //but if there is sth like button, it will then disappaear
 // allTheLi[0].innerHTML = "35" + "<button>click me</button>" //edit html too

console.log(scores);
scores.pop(); //remove the last element ( pop is a function - cube logo)
console.log(scores.pop());
console.log(scores.push(10003)); // add elemnt add the end of array 
console.log(scores.slice(1,5));  //take part of the array


//access elements using id
let ref = document.getElementById("part2")
console.log(ref);
ref.setAttribute("style","color:blue")

let ref1 = document.getElementById("item1")
console.log(ref1);
ref1.innerText = "I have change this using JS";
ref1.setAttribute("style","color:red")

let ref2 = document.getElementsByClassName("exciting")
console.log(ref2);
//ref2[4].setAttribute("style","color:red;  text-shadow: 2px 2px green;")
ref2[4].setAttribute("class", "moreExciting")  //if there is existing attrobute, it will be updated, if none it will set a new one

