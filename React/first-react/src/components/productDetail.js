import React, {useState} from 'react';
import ProductAction from './productAction';
function ProductDetail(prop) {

    let displayLikes = prop.itemLikes
    let[currentPrice, updatePrice] = useState(100)

    let offerPrice = () => {

        updatePrice(currentPrice - 1)
        //below method does not work
        //updatePrice = currentPrice-1

    }

    let inflatePrice = () => {
        updatePrice(currentPrice + 1)
    }

    
   


    return ( 
    // jsx must be returned with one parent elemnt. so wrap em!!
    <div>
        <div>
            <span> Price : {prop.itemPrice} </span>
            <button onClick={inflatePrice}>+</button>
            <button onClick={offerPrice}>-</button>
        </div>
    
        <div>
            Offer price : MYR {currentPrice}
            <ProductAction finalLikes = {displayLikes} ></ProductAction>
        </div>


    </div>

     );
}

export default ProductDetail;