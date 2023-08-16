import './resourceslanding.css';
import landingimg from "../../../assets/images/blocklanding1.png";

const ResourcesLanding = () => {
    return <>
        {false && <section className='resources_landing'>
            <div className='content_sec'>
                <div className='bigrid'>
                    <div className='text_wrap'>
                            <h1>SharePass Blog</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                    <div className='img_wrap'>
                    <img src={landingimg} alt='img' />
                    </div>
                </div>
            </div>
        </section>}
        <section className='resources_landing'>
            <div className='content_sec'>
                <div className='bigrid'>
                    <div className='text_wrap'>
                            <h1>How to use SharePass</h1>
                            <p>Explore our guided video tutorials on using our powerful app. From getting started to advanced features, our experts will walk you through step-by-step instructions and practical demos. Maximize your app's potential and achieve your goals effortlessly!</p>
                    </div>
                    <div className='yt-video-container'>
                        <iframe 
                            width="auto" 
                            height="auto" 
                            src="https://www.youtube.com/embed?v=JgQLbposMW4&list=PLX59VfUF4v2AVg0vMKbZMzHls5c0WvOju&rel=0" 
                            title="How to use SharePass" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share; fullscreen" 
                            allowFullScreen={true}>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default ResourcesLanding;