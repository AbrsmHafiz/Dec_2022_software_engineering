import React, { useEffect, useState } from 'react';
import axios from 'axios'

function UserList() {
    
    let [allusers, updateAllUsers] = useState([])

    //useEffect hook is used to make API call
    //it will take two parameters
    //1. callback function
    //2. array
    // useEffect(()=>{}, [])
    useEffect(()=>{
        callUserApi()
    },[])

    let callUserApi = () =>{
        //use axios to make api call
        axios.get("https://jsonplaceholder.typicode.com/users")
            //if request is success, then , response is received
            //deal with the response in the call back function
            .then((response)=>{
                console.log(response);
                console.log(response.data);
                updateAllUsers(response.data)

            }
            )

    }

    let renderAllUsers = () => {
        return allusers.map((u)=>{
            return(
                <li key={u.id}>
                    {u.name}
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
            <h1> List of users from the API call</h1>
            <h2>Length of allUsers: {allusers.length}</h2>
            <ol >
                {renderAllUsers()}
            </ol>
    
        </div>
     );
}

export default UserList;