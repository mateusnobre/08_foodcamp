export default function Drink(props) {
    return(
            <div class="product drink">
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
            </div>
    );
}