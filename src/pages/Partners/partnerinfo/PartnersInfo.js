import "./partnersinfo.css";
import http1 from "../../variables";

const PartnersInfo = (props) => {
    return(
        <section className="partners_info">
            <div className="content_sec">
                <h2>{props.title}</h2>
                <p>{props.para}</p>
                
                <div className="img_alides">
                    <a href="https://www.nvidia.com/en-us/gpu-accelerated-applications/?search=sharepass" target="_blank">
                        <img   src={`${http1}${props.image1}`} />
                    </a>
                    <a href="https://www.yubico.com/works-with-yubikey/catalog/SharePass/" target="_blank">
                        <img   src={`${http1}${props.image2}`} />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default PartnersInfo;