import "./envelope.css";
import http1 from "../../variables";
import {Fragment, useRef, useEffect, useState} from "react";
import {InView} from "react-intersection-observer";
import envelopeVideo from "../../../assets/animations/Envelope.mp4";
import envelopeVideoVer from "../../../assets/animations/Envelope-ver.mp4";

// webm
import envelopeVideoDesktop from "../../../assets/webm/envelope-desktop.webm";
import envelopeVideoMobile from "../../../assets/webm/envelope-mobile.webm";

// fallback images
import envelopeDesktopImage from "../../../assets/fallback_images/enevelope-desktop.png";
import envelopeMobileImage from "../../../assets/fallback_images/enevelope-mobile.png";

import {Player} from "@lottiefiles/react-lottie-player";

// lottie files
//import envelopeVideo from "../../../assets/lottie/privacy-solution.json";

const Envelope = (props) => {
	const [first, setFirst] = useState(false);

	return (
		<Fragment>
			{false && (
				<section className="features_sec" id="features">
					<div className="content_sec">
						<InView
							onChange={(inView, entry) => {
								if (inView) {
									setFirst(true);
								} else {
									setFirst(false);
								}
							}}
						>
							<div
								className="flap center"
								style={{opacity: first ? 1 : 0, transition: "all 1.5s ease-in-out"}}
							>
								<div className="video_wrap">
									<video
										className="img_video"
										src={envelopeVideo}
										autoPlay
										loop
										muted
										playsInline
									/>
									{/*<Player src={envelopeVideo} loop autoplay />*/}
								</div>
								<div className="text_wrap pl">
									<h2>Receive data securely</h2>
									<p>
										Use our envelope feature to request confidential data from third parties
										securely and smoothly
									</p>
								</div>
							</div>
						</InView>
					</div>
				</section>
			)}
			<InView
				onChange={(inView, entry) => {
					if (inView) {
						setFirst(true);
					} else {
						setFirst(false);
					}
				}}
			>
				<section className="section-container">
					<div className="content-wrapper content-wrapper-center-end">
						<div className="content-wrap pad-left">
							<h2>Receive data securely</h2>
							<p>
								Use our envelope feature to request confidential data from third parties securely
								and smoothly
							</p>
						</div>
						<video className="desktop-video" autoPlay loop playsInline muted>
							<source src={envelopeVideo} type="video/mp4" />
							<source src={envelopeVideoDesktop} type="video/webm" />
						</video>
						<video className="mobile-video" autoPlay loop playsInline muted>
							<source src={envelopeVideoVer} type="video/mp4" />
							<source src={envelopeVideoMobile} type="video/webm" />
						</video>
					</div>
				</section>
			</InView>
		</Fragment>
	);
};

export default Envelope;
