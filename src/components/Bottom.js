export default function Bottom(props) {
    function processOrder() {
        props.setNome(prompt("Como podemos te chamar?", "Um cliente querido"));
        props.setEndereço(prompt("Onde vamos entregar amor e carinho em forma dos nossos pratos?", "Onde mora a felidade"));
        var text = encodeURIComponent(props.message);
        window.open(`https://wa.me/?text=${text}`)
    }
    if (props.mainCourseQuantity >= 1  && props.drinkQuantity >= 1 && props.dessertQuantity >= 1 ){
        return(
            <div class="bottom" onClick={processOrder}>
                <div class="bottom_text finished_order">
                    Fechar Pedido
                </div>
            </div>
            );
    }
    else {
        return(
            <div class="bottom">
                <div class="bottom_text">
                    Selecione os 3 itens
                    para fechar o pedido
                </div>
            </div>
        );
    }
}