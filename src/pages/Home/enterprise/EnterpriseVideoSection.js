import styles from "./enterpriseVideoSection.module.css";

// import {useState} from "react";
// import {InView} from "react-intersection-observer";

import enterpriseHor from "../../../assets/videos/compressed/enterprise-hor.mp4";
import enterpriseVer from "../../../assets/videos/compressed/enterprise-ver.mp4";

const EnterpriseVideoSection = (props) => {
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
					<h2>{props.title1}</h2>
					<p>{props.para1}</p>
				</div>

				<video
					className={`${styles.imgVideo} ${styles.desktop_video}`}
					//src={`${http1}${props.image2}`}
					src={enterpriseHor}
					autoPlay
					loop
					muted
					playsInline
				/>

				<video
					className={`${styles.imgVideo} ${styles.mobile_video}`}
					//src={`${http1}${props.image2}`}
					src={enterpriseVer}
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

export default EnterpriseVideoSection;
