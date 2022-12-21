console.log("To do list");

function captureToDoItem(event){
    event.preventDefault()
    console.log("Add button is clicked")
    let inputRef = document.getElementById("todoitem")
    console.log(inputRef);
    let textInside = inputRef.value
    console.log(textInside);
    

    //add textInside to ol
    //1.create new li
    let newli = document.createElement("li")
    console.log(newli)
    //set tect value for newli
    newli.innerText = textInside
    console.log(newli);

    //get a ref to ol
    let olRef = document.getElementById("todolist")
    //append newli to olRef
    olRef.appendChild(newli)

    //make text input blank again
    inputRef.value = ""


}