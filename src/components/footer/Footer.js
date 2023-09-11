import "./footer.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/sharepass-white-logo.svg";
import capterra from "../../assets/images/capterra.svg";
import g2 from "../../assets/images/g2.png";
import getapp from "../../assets/images/getapp.png";
import downloadChrome from "../../assets/images/download-chrome.avif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carousel from "../carousel/Carousel";
import CookiesBanner from "../CookiesBanner/CookiesBanner";

import g2Logo from "../../assets/images/reviews/g2.webp";
import getAppLogo from "../../assets/images/reviews/getapp.svg";
import trustRadiusLogo from "../../assets/images/reviews/trustradius.svg";
import softwareadviceLogo from "../../assets/images/reviews/softwareadvice.svg";
import capterraLogo from "../../assets/images/reviews/capterra.webp";
import trustpilotLogo from "../../assets/images/reviews/trustpilot.svg";
import googleLogo from "../../assets/images/reviews/google.png";
import sourceforgeLogo from "../../assets/images/reviews/sourceforge.svg";
import slashdotLogo from "../../assets/images/reviews/slashdot.png";
import startupstashLogo from "../../assets/images/reviews/startupstash.svg";

// const notify = () => toast("News Letter Send SuccessFully.");
const Footer = ({cookies, setCookies}) => {
    const notify = () => toast("News Letter Send SuccessFully.");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('https://sharepass-2.supagrow.in/storenewsletter', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        notify()
        setEmail('')
        // Handle the response here (e.g., update state, show success/error message)
        } catch (error) {
        // Handle error here
        }
    };

    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setEmail(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [mail, setMail] = useState();

    const subscribeHandler = () => {
  

        const emailRegex = /^\S+@\S+\.\S+$/;

        const isValidEmail = emailRegex.test(mail);

        if (isValidEmail) {
            console.log(mail);
        }else{
            console.log("not valid")
        }
    }

    return (
        <>
            <section className="footer">
                <div className="content_sec">
                    <div className="link_wrap">
                        <div className="logo_wrap">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="links_row">
                            <p>Useful Links</p>
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/enterprise">Enterprise</NavLink>
                            {false && <NavLink to="/pricing">Pricing</NavLink>}
                            <NavLink to="/technology">Technology</NavLink>
                            <NavLink to="/partners">Partners</NavLink>
                            <NavLink to="/ourteam">Our Team</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                        <div className="links_row">
                            <p>Resources</p>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <NavLink to="/events">Events</NavLink>
                            <NavLink to="/medias">Media</NavLink>
                            <NavLink to="/knowledgebase">Knowledge base</NavLink>
                            <NavLink to="https://developers.sharepass.com" target="blank">Developers</NavLink>
                        </div>
                        <div className="links_row">
                            <p>Download</p>
                            <a target="_blank" href="https://apps.apple.com/app/sharepass/id1627340541">
                                <svg width="100px" height="65px" viewBox="0 50 539.856 100" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                    <g id="SVGRepo_iconCarrier"> <g transform="scale(4.00216 4.0011)"> <path fill="#ffffff" d="M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z" /> <path fill="#A6A6A6" d="M130.198 39.989H4.729A4.73 4.73 0 0 1 0 35.268V4.726A4.733 4.733 0 0 1 4.729 0h125.468a4.735 4.735 0 0 1 4.729 4.726v30.542c.002 2.604-2.123 4.721-4.728 4.721z" /> <path d="M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z" /> <path fill="#ffffff" d="M30.128 19.784c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.554 2.355 3.287 4.016 3.226 1.625-.066 2.232-1.035 4.193-1.035 1.943 0 2.513 1.035 4.207.996 1.744-.027 2.842-1.56 3.89-3.127 1.255-1.779 1.759-3.533 1.779-3.623-.04-.014-3.386-1.292-3.42-5.154zM26.928 10.306c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793z" /> <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-23.235" y1="97.431" x2="-23.235" y2="61.386" gradientTransform="matrix(4.0022 0 0 4.0011 191.95 -349.736)"> <stop offset="0" stopColor="#1a1a1a" stopOpacity=".1" /> <stop offset=".123" stopColor="#212121" stopOpacity=".151" /> <stop offset=".308" stopColor="#353535" stopOpacity=".227" /> <stop offset=".532" stopColor="#575757" stopOpacity=".318" /> <stop offset=".783" stopColor="#858585" stopOpacity=".421" /> <stop offset="1" stopColor="#b3b3b3" stopOpacity=".51" /> </linearGradient> <path fill="url(#a)" d="M130.198 0H62.993l26.323 39.989h40.882a4.733 4.733 0 0 0 4.729-4.724V4.726A4.734 4.734 0 0 0 130.198 0z" /> <g fill="#ffffff"> <path d="M53.665 31.504h-2.271l-1.244-3.909h-4.324l-1.185 3.909H42.43l4.285-13.308h2.646l4.304 13.308zm-3.89-5.549L48.65 22.48c-.119-.355-.343-1.191-.671-2.507h-.04c-.132.566-.343 1.402-.632 2.507l-1.106 3.475h3.574zM64.663 26.588c0 1.632-.443 2.922-1.33 3.869-.794.843-1.781 1.264-2.958 1.264-1.271 0-2.185-.453-2.74-1.361v5.035h-2.132V25.062c0-1.025-.027-2.076-.079-3.154h1.875l.119 1.521h.04c.711-1.146 1.79-1.719 3.238-1.719 1.132 0 2.077.447 2.833 1.342.755.897 1.134 2.075 1.134 3.536zm-2.172.078c0-.934-.21-1.704-.632-2.311-.461-.631-1.08-.947-1.856-.947-.526 0-1.004.176-1.431.523-.428.35-.708.807-.839 1.373a2.784 2.784 0 0 0-.099.649v1.601c0 .697.214 1.286.642 1.768.428.48.984.721 1.668.721.803 0 1.428-.311 1.875-.928.448-.619.672-1.435.672-2.449zM75.7 26.588c0 1.632-.443 2.922-1.33 3.869-.795.843-1.781 1.264-2.959 1.264-1.271 0-2.185-.453-2.74-1.361v5.035h-2.132V25.062c0-1.025-.027-2.076-.079-3.154h1.875l.119 1.521h.04c.71-1.146 1.789-1.719 3.238-1.719 1.131 0 2.076.447 2.834 1.342.754.897 1.134 2.075 1.134 3.536zm-2.173.078c0-.934-.211-1.704-.633-2.311-.461-.631-1.078-.947-1.854-.947-.526 0-1.004.176-1.433.523-.428.35-.707.807-.838 1.373-.065.264-.1.479-.1.649v1.601c0 .697.215 1.286.641 1.768.428.479.984.721 1.67.721.804 0 1.429-.311 1.875-.928.448-.619.672-1.435.672-2.449zM88.04 27.771c0 1.133-.396 2.054-1.183 2.765-.866.776-2.075 1.165-3.625 1.165-1.432 0-2.58-.276-3.446-.829l.493-1.777c.935.554 1.962.83 3.08.83.804 0 1.429-.182 1.875-.543.447-.362.673-.846.673-1.45 0-.541-.187-.994-.554-1.363-.369-.368-.979-.711-1.836-1.026-2.33-.869-3.496-2.14-3.496-3.812 0-1.092.412-1.986 1.234-2.685.822-.698 1.912-1.047 3.268-1.047 1.211 0 2.22.211 3.021.632l-.535 1.738c-.754-.408-1.605-.612-2.557-.612-.752 0-1.342.185-1.764.553-.355.329-.535.73-.535 1.206 0 .525.205.961.613 1.303.354.315 1 .658 1.934 1.026 1.146.462 1.988 1 2.527 1.618.543.618.813 1.389.813 2.308zM95.107 23.508h-2.35v4.659c0 1.185.414 1.776 1.244 1.776.381 0 .697-.032.947-.099l.059 1.619c-.42.157-.973.236-1.658.236-.842 0-1.5-.257-1.975-.771-.473-.514-.711-1.375-.711-2.587v-4.837h-1.4v-1.6h1.4v-1.757l2.094-.632v2.389h2.35v1.604zM105.689 26.627c0 1.475-.422 2.686-1.264 3.633-.881.975-2.053 1.461-3.514 1.461-1.41 0-2.531-.467-3.367-1.4-.836-.935-1.254-2.113-1.254-3.534 0-1.487.432-2.705 1.293-3.652.863-.948 2.025-1.422 3.486-1.422 1.408 0 2.539.468 3.395 1.402.818.906 1.225 2.076 1.225 3.512zm-2.21.049c0-.879-.19-1.633-.571-2.264-.447-.762-1.087-1.143-1.916-1.143-.854 0-1.509.381-1.955 1.143-.382.631-.572 1.398-.572 2.304 0 .88.19 1.636.572 2.265.461.762 1.104 1.143 1.937 1.143.815 0 1.454-.389 1.916-1.162.392-.646.589-1.405.589-2.286zM112.622 23.783a3.71 3.71 0 0 0-.672-.059c-.75 0-1.33.282-1.738.85-.354.5-.532 1.132-.532 1.895v5.035h-2.132V24.93a67.43 67.43 0 0 0-.062-3.021h1.857l.078 1.836h.059c.226-.631.58-1.14 1.066-1.521a2.578 2.578 0 0 1 1.541-.514c.197 0 .375.014.533.039l.002 2.034zM122.157 26.252a5 5 0 0 1-.078.967h-6.396c.024.948.334 1.674.928 2.174.539.446 1.236.67 2.092.67.947 0 1.811-.15 2.588-.453l.334 1.479c-.908.396-1.98.593-3.217.593-1.488 0-2.656-.438-3.506-1.312-.848-.875-1.273-2.051-1.273-3.524 0-1.446.395-2.651 1.186-3.612.828-1.026 1.947-1.539 3.355-1.539 1.383 0 2.43.513 3.141 1.539.563.813.846 1.821.846 3.018zm-2.033-.553c.015-.633-.125-1.178-.414-1.639-.369-.594-.937-.89-1.698-.89-.697 0-1.265.289-1.697.869-.355.461-.566 1.015-.631 1.658l4.44.002z" /> </g> <g fill="#ffffff"> <path d="M45.211 13.491c-.593 0-1.106-.029-1.533-.078V6.979a11.606 11.606 0 0 1 1.805-.136c2.445 0 3.571 1.203 3.571 3.164 0 2.262-1.33 3.484-3.843 3.484zm.358-5.823c-.33 0-.611.02-.844.068v4.891c.126.02.368.029.708.029 1.602 0 2.514-.912 2.514-2.62 0-1.523-.825-2.368-2.378-2.368zM52.563 13.54c-1.378 0-2.271-1.029-2.271-2.426 0-1.456.912-2.494 2.349-2.494 1.358 0 2.271.98 2.271 2.417 0 1.474-.941 2.503-2.349 2.503zm.04-4.154c-.757 0-1.242.708-1.242 1.698 0 .971.495 1.679 1.232 1.679s1.232-.757 1.232-1.699c0-.96-.485-1.678-1.222-1.678zM62.77 8.717l-1.475 4.716h-.961l-.611-2.048a15.53 15.53 0 0 1-.379-1.523h-.02c-.077.514-.223 1.029-.378 1.523l-.65 2.048h-.971l-1.388-4.716h1.077l.534 2.242c.126.534.232 1.038.32 1.514h.02c.077-.397.203-.893.388-1.504l.67-2.251h.854l.641 2.203c.155.534.281 1.058.379 1.553h.028c.068-.485.175-1 .32-1.553l.573-2.203 1.029-.001zM68.2 13.433h-1.048v-2.708c0-.834-.32-1.252-.951-1.252-.621 0-1.048.534-1.048 1.155v2.805h-1.048v-3.368c0-.417-.01-.864-.039-1.349h.922l.049.728h.029c.282-.504.854-.824 1.495-.824.99 0 1.64.757 1.64 1.989l-.001 2.824zM71.09 13.433h-1.049v-6.88h1.049v6.88zM74.911 13.54c-1.377 0-2.271-1.029-2.271-2.426 0-1.456.912-2.494 2.348-2.494 1.359 0 2.271.98 2.271 2.417.001 1.474-.941 2.503-2.348 2.503zm.039-4.154c-.757 0-1.242.708-1.242 1.698 0 .971.496 1.679 1.231 1.679.738 0 1.232-.757 1.232-1.699.001-.96-.483-1.678-1.221-1.678zM81.391 13.433l-.076-.543h-.028c-.32.437-.787.65-1.379.65-.845 0-1.445-.592-1.445-1.388 0-1.164 1.009-1.766 2.756-1.766v-.087c0-.621-.329-.932-.979-.932-.465 0-.873.117-1.232.35l-.213-.689c.436-.272.98-.408 1.619-.408 1.232 0 1.854.65 1.854 1.951v1.737c0 .476.021.845.068 1.126l-.945-.001zm-.144-2.349c-1.164 0-1.748.282-1.748.951 0 .495.301.737.719.737.533 0 1.029-.407 1.029-.96v-.728zM87.357 13.433l-.049-.757h-.029c-.301.572-.807.864-1.514.864-1.137 0-1.979-1-1.979-2.407 0-1.475.873-2.514 2.065-2.514.631 0 1.078.213 1.33.641h.021V6.553h1.049v5.609c0 .456.011.883.039 1.271h-.933zm-.155-2.775c0-.66-.437-1.223-1.104-1.223-.777 0-1.252.689-1.252 1.659 0 .951.493 1.602 1.231 1.602.659 0 1.125-.573 1.125-1.252v-.786zM94.902 13.54c-1.377 0-2.27-1.029-2.27-2.426 0-1.456.912-2.494 2.348-2.494 1.359 0 2.271.98 2.271 2.417.001 1.474-.94 2.503-2.349 2.503zm.039-4.154c-.756 0-1.241.708-1.241 1.698 0 .971.495 1.679 1.231 1.679.738 0 1.232-.757 1.232-1.699.002-.96-.483-1.678-1.222-1.678zM102.887 13.433h-1.049v-2.708c0-.834-.32-1.252-.951-1.252-.621 0-1.047.534-1.047 1.155v2.805h-1.049v-3.368c0-.417-.01-.864-.039-1.349h.922l.049.728h.029c.281-.504.854-.825 1.494-.825.99 0 1.641.757 1.641 1.989v2.825zM109.938 9.503h-1.153v2.29c0 .583.202.874.61.874.185 0 .34-.02.465-.049l.029.796c-.203.078-.475.117-.813.117-.826 0-1.32-.456-1.32-1.65V9.503h-.688v-.786h.688v-.864l1.029-.311v1.174h1.153v.787zM115.486 13.433h-1.047v-2.688c0-.844-.319-1.271-.951-1.271-.543 0-1.049.369-1.049 1.116v2.843h-1.047v-6.88h1.047v2.833h.021c.33-.514.808-.767 1.418-.767.998 0 1.608.776 1.608 2.009v2.805zM121.17 11.327h-3.145c.02.893.611 1.397 1.486 1.397.465 0 .893-.078 1.271-.223l.163.728c-.446.194-.971.291-1.582.291-1.475 0-2.348-.932-2.348-2.377 0-1.446.894-2.533 2.23-2.533 1.205 0 1.961.893 1.961 2.242a2.02 2.02 0 0 1-.036.475zm-.961-.747c0-.728-.367-1.242-1.037-1.242-.602 0-1.078.524-1.146 1.242h2.183z" /> </g> </g> </g>

                                </svg>
                            </a>
                            <a style={{marginTop: "0"}} target="_blank" href="https://chrome.google.com/webstore/detail/sharepass/hbejbbjkjojenjopiinjjegokobgdcbo">
                                <img width="100" src={downloadChrome}/>
                            </a>
                        </div>
                        {false && <div className="links_row">
                            <p>Review Us</p>
                            <a href="#">
                                <img src={capterra} style={{ width: "120px" }} />
                            </a>
                            <a href="#">
                                <img src={g2} style={{ width: "60px" }} />
                            </a>
                            <a href="#">
                                <img src={getapp} style={{ width: "120px" }} />
                            </a>
                        </div>}
                    </div>

                    <Carousel 
                        items={[
                            {
                                "image": g2Logo,
                                "link": "https://www.g2.com/products/sharepass-sharepass/reviews",
                            },
                            {
                                "image": getAppLogo,
                                "link": "https://www.getapp.com.au/software/2050550/sharepass"
                            },
                            {
                                "image": trustRadiusLogo,
                                "link": "https://www.trustradius.com/products/sharepass/reviews"
                            },
                            {
                                "image": softwareadviceLogo,
                                "link": "https://www.softwareadvice.com.au/software/319320/sharepass"
                            },
                            {
                                "image": capterraLogo,
                                "link": "https://www.capterra.com/p/234300/SharePass/"
                            },
                            {
                                "image": trustpilotLogo,
                                "link": "https://au.trustpilot.com/review/sharepass.online"
                            },
                            {
                                "image": googleLogo,
                                "link": "https://g.page/r/CchnuLFDZhrUEB0/review"
                            },
                            {
                                "image": sourceforgeLogo,
                                "link": "https://sourceforge.net/software/product/SharePass/"
                            },
                            {
                                "image": slashdotLogo,
                                "link": "https://slashdot.org/software/p/SharePass/"
                            },
                            {
                                "image": startupstashLogo,
                                "link": "https://startupstash.com/tools/sharepass/"
                            }
                        ]} 
                        title="Review us"
                        
                    />

                    <div className="mid_line">
                        <div className="media">
                            <a
                                href="https://www.reddit.com/r/SharePass/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="normal"
                                >
                                    <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"
                                        fill="#F1F3F9" />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="hover"
                                >
                                    <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"
                                        fill="#02f3a2" />
                                </svg>

                            </a>
                            
                            <a
                                href="https://www.linkedin.com/company/sharepass/"
                                className="flex h-10 w-10 items-center justify-center border-[1px] border-darkGrey hover:border-green duration-200 group"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    width={17}
                                    height={16}
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="normal"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.621094 15.6132H3.9386V4.57422H0.621094V15.6132Z"
                                        fill="#F1F3F9"
                                        className="duration-200 group-hover:fill-green"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.1011 9.46783V15.6133H12.8533V9.80925C12.8533 8.32979 12.3295 7.41935 11.1771 7.41935C10.4312 7.41138 9.76073 7.91212 9.50091 8.6712C9.40767 8.96254 9.37205 9.27323 9.39615 9.58164V15.6133H6.14844V4.91565H9.39615V6.39511C10.0058 5.26389 11.1237 4.57082 12.3295 4.57423C14.4248 4.57423 16.1011 6.1675 16.1011 9.46783Z"
                                        fill="#F1F3F9"
                                        className="duration-200 group-hover:fill-green"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.3267 0.164933C1.47484 0.0712231 0.714902 0.746757 0.628674 1.6715C0.623936 1.71887 0.622041 1.76521 0.621094 1.81258C0.622041 2.72599 1.30428 3.46434 2.14382 3.46228C2.17319 3.46228 2.20257 3.46228 2.23194 3.46022C3.0838 3.5529 3.84374 2.87943 3.92997 1.95365C3.93376 1.90629 3.9366 1.85995 3.93755 1.81258C3.96787 0.931088 3.3349 0.191707 2.52474 0.157724C2.45841 0.155665 2.39208 0.157724 2.3267 0.164933Z"
                                        fill="#F1F3F9"
                                        className="duration-200 group-hover:fill-green"
                                    />
                                </svg>
                                <svg
                                    width={17}
                                    height={16}
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hover"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.621094 15.6132H3.9386V4.57422H0.621094V15.6132Z"
                                        fill="#02f3a2"
                                        className="duration-200 group-hover:fill-green"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.1011 9.46783V15.6133H12.8533V9.80925C12.8533 8.32979 12.3295 7.41935 11.1771 7.41935C10.4312 7.41138 9.76073 7.91212 9.50091 8.6712C9.40767 8.96254 9.37205 9.27323 9.39615 9.58164V15.6133H6.14844V4.91565H9.39615V6.39511C10.0058 5.26389 11.1237 4.57082 12.3295 4.57423C14.4248 4.57423 16.1011 6.1675 16.1011 9.46783Z"
                                        fill="#02f3a2"
                                        className="duration-200 group-hover:fill-green"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.3267 0.164933C1.47484 0.0712231 0.714902 0.746757 0.628674 1.6715C0.623936 1.71887 0.622041 1.76521 0.621094 1.81258C0.622041 2.72599 1.30428 3.46434 2.14382 3.46228C2.17319 3.46228 2.20257 3.46228 2.23194 3.46022C3.0838 3.5529 3.84374 2.87943 3.92997 1.95365C3.93376 1.90629 3.9366 1.85995 3.93755 1.81258C3.96787 0.931088 3.3349 0.191707 2.52474 0.157724C2.45841 0.155665 2.39208 0.157724 2.3267 0.164933Z"
                                        fill="#02f3a2"
                                        className="duration-200 group-hover:fill-green"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://twitter.com/sharePass"
                                className="flex h-10 w-10 items-center justify-center border-[1px] border-darkGrey hover:border-green duration-200 group"
                                target="_blank"
                                rel="noreferrer"
                            >

                                <svg className="normal" height="16" fill="#F1F3F9" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"></path>
                                </svg>
                                
                                <svg className="hover" height="16" fill="#02f3a2" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"></path>
                                </svg>

                            </a>

                            <a
                                href="https://www.youtube.com/@sharepasscom"
                                className="flex h-10 w-10 items-center justify-center border-[1px] border-darkGrey hover:border-green duration-200 group"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    width={44}
                                    height={24}
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="normal"
                                >
                                    <path
                                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                        fill="#F1F3F9"
                                    />
                                </svg>
                                <svg
                                    width={44}
                                    height={24}
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hover"
                                >
                                    <path
                                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                        fill="#02f3a2"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://www.facebook.com/sharepasscom"
                                className="flex h-10 w-10 items-center justify-center border-[1px] border-darkGrey hover:border-green duration-200 group"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    width={44}
                                    height={24}
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="normal"
                                >
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                        fill="#F1F3F9"
                                    />
                                </svg>
                                <svg
                                    width={44}
                                    height={24}
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hover"
                                >
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                        fill="#02f3a2"
                                    />
                                </svg>
                            </a>
                            
                        </div>
                        <ToastContainer toastStyle={{ top:"6em" }} />
                        <div style={{margin:"auto"}}>
                            <h3>Get the latest updates and early access</h3>
                            {false && <form
                            action=""
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                            noValidate=""
                            onSubmit={handleSubmit}
                            >
                                <div className="field_wrap">
                                    <input type="email"  value={email} name="email" placeholder="enter your email" onChange={handleChange} />
                                    <button type="submit">Subscribe</button>
                                </div>

                                
                            </form>}
                            <a className="linkedin-newsletter" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7070008458233737216">
                                <button type="button">
                                    <svg
                                        width={17}
                                        height={16}
                                        viewBox="0 0 17 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="normal"
                                        style={{float:"left"}}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.621094 15.6132H3.9386V4.57422H0.621094V15.6132Z"
                                            fill="#FFF"
                                            className="duration-200 group-hover:fill-green"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.1011 9.46783V15.6133H12.8533V9.80925C12.8533 8.32979 12.3295 7.41935 11.1771 7.41935C10.4312 7.41138 9.76073 7.91212 9.50091 8.6712C9.40767 8.96254 9.37205 9.27323 9.39615 9.58164V15.6133H6.14844V4.91565H9.39615V6.39511C10.0058 5.26389 11.1237 4.57082 12.3295 4.57423C14.4248 4.57423 16.1011 6.1675 16.1011 9.46783Z"
                                            fill="#FFF"
                                            className="duration-200 group-hover:fill-green"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.3267 0.164933C1.47484 0.0712231 0.714902 0.746757 0.628674 1.6715C0.623936 1.71887 0.622041 1.76521 0.621094 1.81258C0.622041 2.72599 1.30428 3.46434 2.14382 3.46228C2.17319 3.46228 2.20257 3.46228 2.23194 3.46022C3.0838 3.5529 3.84374 2.87943 3.92997 1.95365C3.93376 1.90629 3.9366 1.85995 3.93755 1.81258C3.96787 0.931088 3.3349 0.191707 2.52474 0.157724C2.45841 0.155665 2.39208 0.157724 2.3267 0.164933Z"
                                            fill="#FFF"
                                            className="duration-200 group-hover:fill-green"
                                        />
                                    </svg>{" "}
                                    Subscribe to our newsletter
                                </button>
                            </a>
                        </div>
                    </div>

                    <p className="copyright">Copyright © {new Date().getFullYear()} SharePass Pty Ltd (ACN 647 015 601) (SharePass). SharePass is a dedicated solution for confidential data sharing. Our mission is to make your online presence more secure and confidential. All rights reserved.</p>
                    <div className="bottom_line">

                        <NavLink to="/terms-of-service">Terms of Service</NavLink>
                        <NavLink to="/subscription-terms">Subscription Terms</NavLink>
                        <NavLink to="/permitted-use-policy">Permitted use policy</NavLink>
                        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                        <NavLink to="/cookies-policy">Cookies Policy</NavLink>
                        <NavLink to="/faq">FAQ</NavLink>
                    </div>
                </div>
            </section>
            <CookiesBanner cookies={cookies} setCookies={setCookies} />
        </>
    )
}

export default Footer;