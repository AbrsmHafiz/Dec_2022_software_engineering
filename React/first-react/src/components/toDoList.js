import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ToDoList() {

    useEffect(()=>{
        callToDoApi()
    },[])

    let [allToDo, updateToDo ] = useState([])


    let callToDoApi = ()=>{

        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            console.log(response.data);
            updateToDo(response.data)

        }
        )
    }

    let renderAllToDo = () => {
        return allToDo.map((u)=>{
            return(
                <li key={u.id}>
                    {u.title}
                </li>
            )
            
        })


    }

    return (  

        <div style={{
            backgroundColor:"lightcyan",
            borderRadius:"10px",
            paddingLeft:"20px",
            paddingTop:"10px",
            paddingRight:"10px"
            
        }}>
            <h1> List of to do from the API call</h1>
            <h2>Length of allToDo: {allToDo.length}</h2>
            <ol>
                {renderAllToDo()}
            </ol>
    
        </div>




    );
}

export default ToDoList;