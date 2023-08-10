import "./landing.css";
import video from "../../../assets/animations/hero-banner/Desktop.mp4";
import mobilevideo from "../../../assets/animations/hero-banner/Mobile.mp4";
//import mobilevideo from "../../../assets/animations/hero-banner/video-compressed.webm";
import { useEffect, useState } from 'react';
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import WistiaPlayer from "./video/WistiaVideo";

const Landing = ({ title, para }) => {
    const [popupStatus, setPopupStatus] = useState(false);
    
    const closePopup = () => {
        setPopupStatus(false);
        window.scrollTo(0, 0);
    }

    const openPopup = () => {
        setPopupStatus(true);
    }

    /*const goToFeature = () => {
        document.getElementById('features').scrollIntoView({
            behavior: 'smooth'
        });
    }*/

    return (<>
        {!popupStatus ?
            <div className="landing">
                {/* video for screen > 1200px*/}
                <video
                    className="landingv"
                    src={video}
                    loop
                    autoPlay
                    muted
                    playsInline
                />
                {/* Video for <=1200px */}
                <video
                    className="mobile_video"
                    src={mobilevideo}
                    loop
                    autoPlay
                    muted
                    playsInline
                />
                <div className="content_sec">
                    <div className="text_side">
                        <TinyTitle title='sharepass' textcolor="#000" />
                        <h1>Don’t risk it, SharePass it!</h1>
                        <p className="para">An online digital security solution for confidential information sharing and digital footprint management.</p>
                        <div className="btn_wrap">
                                <button type='button' className="first" onClick={openPopup} >
                                    Why SharePass
                                    {false && <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="normal"
                                    >   
                                        <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                                            fill="#000" strokeWidth="1" stroke="#000" />
                                    </svg>}

                                    {false && <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        //className="hover"
                                    >
                                        <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                                            fill="#FFF" strokeWidth="1" stroke="#FFF" />
                                    </svg>}

                                    <svg 
                                        height="16" 
                                        width="16" 
                                        version="1.1" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        //xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        viewBox="0 0 512 512" 
                                        //xml:space="preserve" 
                                        fill="#fff"
                                    >
                                        <g strokeWidth="0"></g>
                                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g> 
                                            <g> 
                                                <path fill="#fff" d="M0,74.451v363.098h512V74.451H0z M71.524,167.241H47.957c-4.215,0-7.633-3.417-7.633-7.632v-42.974 c0-4.215,3.418-7.631,7.633-7.631h23.566c4.215,0,7.631,3.416,7.631,7.631v42.974C79.154,163.824,75.738,167.241,71.524,167.241z M47.957,221.844h23.566c4.215,0,7.631,3.417,7.631,7.633v42.974c0,4.215-3.416,7.632-7.631,7.632H47.957 c-4.215,0-7.633-3.417-7.633-7.632v-42.974C40.324,225.261,43.742,221.844,47.957,221.844z M47.957,344.758h23.566 c4.215,0,7.631,3.418,7.631,7.632v42.975c0,4.215-3.416,7.632-7.631,7.632H47.957c-4.215,0-7.633-3.417-7.633-7.632V352.39 C40.324,348.176,43.742,344.758,47.957,344.758z M198.982,326.856V185.144c0-5.875,6.359-9.547,11.447-6.609l122.725,70.856 c5.088,2.937,5.088,10.281,0,13.218L210.43,333.465C205.342,336.402,198.982,332.73,198.982,326.856z M464.041,167.241h-23.565 c-4.215,0-7.633-3.417-7.633-7.632v-42.974c0-4.215,3.418-7.631,7.633-7.631h23.565c4.215,0,7.631,3.416,7.631,7.631v42.974 C471.672,163.824,468.256,167.241,464.041,167.241z M440.476,221.844h23.565c4.215,0,7.631,3.417,7.631,7.633v42.974 c0,4.215-3.416,7.632-7.631,7.632h-23.565c-4.215,0-7.633-3.417-7.633-7.632v-42.974 C432.844,225.261,436.262,221.844,440.476,221.844z M440.476,344.758h23.565c4.215,0,7.631,3.418,7.631,7.632v42.975 c0,4.215-3.416,7.632-7.631,7.632h-23.565c-4.215,0-7.633-3.417-7.633-7.632V352.39 C432.844,348.176,436.262,344.758,440.476,344.758z"></path> 
                                            </g> 
                                        </g>
                                    </svg>
                                </button>                     
                        </div>
                    </div>
                </div>
            </div>
            :
            <WistiaPlayer
                closePopup={closePopup}
            />
        }
    </>)
}

export default Landing;