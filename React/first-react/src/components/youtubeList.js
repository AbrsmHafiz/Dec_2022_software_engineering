import React, { useEffect, useState } from 'react';
import axios from 'axios';
//api name = https://pleasant-dungarees-duck.cyclic.app/add/song
//api name = https://pleasant-dungarees-duck.cyclic.app/get/song/all



function YoutubeList() {

    //create state variables
    let [videoIdState, updateVideoIdState] = useState("")
    let [likesState, updateLikesState] = useState(0)
    let [viewsState, updateViewsState] = useState(0)
    let [dislikeState, updateDislikeState] = useState(0)




    //01. Setup state which will be used to transfer response
    let [allvideos, updateALLVideos] = useState([])

    //02. Ddefine a function which will use axios to make API call
    let callVideoAPI = () => {
        axios.get("https://pleasant-dungarees-duck.cyclic.app/get/song/all")
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

                    Likes: {v.likes} ,
                    Dislikes:{v.dislikes} ,
                    Views:{v.views}
                    <hr />

                </li>
            )

        })
    }

    let captureVideoid = (event) => {
        console.log(event.target.value)
        updateVideoIdState(event.target.value)
    }

    let captureLikes = (event) => {
        // console.log(event.target.value)
    }

    let captureDislikes = (event) => {
        // console.log(event.target.value)
    }

    let captureViews = (event) => {
        // console.log(event.target.value)

    }

    let addNewVideo = () => {
        let newVideo = {
            "videoid": videoIdState,
            "likes": likesState,
            "dislikes": dislikeState,
            "views": viewsState

        }
        console.log(newVideo);
        //masukkan dlm db
        axios.post("https://pleasant-dungarees-duck.cyclic.app/add/song", newVideo)
            .then((response) => {
                console.log(response);
                callVideoAPI()
                updateVideoIdState("")

            })



    }


    return (

        <div
            style={{
                backgroundColor: "lightcyan",
                borderRadius: "10px",
                paddingLeft: "20px",
                paddingTop: "10px",
                paddingRight: "10px"

            }}>
            <h1 className='centre'>List of videos from Youtube</h1>
            <div>
                <div>
                    <h1>Add new video:</h1>
                    <div>
                        Video ID:
                        <input type="text" onChange={captureVideoid} value={videoIdState} />
                        <br />
                        Likes:
                        <input type="number" value={0} readOnly />
                        <br />
                        Dislikes:
                        <input type="number" value={0} readOnly />                        <br />
                        Views:
                        <input type="number" value={0} readOnly />                        <br />
                        <button onClick={addNewVideo} >Add</button>




                    </div>
                </div>
                <ol>
                    {renderAllVideos()}
                </ol>
            </div>

        </div>
    );
}

export default YoutubeList;