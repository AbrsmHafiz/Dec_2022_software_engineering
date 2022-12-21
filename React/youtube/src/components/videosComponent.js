import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

//api name = https://pleasant-dungarees-duck.cyclic.app/add/song
//api name = https://pleasant-dungarees-duck.cyclic.app/get/song/all

function VideosComponent() {
     
    // *********GET DATA FROM API******************
    

    //01. Setup state which will be used to transfer response
    let [allvideos, updateALLVideos] = useState([])

    //02. Ddefine a function which will use axios to make API call
    let callVideoAPI = () => {
         axios.get("https://pleasant-dungarees-duck.cyclic.app/get/song/all ") //https://localhost:8000/get/song/all
             .then((Response) => {
                 console.log(Response.data);
                 updateALLVideos(Response.data)
             })
    }
 
    //03. Use useEffect hook to call callVideoAPI
    useEffect(() => {
         callVideoAPI()
    }, [])
 
    let renderAllVideos = () => {
         return allvideos.map((v) => {
             return (

                <li key={v._id}>
                    <iframe
                         width="300"
                         height="300"
                         src={"https://www.youtube.com/embed/" + v.videoid} //or can also backtick => `https://www.youtube.com/embed/${ v.videoid}`
                         title="YouTube video player" frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                     </iframe>
                    <br />
                    <hr />
                    <br />


                </li>

             )
 
         })
    }

    // **********************ADD DATA TO API
    //create state variables
    let [videoIdState, updateVideoIdState] = useState("")

    let captureVideoid = (event) => {
        updateVideoIdState(event.target.value)
    }

    let addNewVideo = () => {
        let newVideo = {
            "videoid": videoIdState,


        }
        console.log(newVideo);
        //masukkan dlm db
        axios.post("https://localhost:8000/add/song", newVideo)
            .then((response) => {
                console.log(response);
                callVideoAPI()
                updateVideoIdState("")

            })



    }





    return ( 

        <div>
            <div>
                {/* <h1>Add new video</h1> */}
                <div className='centre' style=
                    {{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "15px",
                        padding: "5px",
                        paddingBottom: "20px",
                        marginBottom:"7px"
                    }}
                >
                    <h1>Add new video</h1>
                    Video ID :
                    <input type="text" onChange={captureVideoid} value={videoIdState} />
                    <br />
                    <button onClick={addNewVideo} >Import</button>
                    <br />
                    {/* buat function addNewVideo (onClick={addNewVideo}) */}
                </div>
            </div>
            <div style=
                {{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    padding: "5px",
                    paddingBottom: "2px",
                }}
>
                <ol>
                {renderAllVideos()}
                </ol>
            </div>
            
        </div>
     );
}

export default VideosComponent;