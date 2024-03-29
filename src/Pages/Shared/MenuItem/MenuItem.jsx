

const MenuItems = ({ item }) => {

    const { name, recipe, image, price } = item

    return (
        <div className="flex space-x-4">
            <img className="w-[100px] h-[100px] rounded-b-full rounded-tr-full" src={image} alt="" />
            <div className="my- flex">
                <div >
                    <h3 className="uppercase mb-3">{name}----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;