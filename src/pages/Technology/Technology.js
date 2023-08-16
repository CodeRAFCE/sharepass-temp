import {Fragment, useEffect, useState} from "react";
import "./technology.css";
import Helmet from "react-helmet";
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

// MP4s
import enterpriseVideo from "../../assets/videos/new/enterprise-solution.mp4";
// lottie files
// import enterpriseVideo from "../../assets/lottie/ent-solution.json";

const Enterprise = () => {

	return (
		<Fragment>
			<Helmet>
				<title>Technology | SharePass</title>
				<meta property="description" content={defaultMetaDescription} />
				<meta property="og:title" content="Technology | SharePass" />
				<meta property="og:description" content={defaultMetaDescription} />
				<meta property="og:image" content={defaultOgImg} />
			</Helmet>
			<section className="features_sec" id="features">
				<div className="content_sec">
					<div className="flap" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
						<div className='text_wrap pr'>
							<div className="text_wraper">
								<h1>SharePass inspector</h1>
							</div>
							<p>
                                Protect your company's sensitive information with SharePass Inspector, the security add-on designed to safeguard your assets and enhance data privacy. Our AI-powered tool analyzes files and documents, such as agreements, contacts and other potentially confidential files.    
                            </p>
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
			</section>
			<section className="enterprise_landing">
				<div className="content_sec">
					<div className="text_wraper">
						<h2>Key Features</h2>
					</div>
					<div className="text-intro">
						<ul className="para">
                            <li><b>Multi-Format Data Processing:</b> Equipped with state-of-the-art AI technology, allowing it to seamlessly process various data formats, including images, plain text, audio records, and PDF files.</li>
                            <li><b>Sensitive Data Detection:</b> Our tool meticulously extracts information from the processed data and employs algorithms to identify potential sensitive data points (e.g. passwords, credit card / bank account numbers, IP addresses, and more).</li>
                            <li><b>Proactive Leak Detection:</b> It notifies you of potential leaks before they occur, empowering your company to take immediate action and safeguard vital information. The information is encrypted to ensure it does not get accessed by unauthorized people.</li>
						</ul>
					</div>
				</div>
			</section>

			
		</Fragment>
	);
};

export default Enterprise;
