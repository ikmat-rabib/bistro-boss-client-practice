
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MenuItems from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {


    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular")
            setMenu(popularItems)})
    },[])

    return (
        <section className="mb-12">
            <SectionTitle 
            heading={'FROM OUR MENU'}
            subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;