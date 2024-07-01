import { NavLink } from 'react-router-dom';
import './Footer.css';
import {FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTelegram} from 'react-icons/fa';
export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer-container'>
                 <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"white", marginRight:'2rem'}}/>
                        <p>Vijayawada , Andhra Pradesh ,</p>
                        <p>India.</p>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:"white", marginRight:'2rem'}}/>+91 7075979137</h4>
                    </div>
                    <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"white", marginRight:'2rem'}}/>palnatiyagneswar25@gmail.com</h4>
                    </div>
                 </div>
                 <div className="right">
                    <h4>About Me</h4>
                    <p>I am a motivated and dedicated student pursuing Artificial Intelligence. With a strong passion for Reactjs Developer, I am committed to honing my skills and expanding my knowledge. I thrive on tackling new challenges and continuously seek opportunities to grow both personally and professionally.</p>
                    <div className="social">
                    <NavLink to='https://www.linkedin.com/in/yagneswar-palnati-b41494240/'><FaLinkedin size={30} style={{color:"white", marginRight:'1rem'}}/></NavLink>
                    <NavLink to='https://t.me/Yagneswar25'><FaTelegram size={30} style={{color:"white", marginRight:'1rem'}}/></NavLink>
        
                    </div>
                 </div>
            </div>
        </div>
    );
}