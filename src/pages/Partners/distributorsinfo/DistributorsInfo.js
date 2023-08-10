import "./distributorsinfo.css";
import http1 from "../../variables";

const DistributorsInfo = (props) => {
    return(
        <section className="distributors_info">
        <div className="content_sec">
            <h2>{props.title}</h2>
            <p>{props.para}</p>
            
            <div className="img_alides">
                <a href="https://natan.com.au" target="_blank">
                    <img   src={`${http1}${props.image}`} />
                </a>
            </div>

        </div>
    </section>
    )
}

export default DistributorsInfo;