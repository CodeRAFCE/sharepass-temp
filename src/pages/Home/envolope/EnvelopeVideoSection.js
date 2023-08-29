import styles from "./envelopeVideoSection.module.css";

// import {useState} from "react";
// import {InView} from "react-intersection-observer";

import envelopeHor from "../../../assets/videos/new/envolop-hor.mp4";
import envelopeVer from "../../../assets/videos/new/envolop-ver.mp4";

// webm
import envelopeWbmHor from "../../../assets/webm/envolop-wbm-hor.webm";
import envelopeWbmVer from "../../../assets/webm/envolop-wbm-ver.webm";

const EnvelopeVideoSection = (props) => {
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
					autoPlay
					loop
					muted
					playsInline
				>
					<source src={envelopeHor} type="video/mp4" />
				</video>

				<video
					className={`${styles.imgVideo} ${styles.mobile_video}`}
					//src={`${http1}${props.image2}`}
					autoPlay
					loop
					muted
					playsInline
				>
					<source src={envelopeVer} type="video/mp4" />
				</video>
				{/* </InView> */}
			</div>
		</section>
	);
};

export default EnvelopeVideoSection;
