import "./missionvision.css";
import { useState } from "react";
import { InView } from 'react-intersection-observer';
import missionVisionImg from '../../../assets/images/Mission-Vision.png';


const MissionVision = ({ title, para, image }) => {

    const [visible, setVisible] = useState(false);

    return (
        <section className="mission_vision">
            <div className="content_sec">
                <InView onChange={(inView, entry) => {
                    if (inView) {
                        setVisible(true)
                    }else{
                        setVisible(false)
                    }
                }}>
                    <div className="bigrid" style={{opacity:visible ? 1 : 0, transition:'all 1.5s ease-in-out'}}>
                        <div className="text_wrap">
                            <h2>{title}</h2>
                            <p>{para}</p>
                        </div>
                        <div className="img_wrap">
                            <img src={missionVisionImg} alt='vision' />
                        </div>
                    </div>
                </InView>
            </div>
        </section>
    )
}

export default MissionVision;