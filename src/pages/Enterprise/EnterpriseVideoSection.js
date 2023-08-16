import styles from "./enterpriseVideoSection.module.css";

import enterpriseHor from "../../assets/videos/new/enterprise-hor.mp4";
import enterpriseVer from "../../assets/videos/new/enterprise-ver.mp4";

const EnterpriseVideoSection = (props) => {
	// const [first, setFirst] = useState(false);
	return (
		<section className={styles.section_container}>
			<div className={`${styles.content_wrapper} ${styles.center_end}`}>
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
			</div>
		</section>
	);
};

export default EnterpriseVideoSection;
