import React from 'react';
import { useInView } from 'react-intersection-observer';


const AnimatedElement = ({ data, index }) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    
    return (
        <div key={index} ref={ref} className="blog" style={{opacity: inView ? 1 : 0, transition: "all 1.5s ease-in-out"}}>
            <div className="img_wrap">
                <img
                    src={data.img? data.img : ''}
                />
            </div>
            <h3>{data.title ? data.title : ''}</h3>
            <p>{data.description ? data.description : ''}</p>
        </div>
    );
};

const EnterpriseFeature = ({ elements }) => {

    return (
        <div className="post_grid">
          {elements.map((data, index) => {
            return <AnimatedElement key={index} index={index} data={data} />
          })}
        </div>
    );
};

export default EnterpriseFeature;