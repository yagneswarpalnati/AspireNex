import NavBar from "../NavBar";
import Footer from "../Footer";
import HeroImg2 from "../HeroImg2";
import Work from "../Work";
export default function Projects(){
    return (
        <div>
            <NavBar/>
            <HeroImg2  heading='Projects.' text='Some of my most recent works.' />
            <Work/>
            <Footer/>
        </div>
    );
}