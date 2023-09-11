import "./partnersinfo.css";
import http1 from "../../variables";
import nvidiaInception from '../../../assets/images/nvidia-inception.png';
import wwyk from '../../../assets/images/WWYK.png';

const PartnersInfo = (props) => {
    return(
        <section className="partners_info">
            <div className="content_sec">
                <h2>{props.title}</h2>
                <p>{props.para}</p>
                
                <div class="partners-distributor-container">
                    <div class="partners-distributor-item">
                        <div className="partners-distributor-item-content">
                            <img className="partners-distributor-centered-image" src={nvidiaInception} />
                            <a className="partners-distributor-button" href="https://www.nvidia.com/en-us/gpu-accelerated-applications/?search=sharepass" target="_blank">
                                Know more
                            </a>
                        </div>
                    </div>
                    <div class="partners-distributor-item">
                        <div className="partners-distributor-item-content">
                            <img className="partners-distributor-centered-image" src={wwyk} />
                            <a className="partners-distributor-button" href="https://www.yubico.com/works-with-yubikey/catalog/SharePass/" target="_blank">
                                Know more
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PartnersInfo;