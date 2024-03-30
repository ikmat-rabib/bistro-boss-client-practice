

const FoodCard = ({item}) => {

    const { name, recipe, image, price } = item

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-8 top-4 px-3 py-2 bg-slate-900 text-white">${price}</p>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 mt-5 ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;