import MainCourse from './MainCourse';
import Drink from './Drink';
import Dessert from './Dessert';

export default function Feed() {
    const MainCoursesData = [
        ["./assets/img/frango_yin_yang.svg", "Frango Yin Yang", "Um pouco de batata, um pouco de salada", "14,90"],
        ["./assets/img/file_ao_molho.jpeg", "Filé ao Molho", "Ao ponto e na medida", "24,90"],
        ["./assets/img/steak-and-fries.jpg", "Bife com Fritas", "Tradicional", "20,90"],
        ["./assets/img/frango_yin_yang.svg", "Frango Yin Yang", "Um pouco de batata, um pouco de salada", "14,90"],
        ["./assets/img/file_ao_molho.jpeg", "Filé ao Molho", "Ao ponto e na medida", "24,90"],
        ["./assets/img/steak-and-fries.jpg", "Bife com Fritas", "Tradicional", "20,90"]
    ];
    const DrinksData = [
        ["./assets/img/fanta_laranja.jpg", "Fanta Laranja", "Lata 350ml", "4,50"],
        ["./assets/img/fanta_uva.jpg", "Fanta Uva", "Lata 350ml", "4,50"],
        ["./assets/img/coquinha_gelada.svg", "Coca Gelada", "Lata 350ml", "4,95"],
        ["./assets/img/fanta_guarana.jpeg", "Guaraná Trincando", "Lata 350ml", "4,95"],
    ];
    const DessertsData = [
        ["./assets/img/pudim.svg", "Pudim", "Delicioso pudim de leite", "7,90"],
        ["./assets/img/brownie-com-morango.jpg", "Brownie de Morango", "Perfeito equilíbrio de sabores", "10,90"],
        ["./assets/img/brownie-de-chocolate.jpg", "Brownie de Chocolate", "Chocolatudo", "8,90"],
        ["./assets/img/pudim.svg", "Pudim", "Delicioso pudim de leite", "7,90"],
        ["./assets/img/brownie-com-morango.jpg", "Brownie de Morango", "Perfeito equilíbrio de sabores", "10,90"],
        ["./assets/img/brownie-de-chocolate.jpg", "Brownie de Chocolate", "Chocolatudo", "8,90"]
    ];
    return(
        <div class='feed'>
            <div class="scroll_title">
                Primeiro, seu prato
            </div>
            <div class="scroll_products">
                {MainCoursesData.map(data => <MainCourse image={data[0]} title={data[1]} description={data[2]} price={data[3]}/>)}
            </div>
            <div class="scroll_title">
                Agora, sua bebida
            </div>
            <div class="scroll_products">
                {DrinksData.map(data => <Drink image={data[0]} title={data[1]} description={data[2]} price={data[3]}/>)}
            </div>
            <div class="scroll_title">
                Por fim, sua sobremesa
            </div>
            <div class="scroll_products">
                {DessertsData.map(data => <Dessert image={data[0]} title={data[1]} description={data[2]} price={data[3]}/>)}
            </div>
        </div>
    );
}