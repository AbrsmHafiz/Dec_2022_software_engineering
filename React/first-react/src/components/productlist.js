import React from 'react';
import Product from './product';
import './style.css'


function ProductList() {
    return ( 
        
        <div style={{
            backgroundColor:"#fbd1a2",
            borderRadius:"10px",
            paddingLeft:"20px",
            paddingTop:"10px",
            paddingRight:"10px",    
            textAlign: "center"
            
            }}>
            <h1 className='orange centre' >I will contain list of products</h1>
            <h2 className='orange centre'>I will have multiple product component!</h2>
            <Product pName = "Huawei Best Wei" price = "2000" likes = "0"></Product>
            <Product pName = "Samsung Ultra Galaxy" price = "5000" likes = "0"></Product>
            <Product pName = "Xiao Mi"  price = "1500" likes = "0"></Product>
            <Product pName = "Red Note Mimi" price = "1999" likes = "0"></Product>
            <Product pName = "insta 360" price = "6000" likes = "0"></Product>
            <Product pName = "Google Pixel" price = "7000" likes = "0"></Product>

        </div>





     );
}

export default ProductList;



