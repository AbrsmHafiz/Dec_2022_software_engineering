import React, { useState } from 'react';
import './style.css'
function ProductAction(prop) {

    let screenLikes = prop.finalLikes
    let [currentLike, updateLike] = useState(parseInt(screenLikes))   //states

    let increaseLike = () => {
        updateLike(currentLike + 1)
    }

    let decreaseLike = () => {
        updateLike(currentLike - 1)
    }

    return (
        <div style={{ color: "blue" }}>
            <span className='likeStyle'>Likes : {currentLike}   </span>
            <button onClick={increaseLike}>+</button>
            <button onClick={decreaseLike}>-</button>

        </div>
    );
}

export default ProductAction;