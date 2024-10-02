import ProductList from "../../components/(ui)/ProductList"; // Adjust path according to your structure


const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
            <ProductList />
        </div>
    );
};

export default HomePage;
