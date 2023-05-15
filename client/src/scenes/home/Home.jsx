import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import "../../css/Home.css";



const Home = () => {
    return <div className="home homeBackground">
        <MainCarousel />
        <ShoppingList />
        <Subscribe />
    </div>;
};

export default Home;