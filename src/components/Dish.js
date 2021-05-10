import React from 'react';
export default function Dish(props) {
    
    function decreaseQuantity(){
        if(props.quantity === 1){
            props.setQuantity(props.quantity - 1);
            props.setIndex(777);
        }
        else {props.setQuantity(props.quantity - 1);}
    }
    
    return(
            <div class= {props.activeIndex === props.index ? "product selected_product" : "product"} onClick={() => props.onClick(props)}>
                <div class="product_image">
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div class="product_title">
                    {props.title}
                </div>
                <div class="product_description">
                    {props.description}
                </div>
                <div class="product_price">
                    R$ {props.price}
                </div>
                <div class= {props.activeIndex === props.index ? 'product_quantifier' : 'product_quantifier off'}>
                    <div class='decrease_quantity' onClick={decreaseQuantity}>-</div>
                    {props.quantity}
                    <div class='increase_quantity' onClick={() => props.setQuantity(props.quantity + 1)}>+</div>
                </div>
            </div>
    );
};