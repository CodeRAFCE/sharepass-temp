import {Fragment, useEffect, useState} from "react";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import {InView} from "react-intersection-observer";
import TinyTitle from "../../components/tinytitle/TinyTitle";
import "./enterprise.css";
import UseCases from "./usecases/UseCases";
import Helmet from "react-helmet";
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import { useNavigate } from "react-router-dom";

// MP4s
import enterpriseVideo from "../../assets/animations/Enterprise.mp4";
import enterpriseVideoVer from "../../assets/animations/Enterprise-ver.mp4";
import EnterpriseFeature from "./EnterpriseFeature";

const Enterprise = () => {
    const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [featuresVisible, setFeaturesVisible] = useState([false, false, false, false, false, false, false, false, false, false]);

    const contactSales = () =>{
        navigate(`/contactsales`);
    };

	const featuredItems = [
		{
			title: "File Sharing with Extended Storage",
			description: "SharePass ONE offers robust file-sharing capabilities, enabling a secure and efficient exchange of files within the organisation. Extended storage ensures ample room for your data without compromising security. Each link acts as an independent vault controlled via a central portal so you can see all your shares in a single place.",
			img: require('../../assets/images/enterprise/512/file-sharing.png')
		},
		{
			title: "Secure Secrets with Security Keys",
			description: "Elevate data security with security keys, providing an additional access control layer. Security keys validate user identity, ensuring only authorised individuals (who possess the key) can access confidential information. Leverage NFC technology (near-field communication) to unlock secrets from mobile devices without USB connections. Enhance user convenience without sacrificing security.",
			img: require('../../assets/images/enterprise/512/security-keys.png')
		},
		{
			title: "Security Keys Enrolment (Local and Remote)",
			description: "Enable seamless security key enrolment, even for users who don’t have their physical keys on hand. This feature ensures business continuity while maintaining strong authentication.",
			img: require('../../assets/images/enterprise/512/remote-local-security-key-enrollment.png')
		},
		{
			title: "White Labelling",
			description: "Customise the SharePass ONE experience with your organisation’s branding. Enjoy a branded domain, logo, and background colours, enhancing the user experience and reinforcing corporate identity.",
			img: require('../../assets/images/enterprise/512/white-labeling.png')
		},
		{
			title: "Enterprise Single Sign-On",
			description: "Seamlessly integrate SharePass ONE with Office 365, Google Workspace, Apple, and more using SAML-based Enterprise SSO. Streamline user access without compromising security.",
			img: require('../../assets/images/enterprise/512/enterprise-sso.png')
		},
		{
			title: "Admin Portal",
			description: "Empower administrators with a robust portal to efficiently manage users and resources. Create global templates, labels, and security keys to enforce consistent sharing practices across the organisation. Manage policies and enforce controls based on your organisation’s security policy.",
			img: require('../../assets/images/enterprise/512/portal.png')
		},
		{
			title: "Custom Integrations",
			description: "SharePass developers can craft custom integrations to align secret sharing with your organisation’s unique needs, ensuring a seamless workflow and optimised processes. Our team can also develop a specific required functionality making your SharePass instance unique to you.",
			img: require('../../assets/images/enterprise/512/integrations.png')
		},
		{
			title: "Dedicated AWS Instance",
			description: "Rest assured that a dedicated AWS instance meets the highest security, compliance, and data protection standards. Your organisation’s sensitive information remains fortified within a controlled environment based on your region of choice.",
			img: require('../../assets/images/enterprise/512/dedicated-instance.png')
		},
		{
			title: "Envelopes for Receiving Data",
			description: "Unlike the personal version of SharePass, SharePass ONE enables your organisation to receive data from third-party entities, enhancing collaboration possibilities.",
			img: require('../../assets/images/enterprise/512/envelopes-receive-data.png')
		},
		/*{
			title: "",
			description: "",
			img: null
		},*/
		{
			title: "Inspector AI Module",
			description: "Leverage the power of NVIDIA’s AI to analyse documents and images, detecting potential confidential data that requires encryption, further enhancing data protection.",
			img: require('../../assets/images/enterprise/512/inspector-ai.png')
		}
	];

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
			<section className="section-container">
				<div className="content-wrapper content-wrapper-center-end">
					<div className="content-wrap pad-left first-block-enterprise">
						<TinyTitle title="Empowering Enterprise Security with" />
						<h1>SharePass One</h1>
						<p className="desktop-text">Welcome to SharePass ONE, our flagship product developed for Enterprise clients. “SharePass One” is a comprehensive suite of advanced features tailored to meet modern organisations’ stringent security and collaboration demands. This enterprise-grade version of SharePass elevates data protection, data sovereignty, sharing efficiency, and administrative control, ensuring that sensitive information remains safeguarded while enabling seamless collaboration across platforms.</p>
						<p className="mobile-text">Welcome to SharePass ONE, our flagship product developed for Enterprise clients. “SharePass One” is a comprehensive suite of advanced features tailored to meet modern organisations’ stringent security and collaboration demands.</p>
						<button type='button' className="second" onClick={contactSales} >
							Contact Sales
						</button>
					</div>
					<video className="desktop-video" src={enterpriseVideo} autoPlay loop playsInline muted></video>
					<video className="mobile-video" src={enterpriseVideoVer} autoPlay loop playsInline muted></video>
				</div>
			</section>
			{false && <section className="features_sec" id="features">
				<div className="content_sec">
					<div className="flap" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
						<div className='text_wrap pr first-block-enterprise'>
							<div className="text_wraper">
								<TinyTitle title="Empowering Enterprise Security with" />
								<h1>SharePass One</h1>
							</div>
							<p>Welcome to SharePass ONE, our flagship product developed for Enterprise clients. “SharePass One” is a comprehensive suite of advanced features tailored to meet modern organisations’ stringent security and collaboration demands. This enterprise-grade version of SharePass elevates data protection, data sovereignty, sharing efficiency, and administrative control, ensuring that sensitive information remains safeguarded while enabling seamless collaboration across platforms.</p>
							<button type='button' className="second" onClick={contactSales} >
								Contact Sales
							</button>
						</div>
						<div className="video_wrap">
							<video
								className="img_video"
								// src={`${http1}${data.sec_image}`}
								src={enterpriseVideo}
								autoPlay
								loop
								muted
								playsInline
							/>
							{/* <Player src={enterpriseVideo} autoplay loop /> */}
						</div>
					</div>
				</div>
			</section>}
			<section className="enterprise_landing">
				<div className="content_sec">
					<div className="text_wraper">
						<h2>Exclusive Features</h2>
					</div>
					<div className="text-intro">
						<p className="para">
						Our enterprise product offers a comprehensive suite of advanced features, allowing your team to streamline workflows, boost productivity,and achieve remarkable efficiency gains. With enterprise-grade security measures, data protective is paramount, ensuring your sensitive information remains safe and confidential.
						</p>
					</div>
				</div>
			</section>

			<section className="features_sec" id="features">
				<div className="content_sec">
					<EnterpriseFeature elements={featuredItems} />
				</div>
			</section>
			
			<section className="enterprise_landing">
				<div className="content_sec">
					<div className="text_wraper">
						<h2>Summary</h2>
					</div>
					<div className="text-intro">
						<p className="para">
						SharePass ONE for Enterprise extends beyond data protection, offering an unparalleled suite of features to enhance collaboration, streamline workflows, and empower administrators. With advanced security measures, seamless integration options, customisation capabilities, and a commitment to innovation, SharePass ONE ensures that your organisation’s sensitive information remains under your control, even in today’s dynamic and collaborative digital landscape.
						</p>
					</div>
				</div>
			</section>
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
