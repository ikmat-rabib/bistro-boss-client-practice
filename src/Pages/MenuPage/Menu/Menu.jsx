
import { Helmet } from 'react-helmet-async';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import menuImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';

const Menu = () => {

    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const soup= menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* page cover */}
            <Cover img={menuImg} title="OUR MENU" pText="Would you like to try a dish?"></Cover>
            
            <SectionTitle heading={"Todays Offer"} subHeading={"---Don't miss---"}></SectionTitle>

            {/* offered items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desert items */}
            <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>

            {/* Salad items */}
            <MenuCategory items={salad} title={"salad"} img={dessertImg}></MenuCategory>

            {/* pizza items */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

            {/* soup items */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;