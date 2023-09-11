import "./partnerslanding.css";
import http1 from "../../variables";
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import { useNavigate } from "react-router-dom";
import imagePartner from '../../../assets/images/Sharepass-partner.png'

const PartnersLanding = ({title, para, image}) => {
    const navigate = useNavigate();
    const becomePartner = () =>{
        navigate('/becomepartner');
    };
    return(
        <section className="partners">
            <div className="content_sec">
                <div className="bi_grid">
                    <div className="text">
                        <TinyTitle title="PARTNERS" textcolor="#fff" />
                        <h1>{title}</h1>
                        <p className="para">{para}</p>
                        <button type='button' className="second" onClick={becomePartner} >
                            Become Partner
                        </button>
                    </div>
                    <div className="img">
                    <img src={imagePartner} alt='landing'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersLanding;