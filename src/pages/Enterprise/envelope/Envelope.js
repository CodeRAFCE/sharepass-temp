import './envelope.css';
import http1 from '../../variables';
import { Fragment, useRef, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import envelopeVideo from "../../../assets/animations/SharePass-Envelope.mp4";

const Envelope = (props) => {

    const [first, setFirst] = useState(false);


    return (
        <Fragment>
            <section className='features_sec' id='features'>
                <div className='content_sec'>
                    <InView onChange={(inView, entry) => {
                        if (inView) {
                            setFirst(true)
                        } else {
                            setFirst(false)
                        }
                    }}>
                        <div className='flap center' style={{opacity:first ? 1 : 0, transition:'all 1.5s ease-in-out'}}>
                            <div className='text_wrap pr'>
                                <h2>Receive data securely</h2>
                                <p>Use our envelope feature to request confidential data from third parties securely and smoothly</p>
                            </div>
                            <div className='video_wrap'>
                                <video
                                    className='img_video'
                                    src={envelopeVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                        </div>
                    </InView>
                </div>
            </section>
        </Fragment>
    )
}

export default Envelope;