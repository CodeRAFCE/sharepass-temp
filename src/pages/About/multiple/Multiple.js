import "./multiple.css";
import { useState, useEffect } from "react";
import { reloadScript } from "../../../services/utils";
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import http1 from "../../variables";
import multiplatform from "../../../assets/images/Multiplatform-Solutions.png"
import { InView } from 'react-intersection-observer';

const Multiple = ({ title, para, image }) => {
    const [visible, setVisible] = useState(false);
    const [visibleSec, setVisibleSec] = useState(false);

    
    useEffect(() => {
        window.scrollTo(0, 0);
            
        reloadScript('https://b.sf-syn.com/badge_js?sf_id=3518941&variant_id=sf');
        reloadScript('https://b.sf-syn.com/badge_js?sf_id=3518941&variant_id=sd');

        silentbreachInit();
        /*const silentBreachWidgetScript = document.getElementById('widget-silentbreach');

        if (!silentBreachWidgetScript) {
            const script = document.createElement('script');
            script.id = 'widget-silentbreach';
            script.src = 'https://silentbreach.com/certificates/load.js';
            document.body.appendChild(script);
        }

        if (silentBreachWidgetScript) {
            // Page was loaded directly from the browser.
            setTimeout(() => {console.log('LOAD!');
                var evt = document.createEvent('Event');  
                evt.initEvent('load', false, false);  
                window.dispatchEvent(evt);
            },3000);
        }*/

        return () => {
            // Clean up by removing the script when the component unmounts
            /*if (silentBreachWidgetScript) {
                silentBreachWidgetScript.parentNode.removeChild(silentBreachWidgetScript);
            }*/
        };
    }, []);

    const silentbreachInit = () => {
        var div = document.getElementById('silentbreach-badge');
        if (div != null) {
            var root = 'https://silentbreach.com/certificates/';
            var img = new Image();
            img.src = root + 'd.png';
            var customerid = silentbreachGetCustomerID(div);
            var path = root + customerid + "/";
            var link = document.createElement('a');
            link.setAttribute('href', path);
            link.appendChild(img);
            div.appendChild(link);
            setTimeout(function() {
                if (!silentbreachIsExpired(path + 't.txt')) {
                    img.src = path + 'b.png'
                }
            }, 500)
        }
    }
    
    function silentbreachGetCustomerID(div) {
        var customerid = null;
        if (div != null) {
            customerid = div.getAttribute('customerid')
        }
        if (customerid == null) {
            customerid = window.location.pathname.replace(/\/certificates\//, "").replace(/\//, "")
        }
        return customerid
    }
    
    function silentbreachHttpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);
        return xmlHttp.responseText
    }
    
    function silentbreachIsExpired(file) {
        var t_expiration_date = silentbreachHttpGet(file);
        var d = new Date();
        var t_now = d.getTime();
        t_expiration_date = t_expiration_date * 1000;
        return t_expiration_date < t_now
    }

    return (
        <section className="multiple">
            <InView 
                onChange={(inView, entry) => {
                    if (inView) {
                        setVisible(true)
                    }else{
                        setVisible(false)
                    }
                }} 
            >
                <div className="content_sec" style={{marginBottom:'100px',opacity:visible ? 1 : 0, transition:'all 1.5s ease-in-out'}}>
                    <TinyTitle title='Ecosystem' textcolor="#fff" />
                    <h2>{title}</h2>
                    <p>{para}</p>
                    <div className="img_wrap">   
                        <img src={multiplatform} />
                    </div>
                </div>
            </InView>
            

            <InView 
                onChange={(inView, entry) => {
                    if (inView) {
                        setVisibleSec(true)
                    }else{
                        setVisibleSec(false)
                    }
                }} 
            >
                <div className="content_sec" style={{opacity:visibleSec ? 1 : 0, transition:'all 1.5s ease-in-out'}}>
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
            </InView>
        </section>
    )
}
export default Multiple;