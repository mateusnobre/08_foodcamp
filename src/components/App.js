import Top from './Top';
import Feed from './Feed';
import Bottom from './Bottom';
import React from 'react'

export default function App() {
    function constructMessage() {
        var totalPrice = (mainCourseQuantity * mainCoursePrice + drinkQuantity * drinkPrice + dessertQuantity * dessertPrice).toFixed(2)
        var text =`
            Olá, gostaria de fazer o pedido: \n
            - Prato: ${mainCourseQuantity > 1 ? mainCourseTitle + " " + mainCourseQuantity.toString() +"x" : mainCourseTitle} \n
            - Bebida: ${drinkQuantity > 1 ? drinkTitle + " " + drinkQuantity.toString() +"x" : drinkTitle} \n
            - Sobremesa: ${dessertQuantity > 1 ? dessertTitle + " " + dessertQuantity.toString() +"x" : dessertTitle} \n
            Total: R$ ${totalPrice} \n
            \n
            Nome: ${nome}\n
            Endereço: ${endereço}
        `
        return text
    }
    
    const [nome, setNome] = React.useState("Um cliente querido");
	const [endereço, setEndereço] = React.useState("Onde mora a felicidade");

    const [mainCourseQuantity, setMainCourseQuantity] = React.useState(-2);
	const [drinkQuantity, setDrinkQuantity] = React.useState(-2);
	const [dessertQuantity, setDessertQuantity] = React.useState(-2);
	
    const [mainCourseTitle, setMainCourseTitle] = React.useState(2);
	const [drinkTitle, setDrinkTitle] = React.useState(2);
	const [dessertTitle, setDessertTitle] = React.useState(2);
	
    const [mainCoursePrice, setMainCoursePrice] = React.useState(3);
	const [drinkPrice, setDrinkPrice] = React.useState(3);
	const [dessertPrice, setDessertPrice] = React.useState(3);

    const [activeMainCourseIndex, setActiveMainCourseIndex] = React.useState(-1);
    const [activeDrinkIndex, setActiveDrinkIndex] = React.useState(-2);
    const [activeDessertIndex, setActiveDessertIndex] = React.useState(-3);

    return(
        <body>
                <Top />
                <Feed mainCourseQuantity={mainCourseQuantity} drinkQuantity={drinkQuantity} dessertQuantity={dessertQuantity}
                    setMainCourseQuantity={setMainCourseQuantity} setDrinkQuantity={setDrinkQuantity} setDessertQuantity={setDessertQuantity}
                    setMainCourseTitle={setMainCourseTitle} setDrinkTitle={setDrinkTitle} setDessertTitle={setDessertTitle}
                    setMainCoursePrice={setMainCoursePrice} setDrinkPrice={setDrinkPrice} setDessertPrice={setDessertPrice}
                    setActiveMainCourseIndex={setActiveMainCourseIndex} setActiveDrinkIndex={setActiveDrinkIndex} setActiveDessertIndex={setActiveDessertIndex}
                    activeMainCourseIndex={activeMainCourseIndex} activeDrinkIndex={activeDrinkIndex} activeDessertIndex={activeDessertIndex}/>
                <Bottom mainCourseQuantity={mainCourseQuantity} drinkQuantity={drinkQuantity} dessertQuantity={dessertQuantity}
                    setNome={setNome} setEndereço={setEndereço} message={constructMessage()}/>
        </body>
    );
}