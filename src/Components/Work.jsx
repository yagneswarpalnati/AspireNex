import './WorkCard.css';
import WorkCard from './WorkCard';
import Data from './WorkCardData';
export default function Work(){
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {Data.map((val,idx)=>{
                    return (
                        <WorkCard
                            key={idx}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    );
                })}
            </div>
        </div>
    );
}