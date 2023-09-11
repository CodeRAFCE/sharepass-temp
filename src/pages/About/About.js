import './about.css'
import {Fragment, useEffect, useState } from "react";
import axios from 'axios';
import http1 from '../variables';
import AboutLanding from './landing/AboutLanding';
import MissionVision from './missionvision/MissionVision';
import Multiple from './multiple/Multiple';
import MeetTeam from "../Home/meetteam/MeetTeam";
import BottomSec from "../Home/bottom/BottomSec";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultMetaTitle,defaultOgImg} from "../../assets/js/blogConfig";

import Carousel from "../../components/carousel/Carousel";
import cseaLogo from "../../assets/images/awards/csea.png"
import cybersecuritybronze from "../../assets/images/awards/cybersecuritybronze.png"
import YE2022 from "../../assets/images/awards/YE2022.png"

const About = () =>{    
  const data =  {
        "_id": "6450018c4b181077f18c2b74",
        "title": "Empowering Data Privacy",
        "description": "At SharePass, we believe our clients deserve control and ownership over their personal and confidential information. That's why we've developed a cutting-edge privacy platform powered by AI. Our platform is designed to safeguard confidential information and eliminate digital footprint.\r\n\r\nOur primary objective is to make it easy for users to manage, share, and eliminate their personal and confidential information as needed. With SharePass, users can take control of their data and enjoy peace of mind knowing their information is safe, secure and accessible only when authorised.",
        "sec_1_title_1": "Personal Data Guardian",
        "sec_1_image_1": "public/files/2023-05-21T18-18-31.739Z-trust.svg",
        "sec_1_desc_1": "Protect your confidential information with SharePass's advanced security measures.",
        "sec_1_title_2": "Privacy for the Organization",
        "sec_1_image_2": "public/files/2023-05-21T18-18-31.740Z-anyone-can-use.svg",
        "sec_1_desc_2": "Ensure data privacy compliance and protect sensitive information.",
        "sec_1_title_3": "Connect with Confidence",
        "sec_1_image_3": "public/files/2023-05-21T18-18-31.741Z-share.svg",
        "sec_1_desc_3": "Enjoy worry-free connections knowing your personal information is secure with SharePass.",
        "sec_2_title": "Mission & Vision",
        "sec_2_image": "public/files/2023-05-21T18-18-31.741Z-vision-mission_vision-mission.png",
        "sec_2_desc": "SharePass's mission is to empower users with control over their personal data through cutting-edge privacy solutions.\r\n\r\nOur vision is to become the industry leader in secret sharing, providing trusted and innovative services to safeguard user information.",
        "sec_3_title": "Multiplatform Solution",
        "sec_3_image": "public/files/2023-05-21T18-18-32.940Z-Home-2.png",
        "sec_3_desc": "At SharePass, we understand that managing and sharing personal and confidential information can be a daunting task. That's why we've developed a suite of tools to make the process easy and secure.\r\n\r\nOur ecosystem includes a mobile app with a keyboard, a web app, and a browser extension. Users can use the mobile app to type sensitive information securely on any app, and the browser extension to encrypt information while browsing the web. The web app includes a powerful dashboard that allows users to manage their personal and confidential information, set custom permissions, and control who can access their information.",
        "sec_4_title": "Meet The Team",
        "sec_4_desc": "Meet the experts behind SharePass. Our team is dedicated to keeping your data safe and secure, with a wealth of experience and commitment to providing our clients with the highest level of service and support.s",
        "sec_4_title_1": "Aliquid aspernatur e",
        "sec_4_image_1": "public\\files\\2023-05-01T18-14-36.334Z-data.png",
        "sec_4_desc_1": "Consequat Labore in",
        "sec_4_title_2": "Voluptatem veritati",
        "sec_4_image_2": "public\\files\\2023-05-01T18-14-36.336Z-data.png",
        "sec_4_desc_2": "Eu culpa facere volu",
        "sec_4_title_3": "Quos neque aut omnis",
        "sec_4_image_3": "public\\files\\2023-05-01T18-14-36.338Z-data.png",
        "sec_4_desc_3": "Amet natus voluptas",
        "sec_5_title": "Expedita culpa cons",
        "sec_5_desc": "Omnis architecto asp",
        "sec_6_title": "Nam assumenda ullam ",
        "sec_6_image": "public\\files\\2023-05-01T18-14-36.339Z-data.png",
        "sec_6_desc": "Qui sapiente deserun",
        "sec_7_title": "Fugiat ut dolores of",
        "sec_7_image": "public\\files\\2023-05-01T18-14-36.342Z-data.png",
        "sec_7_desc": "Placeat fugiat tene",
        "sec_8_title": "Vero est molestias i",
        "sec_8_image": "public\\files\\2023-05-01T18-14-36.344Z-data.png",
        "sec_8_desc": "Autem error enim ess",
        "createdAt": "2023-05-01T18:14:36.359Z",
        "updatedAt": "2023-05-21T19:02:35.125Z",
        "__v": 0
    
};

  useEffect(() => {
    window.scrollTo(0, 0);
    //aboutDataApi();
  }, []);

console.log("about");
    return(
        <Fragment>
          <Helmet>
            <title>About | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="About | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
          </Helmet>
            <AboutLanding
            title={data.title}
            para={data.description}
            title1={data.sec_1_title_1}
            title2={data.sec_1_title_2}
            title3={data.sec_1_title_3}
            para1={data.sec_1_desc_1}
            para2={data.sec_1_desc_2}
            para3={data.sec_1_desc_3}
            image1={data.sec_1_image_1}
            image2={data.sec_1_image_2}
            image3={data.sec_1_image_3}
            />
            
            <MissionVision
            title={data.sec_2_title}
            para={data.sec_2_desc}
            image={data.sec_2_image}
            />

            <Multiple 
            title={data.sec_3_title}
            para={data.sec_3_desc}
            image={data.sec_3_image}
            />

            <Carousel 
              className="dark-text mb-200"
              items={[
                <a
                  className="award-icon"
                  href="https://globeeawards.com/cyber-security/winners/"
                  target="blank"
                >
                  <img
                    border="0"
                    className="inner-badge"
                    src={cybersecuritybronze}
                  />
                </a>,
                <a
                  className="award-icon"
                  href="https://cybersecurity-excellence-awards.com/candidates/sharepass-digital-footprint-management/"
                  target="blank"
                >
                  <img
                    border="0"
                    className="inner-badge"
                    src={cseaLogo}
                  />
                </a>,
                <a
                  className="award-icon"
                  href="https://www.businessnewsaustralia.com/young-entrepreneur-awards.html"
                  target="blank"
                >
                  <img
                    border="0"
                    className="inner-badge"
                    src={YE2022}
                  />
                </a>,
                <div
                  className="sf-root award-icon award-icon-rendered"
                  data-id="3518941"
                  data-badge="top-performer-summer-white"
                  data-variant-id="sf"
                  data-metadata="achievement=top-performer-seasonal-2022-summer"
                  //style={{ width: "150px" }}
                >
                  <a
                    href="https://sourceforge.net/software/product/SharePass/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SharePass Reviews
                  </a>
                </div>,
                <div
                  className="award-icon sf-root award-icon-rendered"
                  data-id="3518941"
                  data-badge="top-performer-fall-white"
                  data-variant-id="sf"
                  data-metadata="achievement=top-performer-seasonal-2022-fall"
                  //style={{ width: "150px" }}
                >
                  <a
                    href="https://sourceforge.net/software/product/SharePass/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SharePass Reviews
                  </a>
                </div>,
                <div
                  className="award-icon sf-root award-icon-rendered"
                  data-id="3518941"
                  data-badge="top-performer-summer-white"
                  data-variant-id="sd"
                  data-metadata="achievement=top-performer-seasonal-2022-summer"
                  //style={{ width: "140px" }}
                >
                  <a
                    href="https://slashdot.org/software/p/SharePass/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SharePass Reviews
                  </a>
                </div>,
                <div
                  className="award-icon sf-root award-icon-rendered"
                  data-id="3518941"
                  data-badge="top-performer-fall-white"
                  data-variant-id="sd"
                  data-metadata="achievement=top-performer-seasonal-2022-fall"
                  //style={{ width: "140px" }}
                >
                  <a
                    href="https://slashdot.org/software/p/SharePass/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SharePass Reviews
                  </a>
                </div>,
                <a 
                  className="award-icon sf-root"
                  href="https://www.capterra.com/p/234300/SharePass/" 
                  target="_blank" 
                  rel="noreferrer"
                > 
                  <img border="0" className="inner-badge" src="https://capterra.s3.amazonaws.com/assets/images/gdm-badges/CA_Badge_BestEaseofUse_2022_FullColor-Positive.png" /> 
                </a>,
                <a 
                  className="award-icon sf-root"
                  href="https://www.capterra.com/p/234300/SharePass/" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img className="inner-badge" border="0" src="https://capterra.s3.amazonaws.com/assets/images/gdm-badges/CA_Badge_BestValue_2022_FullColor-Positive.png" /> 
                </a>,


                <div 
                  className="award-icon sf-root award-icon-rendered" 
                  data-id="3518941" 
                  data-badge="top-performer-summer-white" 
                  data-variant-id="sf" 
                  data-metadata="achievement=top-performer-seasonal-2023-summer" 
                >
                  <a href="https://sourceforge.net/software/product/SharePass/" target="_blank">SharePass Reviews</a>
                </div>,
                <div 
                  className="award-icon sf-root award-icon-rendered" 
                  data-id="3518941" 
                  data-badge="top-performer-spring-white" 
                  data-variant-id="sf" 
                  data-metadata="achievement=top-performer-seasonal-2023-spring" 
                >
                  <a href="https://sourceforge.net/software/product/SharePass/" target="_blank">SharePass Reviews</a>
                </div>,
                <div 
                  className="award-icon sf-root award-icon-rendered" 
                  data-id="3518941" 
                  data-badge="top-performer-winter-white" 
                  data-variant-id="sf" 
                  data-metadata="achievement=top-performer-seasonal-2023-winter" 
                >
                  <a href="https://sourceforge.net/software/product/SharePass/" target="_blank">SharePass Reviews</a>
                </div>,
                <div 
                  className="award-icon sf-root award-icon-rendered" 
                  data-id="3518941" 
                  data-badge="top-performer-winter-white" 
                  data-variant-id="sd" 
                  data-metadata="achievement=top-performer-seasonal-2023-winter" 
                >
                  <a href="https://slashdot.org/software/p/SharePass/" target="_blank">SharePass Reviews</a>
                </div>,
                <div 
                  className="award-icon sf-root award-icon-rendered" 
                  data-id="3518941" 
                  data-badge="top-performer-spring-white" 
                  data-variant-id="sd" 
                  data-metadata="achievement=top-performer-seasonal-2023-spring" 
                >
                  <a href="https://slashdot.org/software/p/SharePass/" target="_blank">SharePass Reviews</a>
                </div>,
                <div 
                  className="award-icon sf-root award-icon-rendered" 
                  data-id="3518941" 
                  data-badge="top-performer-summer-white" 
                  data-variant-id="sd" 
                  data-metadata="achievement=top-performer-seasonal-2023-summer" 
                >
                  <a href="https://slashdot.org/software/p/SharePass/" target="_blank">SharePass Reviews</a>
                </div>
              ]} 
              title="Awards"
              full={true}
            />

            <MeetTeam />
            
        </Fragment>
    )
}

export default About;