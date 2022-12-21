import React from 'react';
import './style.css'
import VideosComponent from './videosComponent';

function MainComponent() {
    return (  
        <div style={{
            backgroundColor:"#6E9BE5",
            borderRadius: "15px",
            padding: "5px",
            paddingBottom: "100000px",


        }}>

            <h1 className='centre'>Main Page</h1>
            <div  
            // style=
            // {{
            // backgroundColor:"#FFFFFF",
            // borderRadius: "15px",
            // padding: "5px",
            // paddingBottom: "2px",
            // }}
            >
                <VideosComponent></VideosComponent>
            </div>

        </div>



    );
}

export default MainComponent;