import "./findplan.css";
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import http1 from "../../variables";
import { useNavigate } from "react-router-dom";

const FindPlan = (props) => {

    const navigate = useNavigate()

const goToPlan = () => {
navigate("/pricing");
}

    return(
        <section className="find_plan">
            <div className="content_sec">
                <div className="grids_sec">
                    <div className="left">
                        <div className="wrap">
                        <TinyTitle title="home" textcolor='#fff' />
                        <h2>Find Your Perfect Plan</h2>
                        <p className="text">Choose from various pricing plans with flexible options to fit your needs and budget. Our free version offers limited features, while our paid plans provide additional capabilities and customization options. Whether you're an individual or a business looking to safeguard confidential information, we have a correct pricing plan. Enjoy peace of mind knowing your data is safe and secure with our cutting-edge privacy platform.</p>
                       
                        </div>
                    </div>
                    <div className="right">
                        

                        <div className="block">
                            <img src={`${http1}${props.image4}`} alt='icon'/>
                            <h3>{props.title2}</h3>
                            <p>{props.para2}</p>
                        </div>

                        

                        <div className="block">
                            <img src={`${http1}${props.image2}`} alt='icon'/>
                            <h3>{props.title4}</h3>
                            <p>{props.para4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindPlan;