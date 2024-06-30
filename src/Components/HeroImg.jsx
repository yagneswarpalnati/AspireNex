import Intro from '../assets/IntoU.jpg';
import { Link } from 'react-router-dom';
import './HeroImg.css';
export default function HeroImg(){
    return (
        <div className="hero">
            <div className="mask">
                <img  className='into-img' src={Intro} alt="IntroImg" />
            </div>
            <div className='content'>
                <p>Hi,I'm a Web Developer</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to='/project'className='btn'>Project</Link>
                    <Link to='/about'className='btn btn-light'>About</Link>
                </div>
            </div>
        </div>

    );
}