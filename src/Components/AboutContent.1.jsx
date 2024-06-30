import { NavLink } from "react-router-dom";
import r1 from '../assets/resume.png';
import r2 from '../assets/lc.png';
import './AboutContent.css';
export default function AboutContent() {

    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm Yagneswar Palnati , Enthusiastic Reactjs Developer</p>
                <NavLink to='https://drive.google.com/file/d/1IBjaTb71hrR2_Qjv_fRFqJ5COfULEe5I/view?usp=drive_link' className='btn'>Resume</NavLink>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={r1} alt="top" className="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={r2} alt="top" className="img" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
