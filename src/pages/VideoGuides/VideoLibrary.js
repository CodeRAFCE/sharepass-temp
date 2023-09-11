import TinyTitle from "../../components/tinytitle/TinyTitle";
import { useNavigate } from "react-router-dom";
import LearnMore from "../../components/learnmore/LearnMore";

const VideoLibrary = (props) => {

    const navigate = useNavigate();

    return(<>
        <section className="about_landing">
            <div className="content_sec">
                <div className="text_wraper">
                    <TinyTitle className='text-center' title="How to" />
                    <h1 className='text-center'>Video Library</h1>
                    <p className="para">Whether you're on your desktop using our web app or on the move with our mobile app, our demos offer an in-depth look at our solution's capabilities. Enjoy a rich, full-screen experience on your computer, or switch to your mobile device for on-the-go learning. Explore step-by-step tutorials and feature showcases that cater to all skill levels. Unleash the power of SharePass at your fingertips or with a click. Begin your SharePass journey now.</p>
                </div>
            </div>

            <div className="content_sec">
               
                <div class="partners-distributor-container mb-5">
                    <div class="partners-distributor-item dark-bg">
                        <div className="partners-distributor-item-content">
                            <h3 className="mb-2">SharePass Web Portal</h3>
                            <p className="mb-2">Learn how to use SharePass's web application. You will find multiple videos explaining all features in our free version. Which is open to anyone who would like to securely share information in simple steps.</p>
                            
                            <LearnMore
                                title="Learn More"
                                top='25px'
                                boxcolor="green"
                                textcolor="#fff"
                                path="/howto/webportal"
                            />
                        </div>
                    </div>
                    <div class="partners-distributor-item dark-bg">
                        <div className="partners-distributor-item-content">
                            <h3 className="mb-2">SharePass One</h3>
                            <p className="mb-2">For companies and enterprises our stellar product SharePass One. Check all its advanced features and how to use them in this video gallery. Take the most out of your SharePass instance!</p>
                            <LearnMore
                                title="Learn More"
                                top='25px'
                                boxcolor="green"
                                textcolor="#fff"
                                path="/howto/sharepassone"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
    )
}

export default VideoLibrary;