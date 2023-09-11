import "./map.css";
import map from "../../../assets/images/map.svg";
/*import us from "../../../assets/images/us.webp";
import sg from "../../../assets/images/sg.webp";
import au from "../../../assets/images/au.webp";
import fr from "../../../assets/images/fr.webp";
import uae from "../../../assets/images/uae.webp";*/
import mobileLocations from "../../../assets/images/locations.svg";

const Map = () => {
    return (
        <div className="map">
            <div className="content_sec">
                <h2 className="center">Our Presence</h2>
                <div className="">
                    <div className="map_wrap">
                        <img src={map} alt='map' />
                        <div className="location a"><span>US</span></div>
                        <div className="location b"><span>SG</span></div>
                        <div className="location c"><span>AU</span></div>
                        <div className="location d"><span>FR</span></div>
                        <div className="location e"><span>UAE</span></div>
                    </div>
                    <div className="map_mobile">
                    <img src={mobileLocations} alt='Locations' />
                    </div>
                    {/* <div className="map_text_wrap">
                        <div className="location-flag"><img src={au} alt='Australia' /><div className="country-name">Australia</div></div>
                        <div className="location-flag"><img src={uae} alt='United Arab Emirates' /><div className="country-name">United Arab Emirates</div></div>
                        <div className="location-flag"><img src={sg} alt='Singapore' /><div className="country-name">Singapore</div></div>
                        <div className="location-flag"><img src={fr} alt='France' /><div className="country-name">France</div></div>
                        <div className="location-flag"><img src={us} alt='United States' /><div className="country-name">United States</div></div>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
export default Map;