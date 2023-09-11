import "./cookiesbanner.css";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "../../services/utils";

const CookiesBanner = ({cookies, setCookies}) => {

    const [cookiesConsent, setCookiesConsent] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if(!cookiesConsent.consent){
            
            const cookieVal = getCookie('consent');
            
            setCookiesConsent({
                show: cookieVal == 'approved'? false : true,
                consent: true,
                allowGeoLocation: getCookie('allowGeoLocation') === null ? true : getCookie('allowGeoLocation') === '1' ? true : false,
                audienceAnalysis: getCookie('audienceAnalysis') === null ? true : getCookie('audienceAnalysis') === '1' ? true : false,
                storingAccessing: getCookie('storingAccessing') === null ? true : getCookie('storingAccessing') === '1' ? true : false
            });
        }
    }, []);

    const acceptCookies = () => {
        setCookie('consent', 'approved', 1000);
        setCookies(false); //hide banner
        setCookiesConsent((prevState) => ({
              ...prevState,
              show: false,   
        }));
    };

    const configCookies = () => {
        setShowDetails(true);
    };

    const toggleCookie = (attr) => {
        setCookiesConsent((prevState) => {
            setCookie(attr, !prevState[attr] ? '1' : '0', 1000);
            
            return {
                ...prevState,
                [attr]: !prevState[attr], 
            }  
      });
    }

    return ((cookiesConsent && cookiesConsent.show || cookies) &&
        <div className="popup" id="popupConsent">
            {!showDetails ? <section id="contentPopupConsent">
                <p>We use cookies/targeted advertising to ensure you have the best experience on our site. If you continue to use our site, we will assume that you agree to their use. For more information, please see our <a href="/cookies-policy">cookies policy</a>.</p>
            </section>
            :
            <section id="configureSection">
                <p>Minimun technical cookies are accepted by navigating through the website.</p>
                <table>
                    <tbody>
                        <tr>
                        <th>
                            <div class="cookies-banner-checkbox">
                                <label class="switch" for="allowGeoLocation">
                                    <input type="checkbox" id="allowGeoLocation" checked={cookiesConsent.allowGeoLocation} onClick={() => {
                                        toggleCookie('allowGeoLocation');
                                    }}/>
                                    <div class="slider round"></div>
                                </label>
                            </div>
                        </th>
                        <th className="text-switch">Allow access to geolocation data</th>
                        </tr>
                        <tr>
                        <th>
                            <div class="cookies-banner-checkbox">
                                <label class="switch" for="audienceAnalysis">
                                    <input type="checkbox" id="audienceAnalysis" checked={cookiesConsent.audienceAnalysis} onClick={() => {
                                        toggleCookie('audienceAnalysis');
                                    }} />
                                    <div class="slider round"></div>
                                </label>
                            </div>
                        </th>
                        <th className="text-switch">Allow personalised ads and content, ad measurement and audience analysis</th>
                        </tr>
                        <tr>
                        <th>
                            <div class="cookies-banner-checkbox">
                                <label class="switch" for="storingAccessing">
                                    <input type="checkbox" id="storingAccessing" checked={cookiesConsent.storingAccessing} onClick={() => {
                                        toggleCookie('storingAccessing');
                                    }} />
                                    <div class="slider round"></div>
                                </label>
                            </div>
                        </th>
                        <th className="text-switch">Storing and/or accessing information on a device</th>
                        </tr>
                    </tbody>
                </table>
            </section>}
            <div className="choice-container-buttons">
                {!showDetails && 
                <>
                    <button className="c-button" id="accept" onClick={acceptCookies}>
                        <div className="c-ripple js-ripple"><span className="c-ripple-circle-accept"></span></div>
                        Accept
                    </button>
                    <button className="c-button" id="configure" onClick={configCookies}>
                        <div className="c-ripple js-ripple"><span className="c-ripple-circle-configure"></span></div>
                        Cookie details
                    </button>
                </>}
                {showDetails && 
                    <button className="c-button" id="enregistre" onClick={acceptCookies}>
                        <div className="c-ripple js-ripple"><span className="c-ripple-circle-enregistre"></span></div>
                        Save choices
                    </button>
                }
            </div>
        </div>
    );
}

export default CookiesBanner;