import "./connectingworld.css";
import http1 from '../../variables';
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import LearnMore from "../../../components/learnmore/LearnMore";

const ConnectingWorld = ({ image, title, para }) => {
    return (
        <section className="connecting">
            <div className="content_sec">
                <div className="grid_sec">
                    <div className="img_wrap">
                        <img
                            src={`${http1}${image}`}
                        />
                    </div>
                    <div className="text_wrap">
                        <TinyTitle title="Home" textcolor='#fff' 
                        />
                        <h2>{title}</h2>
                        <p className="para">{para}</p>
                       <LearnMore
                        title="Learn More"
                        top='25px'
                        boxcolor="green"
                        textcolor="#fff"
                        path="/technology"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ConnectingWorld;