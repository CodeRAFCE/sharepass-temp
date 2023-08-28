import {useEffect, useState} from "react";
import axios from "axios";
import "./home.css";
import {useLocation} from "react-router-dom";
import Landing from "./landing/Landing";
import OurCustomers from "./ourcustomers/OurCustomers";
import Features from "./features/Features";
import EffortlessSharing from "./effertlesssharing/EffortlessSharing";
import ConnectingWorld from "./connecting/ConnectingWorld";
import MeetTeam from "./meetteam/MeetTeam";
import ScrollStep from "./scrollstep/ScrollStep";
import BottomSec from "./bottom/BottomSec";
import FindPlan from "./findplan/FindPlan";
import Blog from "./blog/Blog";
import Map from "./map/Map";
import Statistics from "./statistics/Statistics";
import Helmet from "react-helmet";
import {defaultMetaDescription, defaultMetaTitle, defaultOgImg} from "../../assets/js/blogConfig";
import FeatureV2 from "./features/FeaturesV2";
import EnterpriseVideoSection from "./enterprise/EnterpriseVideoSection";
import MobilePrivacy from "./mobileprivacy/MobilePrivacy";
import EnvelopeVideoSection from "./envolope/EnvelopeVideoSection";
//import Envelope from "./envelope/Envelope";

