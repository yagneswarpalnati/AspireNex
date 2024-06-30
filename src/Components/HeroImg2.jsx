import './HeroImg2.css';

export default function HeroImg2({heading,text}){
    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}