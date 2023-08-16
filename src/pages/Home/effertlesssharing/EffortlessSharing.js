import "./effortlesssharing.css";
import http1 from "../../variables";
import {useEffect, useState} from "react";
import {Player} from "@lottiefiles/react-lottie-player";

// mp4s
import video from "../../../assets/videos/new/effortless-file-sharing.mp4";

// lottie files
// import video from "../../../assets/lottie/effortless-file-sharing.json";

const EffortlessSharing = (props) => {
	/*const [active, setActive] = useState('');
    function fillProgressBarA() {
        setTimeout(() => { fillProgressBarB() }, 7000);
        setActive('A');
    }
    function fillProgressBarB() {
        setTimeout(() => { fillProgressBarA() }, 7000);
        setActive('B');
    }
    useEffect(() => {
        fillProgressBarA();
    }, []);*/

	return (
		<section className="effortless">
			<div className="content_sec">
				<div className="grid_sec">
					{/* For Screen > 900px */}
					<div className="text_wraper">
						<h2>Effortless File Sharing</h2>
						<div className={`text_block open`}>
							{false && (
								<div className="progress">
									<div className={`filler`}></div>
								</div>
							)}
							<h3>{props.title1}</h3>
							<p>{props.para1}</p>
						</div>
						<div className={`text_block open`}>
							{false && (
								<div className="progress">
									<div className={`filler`}></div>
								</div>
							)}
							<h3>{props.title2}</h3>
							<p>{props.para2}</p>
						</div>
					</div>
					{/* For Screen < 900px */}
					<div className="small_text_wrap">
						<h2>Effortless File Sharing</h2>
						<div className="horizontal_wrap">
							{false && (
								<div className="h_progress">
									<div className={`h_filler`}></div>
								</div>
							)}
							{false && (
								<div className="h_progress">
									<div className={`h_filler`}></div>
								</div>
							)}
						</div>
						<div className="h_text_block">
							<h3>{props.title1}</h3>
							<p>{props.para1}</p>
						</div>
						<div className="h_text_block">
							<h3>{props.title2}</h3>
							<p>{props.para2}</p>
						</div>
					</div>
					<div className="video_wraper">
						{/* <Player src={video} loop autoplay /> */}
						<video
							className="anim_video"
							// src={`${http1}${props.video}`}
							src={video}
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EffortlessSharing;
