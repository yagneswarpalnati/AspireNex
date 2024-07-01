import NavBar from "../NavBar";
import Footer from "../Footer";
import HeroImg2 from "../HeroImg2";
import AboutContent from '../AboutContent.1';
export default function About(){
    return (
        <div>
            <NavBar/>
            <HeroImg2 heading='About.' text='Im a Friendly Front-End Developer'/>
            <AboutContent/>
            <Footer/>
        </div>
    );
}