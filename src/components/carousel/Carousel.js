import { useEffect, useState, Fragment } from "react";
import './carousel.css';

const Carousel = ({items, title, full=false, className}) => {
    const [isMarqueePaused, setIsMarqueePaused] = useState(false);

    return (
        <div className={`review_us ${className}`}>
            <div className='content_sec' >          
                <h2>{title}</h2>
                <div 
                    className="review_slider" 
                    onMouseOver={()=>{
                        setIsMarqueePaused(true);
                    }}
                    onMouseOut={()=>{
                        setIsMarqueePaused(false);
                    }}
                
                >
                    <div className="marquee-review" style={!isMarqueePaused? { animationDuration: "25s" } : {animationDuration: "25s", animationPlayState: "paused"}}>
                        {
                            items && items.map((post, j) => (
                                <Fragment key={j}>
                                    {!full ? <a target="_blank" href={post.link} >
                                        <img
                                            src={post.image}
                                            title=""
                                            className="marqueelogo"
                                            style={{ height: "50px", width: "auto", maxWidth: "auto" }}

                                        />
                                    </a> : post}
                                </Fragment>
                            ))
                        }
                    </div>
                    <div className="marquee-review" style={!isMarqueePaused? { animationDuration: "25s" } : {animationDuration: "25s", animationPlayState: "paused"}}>
                        {
                            items.map((post, k) => (
                                <Fragment key={k}>
                                {!full ? <a target="_blank" href={post.link} >
                                    <img
                                        src={post.image}
                                        title=""
                                        className="marqueelogo"
                                        style={{ height: "50px", width: "auto", maxWidth: "auto" }}
                                    />
                                </a> : post}
                                </Fragment>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousel;