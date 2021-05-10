import Dish from './Dish';
import React from 'react';

export default function Feed(props) {
    function selectDish(props) {
        if (props.activeIndex !== props.index){
            props.setQuantity(1);
            props.setIndex(props.index);
            props.setTitle(props.title);
            props.setPrice(props.price);
        }
    };
	
    const MainCoursesData = [
        ["./assets/img/frango_yin_yang.svg", "Frango Yin Yang", "Um pouco de batata, um pouco de salada", 14.90, 0],
        ["./assets/img/file_ao_molho.jpeg", "Filé ao Molho", "Ao ponto e na medida", 24.90, 1],
        ["./assets/img/steak-and-fries.jpg", "Bife com Fritas", "Tradicional", 20.90, 2],
        ["./assets/img/frango_yin_yang.svg", "Frango Yin Yang", "Um pouco de batata, um pouco de salada", 14.90, 3],
        ["./assets/img/file_ao_molho.jpeg", "Filé ao Molho", "Ao ponto e na medida", 24.90, 4],
        ["./assets/img/steak-and-fries.jpg", "Bife com Fritas", "Tradicional", 20.90, 5]
    ];
    const DrinksData = [
        ["./assets/img/fanta_laranja.jpg", "Fanta Laranja", "Lata 350ml", 4.50, 0],
        ["./assets/img/fanta_uva.jpg", "Fanta Uva", "Lata 350ml", 4.50, 1],
        ["./assets/img/coquinha_gelada.svg", "Coca Gelada", "Lata 350ml", 4.95, 2],
        ["./assets/img/fanta_guarana.jpeg", "Guaraná Trincando", "Lata 350ml", 4.95, 3],
    ];
    const DessertsData = [
        ["./assets/img/pudim.svg", "Pudim", "Delicioso pudim de leite", 7.90, 0],
        ["./assets/img/brownie-com-morango.jpg", "Brownie de Morango", "Perfeito equilíbrio de sabores", 10.90, 1],
        ["./assets/img/brownie-de-chocolate.jpg", "Brownie de Chocolate", "Chocolatudo", 8.90, 2],
        ["./assets/img/pudim.svg", "Pudim", "Delicioso pudim de leite", 7.90, 3],
        ["./assets/img/brownie-com-morango.jpg", "Brownie de Morango", "Perfeito equilíbrio de sabores", 10.90, 4],
        ["./assets/img/brownie-de-chocolate.jpg", "Brownie de Chocolate", "Chocolatudo", 8.90, 5]
    ];
    return(
        <div class='feed'>
            <div class="scroll_title">
                Primeiro, seu prato
            </div>
            <div class="scroll_products">
                {MainCoursesData.map(data => <Dish onClick={selectDish} image={data[0]} title={data[1]} description={data[2]} price={data[3]} index={data[4]} quantity={props.mainCourseQuantity} setQuantity={props.setMainCourseQuantity} activeIndex={props.activeMainCourseIndex} setIndex={props.setActiveMainCourseIndex} setPrice={props.setMainCoursePrice} setTitle={props.setMainCourseTitle}/>)}
            </div>
            <div class="scroll_title">
                Agora, sua bebida
            </div>
            <div class="scroll_products">
                {DrinksData.map(data => <Dish onClick={selectDish} image={data[0]} title={data[1]} description={data[2]} price={data[3]} index={data[4]} quantity={props.drinkQuantity} setQuantity={props.setDrinkQuantity} activeIndex={props.activeDrinkIndex} setIndex={props.setActiveDrinkIndex} setPrice={props.setDrinkPrice} setTitle={props.setDrinkTitle}/>)}
            </div>
            <div class="scroll_title">
                Por fim, sua sobremesa
            </div>
            <div class="scroll_products">
                {DessertsData.map(data => <Dish onClick={selectDish} image={data[0]} title={data[1]} description={data[2]} price={data[3]} index={data[4]} quantity={props.dessertQuantity} setQuantity={props.setDessertQuantity} activeIndex={props.activeDessertIndex} setIndex={props.setActiveDessertIndex} setPrice={props.setDessertPrice} setTitle={props.setDessertTitle}/>)}
            </div>
        </div>
    );
}