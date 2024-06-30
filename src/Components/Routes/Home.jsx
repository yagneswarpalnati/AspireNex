
import './Home.css';
import NavBar from "../NavBar";
import HeroImg from "../HeroImg";
import Footer from "../Footer";
import Work from '../Work';



export default function Home(){
    
    return (
        <>
            <div>
                <NavBar/>
                <HeroImg/>
                <Work/>
                <Footer/>
            </div>
        </>
    );
}