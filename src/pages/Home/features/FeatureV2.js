import "./featuresV2.css";

import React, {useState} from "react";
import {InView} from "react-intersection-observer";

import timeControlled from "../../../assets/videos/new/time-controlled.mp4";
import timeControlledMobile from "../../../assets/videos/new/time-controlled-mobile.mp4";

const FeatureV2 = (props) => {
	const [first, setFirst] = useState(false);
	return (
		<section className={"section_container"}>
			<InView
				onChange={(inView, entry) => {
					if (inView) {
						setFirst(true);
					} else {
						setFirst(false);
					}
				}}
				style={{
					opacity: first ? 1 : 0,
					transition: "all 1.5s ease-in-out",
					width: "100%",
					height: "100%",
				}}
				className="center_end"
			>
				<video
					className={"imgVideo desktop_video"}
					//src={`${http1}${props.image2}`}
					src={timeControlled}
					autoPlay
					loop
					muted
					playsInline
				/>

				<video
					className={"imgVideo mobile_video"}
					//src={`${http1}${props.image2}`}
					src={timeControlledMobile}
					autoPlay
					loop
					muted
					playsInline
				/>
				<div className="content_wrap pad_left">
					<h2>{props.title1}</h2>
					<p>{props.para1}</p>
				</div>
			</InView>
		</section>
	);
};

export default FeatureV2;
