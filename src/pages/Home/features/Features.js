import "./features.css";
import http1 from "../../variables";
import {Fragment, useRef, useEffect, useState} from "react";
import {InView} from "react-intersection-observer";
// import Lottie from "react-lottie-player";
import {Player} from "@lottiefiles/react-lottie-player";

// mp4s
import timeControlled from "../../../assets/videos/new/time-controlled.mp4";
import timeControlledMobile from "../../../assets/videos/new/time-controlled-mobile.mp4";
// import timeControlledMobileWM from "../../../assets/webm/1.webm";
import mobilePrivacy from "../../../assets/videos/new/privacy-message.mp4";

// lottie file
// import timeControlled from "../../../assets/lottie/time-controlled.json";
//import mobilePrivacy from "../../../assets/lottie/privacy-solution.json";

const Features = (props) => {
	const [first, setFirst] = useState(false);
	const [second, setSecond] = useState(false);
	const [third, setThird] = useState(false);

	return (
		<Fragment>
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
							className="flap"
							style={{opacity: first ? 1 : 0, transition: "all 1.5s ease-in-out"}}
						>
							<div className="video_wrap">
								{/* <Lottie animationData={timeControlled} loop play /> */}
								{/* <Player src={timeControlled} loop autoplay /> */}
								<video
									className="img_video desktop test-style"
									//src={`${http1}${props.image2}`}
									src={timeControlled}
									autoPlay
									loop
									muted
									playsInline
								/>

								<video
									className="img_video mobile"
									//src={`${http1}${props.image2}`}
									src={timeControlledMobile}
									autoPlay
									loop
									muted
									playsInline
								/>
								{/* <source src={timeControlledMobileWM} type="video/webm" />
									<source src={timeControlledMobile} type="video/mp4" />
									Your browser is not supported
								</video> */}
							</div>
							<div className="text_wrap pl">
								<h2>{props.title1}</h2>
								<p>{props.para1}</p>
							</div>
						</div>
					</InView>

					<InView
						onChange={(inView, entry) => {
							if (inView) {
								setSecond(true);
							} else {
								setSecond(false);
							}
						}}
					>
						<div className="video-container">
							<div
								className="flap center"
								style={{opacity: second ? 1 : 0, transition: "all 1.5s ease-in-out"}}
							>
								<div className="text_wrap pr">
									<h2>{props.title2}</h2>
									<p>{props.para2}</p>
								</div>

								<div className="video_wrap">
									{/*<Player src={mobilePrivacy} loop autoplay />*/}
									{
										<video
											className="img_video "
											//src={`${http1}${props.image2}`}
											src={mobilePrivacy}
											autoPlay
											loop
											muted
											playsInline
										/>
									}
								</div>
							</div>
						</div>
					</InView>

					{false && (
						<InView
							onChange={(inView, entry) => {
								if (inView) {
									setThird(true);
								} else {
									setThird(false);
								}
							}}
						>
							<div
								className="flap"
								style={{opacity: third ? 1 : 0, transition: "all 1.5s ease-in-out"}}
							>
								<div className="video_wrap">
									<video
										className="img_video"
										src={`${http1}${props.image3}`}
										autoPlay
										loop
										muted
										playsInline
									/>
								</div>
								<div className="text_wrap pl">
									<h2>{props.title3}</h2>
									<p>{props.para3}</p>
								</div>
							</div>
						</InView>
					)}
				</div>
			</section>
		</Fragment>
	);
};

export default Features;
