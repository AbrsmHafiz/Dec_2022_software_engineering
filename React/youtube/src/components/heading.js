import React from 'react';
import './style.css'
function HeadingComponent() {
    return (  
        <div style={{
            backgroundColor: "#aeaeae", // #7dcfb6
            borderRadius: "15px",
            paddingTop: "1px",
            
        }}>
            
            <div>
                <span>
                    <img src="image/image-2.png" alt='none' />  
                </span>
                <span> 
                    <h1 className='centre yellow'>
                        <span className='centre yellow'> MyYoutubeApp</span>
                        <span className='rightSide centre'>Option</span>
                       
                    </h1>
                </span> 
            </div>
            <hr />
            {/* <h1>MyYoutubeApp</h1>
            <h1>Options</h1> */}
        </div>
    );
}

export default HeadingComponent;