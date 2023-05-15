import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import Footer from "../global/Footer";
import "../../css/Home.css";



const Home = () => {
    return <div className="home homeBackground">
        <MainCarousel />
        <ShoppingList />
        <Subscribe />
        <Footer />
    </div>;
};

export default Home;