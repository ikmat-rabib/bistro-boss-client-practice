import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredBg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 pb-10 my-20 bg-fixed ">
            <SectionTitle subHeading={'Check It Out'} heading={'featured item'}></SectionTitle>
            <div  className="md:flex justify-center items-center gap-10 py-8 px-16 bg-slate-500 bg-opacity-50">
                <div>
                    <img className="w-" src={featuredBg} alt="" />
                </div>
                <div className="">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;