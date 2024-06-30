import './WorkCard.css';
import project_img from '../assets/pr1.png';
import { NavLink } from 'react-router-dom';
export default function WorkCard({imgsrc,title,text,view,source}){
    return (
        <div className="project-card">
            <img src={imgsrc} alt="Project-image" />
            <h1 className="project-title">{title}</h1>
            <div className="pro-details">
                <p>{text}</p>
                <div className="pro-btn">
                    <NavLink to={view} className='btn'>View</NavLink>
                    <NavLink to={source} className='btn'>Source</NavLink>
                </div>
            </div>
        </div>
    );
}