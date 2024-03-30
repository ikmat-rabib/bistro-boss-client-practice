import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} pText="Would you like to try a dish?"></Cover>}
             <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 flex mx-auto border-b-4 my-5 ">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;