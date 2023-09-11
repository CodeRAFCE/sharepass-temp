import "./distributorsinfo.css";
import http1 from "../../variables";

const DistributorsInfo = (props) => {
    return(
        <section className="distributors_info">
        <div className="content_sec">
            <h2>{props.title}</h2>
            <p>{props.para}</p>
            
            <div class="partners-distributor-container">
                    <div class="partners-distributor-item">
                        <div className="partners-distributor-item-content">
                            <img className="partners-distributor-centered-image" src={`${http1}${props.image}`} />
                            <a className="partners-distributor-button" href="https://natan.com.au" target="_blank">
                                Know more
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    )
}

export default DistributorsInfo;