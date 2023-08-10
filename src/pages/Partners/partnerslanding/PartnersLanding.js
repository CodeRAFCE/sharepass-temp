import "./partnerslanding.css";
import http1 from "../../variables";
import TinyTitle from "../../../components/tinytitle/TinyTitle";

const PartnersLanding = ({title, para, image}) => {
    return(
        <section className="partners">
            <div className="content_sec">
                <div className="bi_grid">
                    <div className="text">
                        <TinyTitle title="PARTNERS" textcolor="#fff" />
                        <h1>{title}</h1>
                        <p className="para">{para}</p>
                    </div>
                    <div className="img">
                    <img src={`${http1}${image}`} alt='landing'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersLanding;