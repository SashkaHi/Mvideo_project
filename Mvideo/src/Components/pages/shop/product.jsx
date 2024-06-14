import React, {useContext} from 'react';
import "./shop.css"
import {ShopContext} from "../../context/shop-context.jsx";

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="product">
            <img src={productImage}/>
            <div className="discription">
                <p>
                    <b>{productName}</b>
                </p>
                <p>₽{price}</p>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default Product;