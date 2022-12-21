import React from 'react';
import ProductDetail from './productDetail';
import ProductTitle from './productTitle';
function Product(prop) {

    let productName = prop.pName
    let productPrice = prop.price
    let productLikes = prop.likes
    

    let productAction = ()=>{
        return(
            <span>
                <button style={{
                    color:"red"
                }}>Buy</button>
                
            </span>
        )


    }


    return ( 
        

        <div style={{
                color:"red",        
                border: "1px solid green",
                borderRadius: "5px",
                margin:"5px",
                padding:"10px",
                backgroundColor:"beige"
                }}> 
            <h3>I am a product component</h3>
            <br />
            Product name : <ProductTitle itemName = {productName}></ProductTitle>
            <br />
            <ProductDetail itemPrice = {productPrice} itemLikes = {productLikes}></ProductDetail>
            <br />
            {productAction()}


        </div>
     );
}

export default Product;