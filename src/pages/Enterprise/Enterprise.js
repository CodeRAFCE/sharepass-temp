import {Fragment, useEffect, useState} from "react";

import axios from "axios";
import http1 from "../variables";
import TinyTitle from "../../components/tinytitle/TinyTitle";
import "./enterprise.css";
import UseCases from "./usecases/UseCases";
// import enterpriseVideo from "../../assets/animations/Enterprise.mp4";
import Envelope from "./envelope/Envelope";
import Helmet from "react-helmet";
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import {Player} from "@lottiefiles/react-lottie-player";

// lottie files
import enterpriseVideo from "../../assets/lottie/ent-solution.json";

const Enterprise = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);

		/*enterpriseDataApi();*/

		setData({
			_id: "644f5c7c3681f42ccab9355e",
			createdAt: "2023-05-01T06:30:20.340Z",
			updatedAt: "2023-07-10T13:24:19.203Z",
			__v: 0,
			title: "SharePass One",
			desc: "",
			sec_desc:
				"Enhance your organization's security, control, and scalability with our customizable solutions, featuring white labelling, custom domain, SSO, and private instances in your preferred location for elevated standards.",
			sec_title: "Enterprise Solutions",
			sec_image: "public/files/2023-07-06T14-21-20.387Z-2.webm",
			sec_7_desc:
				"Silent Breach is a cybersecurity company that provides multiple services, such as vulnerability assessment, cloud security, and ransomware prevention.\r\n\r\nSharePass helps them to distribute highly classified vulnerability reports to their customers with ease and security.",
			sec_7_image: "public/files/2023-06-03T09-43-56.938Z-silent-breach (1).png",
			sec_7_title: "Silent Breach",
			sec_8_desc:
				"Schur is a company with over 175 years of history in the packaging business, providing the market with products from plastic bags to industrial packaging machinery.\r\n\r\n Using SharePass, Schur can maintain the highest standards of security while working collaboratively internally and externally.",
			sec_8_image: "public/files/2023-06-03T09-45-29.046Z-schur (1).png",
			sec_8_title: " Schur",
			sec_9_desc:
				" Natan is a technology company with specific expertise and a focus on telecommunications.\r\n\r\nWith SharePass, Natan can confidently deliver critical login information to their customers, allowing them to quickly and securely connect to their services.",
			sec_9_image: "public/files/2023-06-03T09-45-29.048Z-nattan.png",
			sec_9_title: "Natan",
		});
	}, []);

	return (
		<Fragment>
			<Helmet>
				<title>Enterprise | SharePass</title>
				<meta property="description" content={defaultMetaDescription} />
				<meta property="og:title" content="Enterprise | SharePass" />
				<meta property="og:description" content={defaultMetaDescription} />
				<meta property="og:image" content={defaultOgImg} />
			</Helmet>
			<section className="enterprise_landing">
				<div className="content_sec">
					<div className="text_wraper">
						<TinyTitle title="SHAREPASS FOR ENTERPRISES" />
						<h1>{data.title}</h1>
					</div>
					<div className="text-intro">
						<p className="para">
							Introducing our stellar enterprise product, meticulously crafted to meet the unique
							needs of businesses like yours. Designed with a focus on scalability, security, and
							seamless integration, our solution empowers your enterprise to thrive in today's
							competitive landscape.
						</p>
						<br />
						<p className="para">
							Our enterprise product offers a comprehensive suite of advanced features, allowing
							your team to streamline workflows, boost productivity, and achieve remarkable
							efficiency gains. With enterprise-grade security measures, data protection is
							paramount, ensuring your sensitive information remains safe and confidential.
						</p>
					</div>
				</div>
			</section>
			<section className="features_sec" id="features">
				<div className="content_sec">
					<div className="flap" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
						<div className="video_wrap">
							{/* <video
								className="img_video"
								// src={`${http1}${data.sec_image}`}
								src={enterpriseVideo}
								autoPlay
								loop
								muted
								playsInline
							/> */}
							<Player src={enterpriseVideo} autoplay loop />
						</div>
						<div className="text_wrap pl">
							<h2>{data.sec_title}</h2>
							<p>{data.sec_desc}</p>
						</div>
					</div>
				</div>
			</section>
			<Envelope />
			<UseCases
				image1={data.sec_7_image}
				image2={data.sec_8_image}
				image3={data.sec_9_image}
				title1={data.sec_7_title}
				title2={data.sec_8_title}
				title3={data.sec_9_title}
				para1={data.sec_7_desc}
				para2={data.sec_8_desc}
				para3={data.sec_9_desc}
			/>
		</Fragment>
	);
};

export default Enterprise;
