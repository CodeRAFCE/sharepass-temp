import "./envelope.css";
import http1 from "../../variables";
import {Fragment, useRef, useEffect, useState} from "react";
import {InView} from "react-intersection-observer";

//
import envelopeVideoDesktop from "../../../assets/videos/compressed/envolope-hor.mp4";
import envelopeVideoMobile from "../../../assets/videos/compressed/envolope-ver.mp4";

// webm
import envelopeVideoDesktopWebm from "../../../assets/webm/envolope-hor.webm";
import envelopeVideoMobileWebm from "../../../assets/webm/envolope-ver.webm";

// fallback images
import envelopeDesktopImage from "../../../assets/fallback_images/enevelope-desktop.png";
import envelopeMobileImage from "../../../assets/fallback_images/enevelope-mobile.png";

// import {Player} from "@lottiefiles/react-lottie-player";

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
										src={envelopeVideoDesktop}
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
						<video className="desktop-video" preload autoPlay loop playsInline muted>
							<source src={envelopeVideoDesktop} type="video/mp4" />
							<source src={envelopeVideoDesktopWebm} type="video/webm" />
							<img
								src={envelopeDesktopImage}
								className="desktop-video"
								alt="mobile privacy desktop"
								style={{width: "100%", height: "100%", objectFit: "cover"}}
							/>
						</video>
						<video className="mobile-video" preload autoPlay loop playsInline muted>
							<source src={envelopeVideoMobile} type="video/mp4" />
							<source src={envelopeVideoMobileWebm} type="video/webm" />
							<img
								src={envelopeMobileImage}
								className="mobile-video"
								alt="mobile privacy mobile"
								style={{width: "100%", height: "100%", objectFit: "cover"}}
							/>
						</video>
					</div>
				</section>
			</InView>
		</Fragment>
	);
};

export default Envelope;
