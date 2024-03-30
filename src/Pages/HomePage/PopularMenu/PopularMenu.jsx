
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
// import { useEffect, useState } from "react";
import MenuItems from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {


    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === "popular")
    //         setMenu(popularItems)})
    // },[])

    return (
        <section className="mb-12">
            <SectionTitle 
            heading={'FROM OUR MENU'}
            subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <button className="btn btn-outline flex mx-auto border-0 border-b-4 mt-6">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;