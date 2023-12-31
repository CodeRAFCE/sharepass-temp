import styles from "./mobile-privacy.module.css";

// import React, {useState} from "react";
// import {InView} from "react-intersection-observer";

import mobilePrivacyHor from "../../../assets/videos/new/mobile-privacy-hor.mp4";
import mobilePrivacyVer from "../../../assets/videos/new/mobile-privacy-ver.mp4";

const MobilePrivacy = (props) => {
	// const [first, setFirst] = useState(false);
	return (
		<section className={styles.section_container}>
			<div className={`${styles.content_wrapper} ${styles.center_end}`}>
				{/* <InView
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
					className={styles.center_end}
				> */}
				<div className={`${styles.content_wrap} ${styles.pad_left}`}>
					<h2 style={{color: "#0A172C"}}>{props.title1}</h2>
					<p style={{color: "#0A172C"}}>{props.para1}</p>
				</div>

				<video
					className={`${styles.imgVideo} ${styles.desktop_video}`}
					//src={`${http1}${props.image2}`}
					src={mobilePrivacyHor}
					autoPlay
					loop
					muted
					playsInline
				/>

				<video
					className={`${styles.imgVideo} ${styles.mobile_video}`}
					//src={`${http1}${props.image2}`}
					src={mobilePrivacyVer}
					autoPlay
					loop
					muted
					playsInline
				/>
				{/* </InView> */}
			</div>
		</section>
	);
};

export default MobilePrivacy;
