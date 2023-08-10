import "./multiple.css";
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import http1 from "../../variables";

const Multiple = ({ title, para, image }) => {
    return (
        <section className="multiple">
            <div className="content_sec">
                <TinyTitle title='Ecosystem' textcolor="#fff" />
                <h2>{title}</h2>
                <p>{para}</p>
                <div className="img_wrap">   
                <img
                    draggable="false"
                    alt="image"
                    src={`${http1}${image}`}
                />
                </div>
            </div>
            <hr style={{width:"100%", margin: "50px 0"}}/>
            <div className="content_sec">
                <TinyTitle title='Certified security' textcolor="#fff" />
                <h2>We care about security</h2>
                
                <div
                    id="silentbreach-badge"
                    customerid="sharepass-8bbe2cd36ee63289b9e9f8d6b4ca4b4c"
                >  
                </div>

                <p>We are committed to maintaining the highest standards of cybersecurity. To ensure the robustness of our platform, we regularly undergo rigorous security assessments by a third-party cybersecurity firm. These examinations include comprehensive code reviews, cloud audits, and advanced penetration testing. This regular and systematic evaluation of our system safeguards not only allows us to stay aligned with the latest security practices but also ensures that we're constantly enhancing our security mechanisms to protect your confidential information.
                The certification signature is a testament to our continuous compliance with these checks. You can independently verify this credential by clicking on the logo, affirming our steadfast dedication to security and transparency.</p>
            </div>
        </section>
    )
}
export default Multiple;