function Home() {
	const location = useLocation();
	const currentPath = location.pathname;
	const [page, setPage] = useState([]);

	const Homepage = async () => {
		setPage({
			_id: "644f5c7c3681f42ccab9355e",
			sec_1_title: "Don’t risk it,<br/> SharePass it",
			createdAt: "2023-05-01T06:30:20.340Z",
			updatedAt: "2023-07-10T13:24:19.203Z",
			__v: 0,
			sec_10_desc:
				"In today's digital age, safe and secure communication is more important than ever. Join the SharePass community today and experience the peace of mind that comes with safe and secure communication in a digital world.",
			sec_10_image: "public/files/2023-05-21T20-31-27.110Z-Infrastructure-globe_public-infra.png",
			sec_10_title: "  Connecting the World",
			sec_11_desc_1:
				"Quickly connect SharePass to your existing systems, and take advantage of the convenient integration tools to enhance your data-sharing capabilities.\r\n",
			sec_11_desc_2:
				"Accelerate app development with SharePass RESTful API, the secure and easy way to integrate data-sharing capabilities into your application. Whether building a new app or enhancing an existing one, our API provides the flexibility and convenience you need.",
			sec_11_desc_3:
				"Use SharePass webhooks to ensure secure and reliable data sharing, with the ability to authenticate incoming data to verify the authenticity of the webhook received.",
			sec_11_image_1: "public/files/2023-07-10T13-24-18.964Z-Seamless Integration.png",
			sec_11_image_2:
				"public/files/2023-07-10T13-24-18.974Z-Power Your Apps with SharePass RESTful API.png",
			sec_11_image_3: "public/files/2023-07-10T13-24-18.982Z-Apps Alert.png",
			sec_11_main_desc: "Consequat Deserunt ",
			sec_11_main_heading: "Dolore non labore ha",
			sec_11_title_1: "Seamless Integration for Secure Data Sharing",
			sec_11_title_2: "Power Your Apps with SharePass RESTful API",
			sec_11_title_3: "Get Your Apps Alerted",
			sec_12_desc_1:
				"Our Free plan is a great way to get started with privacy management. While it provides limited features, it still offers important security measures such as encryption and secure storage for your confidential information.",
			sec_12_desc_2:
				"This plan is perfect for individuals who want complete control over their personal information. With unlimited usage, and access logs, you can rest assured that your data is protected.",
			sec_12_desc_3:
				"This plan provides a user management portal, allowing you to manage access to confidential information for your team or organization. With additional storage, security keys, and custom secrets, you can easily collaborate on projects and manage sensitive data. The Business plan offers all the features your organization needs to protect your most precious data.",
			sec_12_image_1: "public/files/2023-05-21T19-41-36.390Z-trust (1).svg",
			sec_12_image_2: "public/files/2023-05-21T19-41-36.391Z-anyone-can-use (1).svg",
			sec_12_image_3: "public/files/2023-05-21T19-41-36.392Z-share (1).svg",
			sec_12_main_desc: "Consequat Deserunt ",
			sec_12_main_heading: "Dolore non labore ha",
			sec_12_title_1: "Free",
			sec_12_title_2: "Personal",
			sec_12_title_3: "Business",
			sec_1_desc: "An online digital security solution for confidential\r\ninformation sharing.",
			sec_1_image: "public/files/2023-05-21T19-33-09.105Z-Home.png",
			sec_2_desc:
				"Empower users with personalized access to sensitive data that offer scheduled releases, time-limited availability, and single or multiple access options for a superior user experience.\r\n\r\n",
			sec_2_image: "public/files/2023-07-06T14-11-47.204Z-1.webm",
			sec_2_title: "Time-Controlled Secrets",
			sec_3_desc:
				"The AI-powered SharePass Keyboard secures your data on any app, eliminating digital footprints. Protect your privacy on any mobile app.",
			sec_3_image: "public/files/2023-07-06T14-12-58.537Z-5.webm",
			sec_3_title: "Your Mobile Privacy solution",
			sec_4_desc:
				"Enhance your organization's security, control, and scalability with our customizable solutions, featuring white labelling, custom domain, SSO, and private instances in your preferred location for elevated standards.",
			sec_4_title: "Enterprise Solutions",
			sec_5_desc:
				"Send large files hassle-free. Our platform guarantees absolute confidentiality. Easy to use, private, and safe.​",
			sec_5_title: "Secure Sharing Made Easy",
			sec_6_desc:
				"Collect files securely from users that do not even have a SharePass account. Just send the link and streamline your file-sharing process today.",
			sec_6_image: "public/files/2023-07-06T17-12-47.600Z-3.webm",
			sec_6_title: "Receive Safely Anywhere",
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
			sec_12_desc_4:
				"Our Enterprise plan is ideal for organisations requiring advanced privacy management capabilities. You'll have complete control over your confidential information with exclusive features like dedicated instances, SSO, and white labelling. Customizable to fit your unique needs, this plan provides the ultimate level of privacy and security for your organization.",
			sec_12_image_4: "public/files/2023-05-21T19-41-36.392Z-share (1).svg",
			sec_12_title_4: "Enterprise",
			sec_4_image: "public/files/2023-07-06T14-21-20.387Z-2.webm",
		});
	};

	useEffect(() => {
		if (page.length > 0) return;
		Homepage();
		window.scrollTo(0, 0);
	}, []);
	console.log("home");

	return (
		<section className="home">
			<Helmet>
				<title>{defaultMetaTitle}</title>
				<meta property="description" content={defaultMetaDescription} />
				<meta property="og:title" content={defaultMetaTitle} />
				<meta property="og:description" content={defaultMetaDescription} />
				<meta property="og:image" content={defaultOgImg} />
			</Helmet>
			<Landing title={page.sec_1_title} para={page.sec_1_desc} />
			{false && <Statistics />}
			<OurCustomers />

			{/* -------------------------------------------- */}
			{/* -------------------------------------------- */}
			<MobilePrivacy title1={page.sec_3_title} para1={page.sec_3_desc} image1={page.sec_3_image} />
			<FeatureV2 title1={page.sec_2_title} para1={page.sec_2_desc} image1={page.sec_2_image} />
			{/* <EnterpriseVideoSection
				title1={page.sec_4_title}
				para1={page.sec_4_desc}
				image1={page.sec_4_image}
			/> */}

			<EnvelopeVideoSection
				title1={"Receive data securely"}
				para1={
					"Use our envelope feature to request confidential data from third parties securely and smoothly"
				}
				image1={page.sec_4_image}
			/>
			{/* -------------------------------------------- */}
			{/* -------------------------------------------- */}

			{/* <Features
        title1={page.sec_2_title}
        title2={page.sec_3_title}
        title3={page.sec_4_title}
        para1={page.sec_2_desc}
        para2={page.sec_3_desc}
        para3={page.sec_4_desc}
        image1={page.sec_2_image}
        image2={page.sec_3_image}
        image3={page.sec_4_image}
      /> */}

			<EffortlessSharing
				title1={page.sec_5_title}
				title2={page.sec_6_title}
				para1={page.sec_5_desc}
				para2={page.sec_6_desc}
				video={page.sec_6_image}
			/>

			{/*false && <Envelope
        title1={page.sec_2_title}
        title2={page.sec_3_title}
        title3={page.sec_4_title}
        para1={page.sec_2_desc}
        para2={page.sec_3_desc}
        para3={page.sec_4_desc}
        image1={page.sec_2_image}
        image2={page.sec_3_image}
        image3={page.sec_4_image}
 		 />*/}

			<ConnectingWorld
				image={page.sec_10_image}
				title={page.sec_10_title}
				para={page.sec_10_desc}
			/>
			<MeetTeam image={page.sec_11_image_1} />
			<ScrollStep
				title1={page.sec_11_title_1}
				title2={page.sec_11_title_2}
				title3={page.sec_11_title_3}
				para1={page.sec_11_desc_1}
				para2={page.sec_11_desc_2}
				para3={page.sec_11_desc_3}
				image1={page.sec_11_image_1}
				image2={page.sec_11_image_2}
				image3={page.sec_11_image_3}
			/>
			<FindPlan
				image1={page.sec_12_image_1}
				image2={page.sec_12_image_2}
				image3={page.sec_12_image_3}
				image4={page.sec_12_image_4}
				title1={page.sec_12_title_1}
				title2={page.sec_12_title_2}
				title3={page.sec_12_title_3}
				title4={page.sec_12_title_4}
				para1={page.sec_12_desc_1}
				para2={page.sec_12_desc_2}
				para3={page.sec_12_desc_3}
				para4={page.sec_12_desc_4}
			/>
			<Blog />
			<Map />
			<BottomSec />
		</section>
	);
}

export default Home;
