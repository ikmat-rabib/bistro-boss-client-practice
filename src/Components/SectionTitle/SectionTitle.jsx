

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <p className="text-yellow-600 my-3">---{subHeading}---</p>
            <h2 className="text-3xl font-medium uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;