import './resourceslanding.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useNavigate } from "react-router-dom";
import resourcesImg from '../../../assets/images/resources-landing.png';

const ResourcesLanding = () => {

    const navigate = useNavigate();

    return <>
        <section className='resources_landing'>
            <div className='content_sec'>
                <div className='bigrid'>
                    <div className='text_wrap'>
                        <h1>How to use SharePass</h1>
                        <p>Explore our guided video tutorials on using our powerful app. From getting started to advanced features, our experts will walk you through step-by-step instructions and practical demos. Maximize your app's potential and achieve your goals effortlessly!</p>

                        <div className="btn_wrap">
                            <button onClick={() => {navigate('/videolibrary');}} type="button" className='outlined-purple'>EXPLORE VIDEO LIBRARY</button>
                        </div>

                    </div>

                    <div className='img_wrap'>
                        <img src={resourcesImg} />
                    </div>

                </div>
            </div>
        </section>
    </>;
}

export default ResourcesLanding;