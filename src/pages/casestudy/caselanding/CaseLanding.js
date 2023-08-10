import TinyTitle from "../../../components/tinytitle/TinyTitle";
import "./caselanding.css";

import greenBg from "../../../assets/images/greenhalfelips.svg";

const CaseLanding = ({title, para, img}) => {

    return (
        <section className="case_landing">
            <img src={greenBg} alt="bg" className="bg" /> 
            <div className="content_sec">
                <div className="bigrid">
                    <div className="text_wrap">
                        <TinyTitle title="case study" textcolor="#000" />
                        <h1>{title}</h1>
                        <p>{para}</p>
                    </div>
                    <div className="img_wrap">
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default CaseLanding;