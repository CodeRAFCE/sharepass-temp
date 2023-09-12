import "./features.css";
import http1 from "../../variables";
import ReactPlayer from "react-player";

import {Fragment, useRef, useEffect, useState} from "react";
import {InView} from "react-intersection-observer";
// import Lottie from "react-lottie-player";
import {Player} from "@lottiefiles/react-lottie-player";

// Import your videos
import timeControlledDesktop from "../../../assets/videos/compressed/time-controlled-hor.mp4";
import timeControlledMobile from "../../../assets/videos/compressed/time-controlled-ver.mp4";

import mobilePrivacyDesktop from "../../../assets/animations/Mobile-Privacy.mp4";
import mobilePrivacyMobile from "../../../assets/animations/Mobile-Privacy-ver.mp4";

// Import webm versions if available
import timeControlledDesktopWebm from "../../../assets/webm/time-controlled-hor.webm";
import timeControlledMobileWebm from "../../../assets/webm/time-controlled-ver.webm";

import mobilePrivacyDesktopWebm from "../../../assets/webm/mobile-privacy-desktop.webm";
import mobilePrivacyMobileWebm from "../../../assets/webm/mobile-privacy-mobile.webm";

// fallback images
import timeControlledDesktopImage from "../../../assets/fallback_images/time-controlled-desktop.png";
import timeControlledMobileImage from "../../../assets/fallback_images/time-controlled-mobile.png";

import mobilePrivacyDesktopImage from "../../../assets/fallback_images/mobile-privacy-desktop.png";
import mobilePrivacyMobileImage from "../../../assets/fallback_images/mobile-privacy-mobile.png";

import Envelope from "../../../pages/Enterprise/envelope/Envelope";
// lottie file
// import timeControlled from "../../../assets/lottie/time-controlled.json";
//import mobilePrivacy from "../../../assets/lottie/privacy-solution.json";

const Features = (props) => {
	// const [first, setFirst] = useState(false);
	// const [second, setSecond] = useState(false);
	// const [third, setThird] = useState(false);

	// const timeControlledDesktopRef = useRef();
	// const timeControlledMobileRef = useRef();

	// const mobilePrivacyDesktopRef = useRef();
	// const mobilePrivacyMobileRef = useRef();

	return (
		<Fragment>
			<section className="section-container">
				<div className="content-wrapper content-wrapper-center-start">
					<div className="content-wrap pad-left">
						<h2>Time-Controlled Secrets</h2>
						<p>
							Empower users with personalized access to sensitive data that offer scheduled
							releases, time-limited availability, and single or multiple access options for a
							superior user experience.
						</p>
					</div>
					<video className="desktop-video" preload autoPlay loop playsInline muted>
						<source src={timeControlledDesktop} type="video/mp4" />
						<source src={timeControlledDesktopWebm} type="video/webm" />
						<img
							src={timeControlledDesktopImage}
							alt="mobile privacy desktop"
							className="desktop-video"
							style={{width: "100%", height: "100%", objectFit: "cover"}}
						/>
					</video>
					<video className="mobile-video" preload autoPlay loop playsInline muted>
						<source src={timeControlledMobile} type="video/mp4" />
						<source src={timeControlledMobileWebm} type="video/webm" />

						<img
							src={timeControlledMobileImage}
							alt="mobile privacy desktop"
							className="desktop-video"
							style={{width: "100%", height: "100%", objectFit: "cover"}}
						/>
					</video>
				</div>
			</section>

			<section className="section-container">
				<div className="content-wrapper content-wrapper-center-end">
					<div className="dark-content pad-left">
						<h2>Your Mobile Privacy solution</h2>
						<p>
							The AI-powered SharePass Keyboard secures your data on any app, eliminating digital
							footprints. Protect your privacy on any mobile app.
						</p>
					</div>

					<video className="desktop-video" preload autoPlay loop playsInline muted>
						<source src={mobilePrivacyDesktop} type="video/mp4" />
						<source src={mobilePrivacyDesktopWebm} type="video/webm" />
						<img
							src={mobilePrivacyDesktopImage}
							className="desktop-video"
							alt="mobile privacy desktop"
							style={{width: "100%", height: "100%", objectFit: "cover"}}
						/>
					</video>

					<video className="mobile-video" preload autoPlay loop playsInline muted>
						<source src={mobilePrivacyMobile} type="video/mp4" />
						<source src={mobilePrivacyMobileWebm} type="video/webm" />
						<img
							src={mobilePrivacyMobileImage}
							className="mobile-video"
							alt="mobile privacy mobile"
							style={{width: "100%", height: "100%", objectFit: "cover"}}
						/>
					</video>
				</div>
			</section>

			<Envelope />
		</Fragment>
	);
};

export default Features;

// {
// 	false && (
// 		<section className="features_sec" id="features">
// 			<div className="content_sec">
// 				<InView
// 					onChange={(inView, entry) => {
// 						if (inView) {
// 							setFirst(true);
// 						} else {
// 							setFirst(false);
// 						}
// 					}}
// 				>
// 					<div
// 						className="flap"
// 						style={{opacity: first ? 1 : 0, transition: "all 1.5s ease-in-out"}}
// 					>
// 						<div className="video_wrap">
// 							{/* <Lottie animationData={timeControlled} loop play /> */}
// 							{/* <Player src={timeControlled} loop autoplay /> */}
// 							<video
// 								className="img_video"
// 								//src={`${http1}${props.image2}`}
// 								src={timeControlled}
// 								autoPlay
// 								loop
// 								muted
// 								playsInline
// 							/>
// 						</div>
// 						<div className="text_wrap pl">
// 							<h2>{props.title1}</h2>
// 							<p>{props.para1}</p>
// 						</div>
// 					</div>
// 				</InView>

// 				<InView
// 					onChange={(inView, entry) => {
// 						if (inView) {
// 							setSecond(true);
// 						} else {
// 							setSecond(false);
// 						}
// 					}}
// 				>
// 					<div
// 						className="flap center"
// 						style={{opacity: second ? 1 : 0, transition: "all 1.5s ease-in-out"}}
// 					>
// 						<div className="text_wrap pr">
// 							<h2>{props.title2}</h2>
// 							<p>{props.para2}</p>
// 						</div>

// 						<div className="video_wrap">
// 							{/*<Player src={mobilePrivacy} loop autoplay />*/}
// 							{
// 								<video
// 									className="img_video"
// 									//src={`${http1}${props.image2}`}
// 									src={mobilePrivacy}
// 									autoPlay
// 									loop
// 									muted
// 									playsInline
// 								/>
// 							}
// 						</div>
// 					</div>
// 				</InView>

// 				{false && (
// 					<InView
// 						onChange={(inView, entry) => {
// 							if (inView) {
// 								setThird(true);
// 							} else {
// 								setThird(false);
// 							}
// 						}}
// 					>
// 						<div
// 							className="flap"
// 							style={{opacity: third ? 1 : 0, transition: "all 1.5s ease-in-out"}}
// 						>
// 							<div className="video_wrap">
// 								<video
// 									className="img_video"
// 									src={`${http1}${props.image3}`}
// 									autoPlay
// 									loop
// 									muted
// 									playsInline
// 								/>
// 							</div>
// 							<div className="text_wrap pl">
// 								<h2>{props.title3}</h2>
// 								<p>{props.para3}</p>
// 							</div>
// 						</div>
// 					</InView>
// 				)}
// 			</div>
// 		</section>
// 	);
// }
