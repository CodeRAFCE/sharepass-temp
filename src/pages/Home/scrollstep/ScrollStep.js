import "./scrollstep.css";
import http1 from "../../variables";
import {useEffect, useState, useRef} from "react";
import React, {Component} from "react";
import Slider from "react-slick";
// import seamlessIntegration from "../../../assets/animations/Seamless-integration.mp4";
import {Player} from "@lottiefiles/react-lottie-player";

// lottie files
import seamlessIntegration from "../../../assets/lottie/seemless-integration.json";

const ScrollStep = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		cssEase: "linear",
	};
	const [activeNum, setActiveNum] = useState(1);

	const sectionRefs = [useRef(null), useRef(null), useRef(null)];

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.id === "one") {
						setActiveNum(1);
					} else if (entry.target.id === "two") {
						setActiveNum(2);
					} else if (entry.target.id === "three") {
						setActiveNum(3);
					}
				}
			});
		};
		const observer = new IntersectionObserver(handleIntersection, options);
		sectionRefs.forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});
		return () => {
			sectionRefs.forEach((ref) => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			});
		};
	}, []);

	/*useEffect(() => {
        var frameNumber = 0, // start video at frame 0
        
        // lower numbers = faster playback
        playbackConst = 500, 
         
        // select video element         
        vid = document.getElementById('videoScrollable'); 
        // var vid = $('#v0')[0]; // jquery option

        // dynamically set the page height according to video length
        vid.addEventListener('loadedmetadata', function() {
        //setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
        });


        // Use requestAnimationFrame for smooth playback
        function scrollPlay(){  
        console.log("asasd")
        }

        window.requestAnimationFrame(scrollPlay);
    }, []);*/

	return (
		<div className="scroll_step">
			<div className="content_sec">
				{/*For width >= 900  */}
				<div className="step_grid">
					<div className="stepimg_wrap">
						<div className="sticky_imagewrap">
							{activeNum === 1 && false && <img alt="image" src={`${http1}${props.image1}`} />}
							{activeNum === 2 && false && <img src={`${http1}${props.image2}`} alt="img" />}
							{activeNum === 3 && false && <img alt="image" src={`${http1}${props.image3}`} />}
							{/* <video
								id="videoScrollable"
								// src={"/assets/videos/SharePass-Features.webm"}
								src={seamlessIntegration}
								autoPlay
								loop
								muted
							/> */}
							<Player src={seamlessIntegration} autoplay loop />
						</div>
					</div>
					<div className="steptext_wrap">
						<div
							className="block"
							style={{opacity: activeNum === 1 ? 1 : 0.4, transition: "all 0.5s linear"}}
							id="one"
							ref={sectionRefs[0]}
						>
							<h2>{props.title1}</h2>
							<p>{props.para1}</p>
						</div>
						<div
							className="block"
							style={{opacity: activeNum === 2 ? 1 : 0.4, transition: "all 0.5s linear"}}
							id="two"
							ref={sectionRefs[1]}
						>
							<h2>{props.title2}</h2>
							<p>{props.para2}</p>
						</div>
						<div
							className="block"
							style={{opacity: activeNum === 3 ? 1 : 0.4, transition: "all 0.5s linear"}}
							id="three"
							ref={sectionRefs[2]}
						>
							<h2>{props.title3}</h2>
							<p>{props.para3}</p>
						</div>
					</div>
					<div className="mile_stone">
						<div className="point_wrap">
							<div className={`point ${activeNum === 1 ? "active" : ""}`}></div>
							<div className={`point ${activeNum === 2 ? "active" : ""}`}></div>
							<div className={`point ${activeNum === 3 ? "active" : ""}`}></div>
						</div>
					</div>
				</div>
				{/* {For width < 900px */}
				<div className="tab_slider">
					<Slider {...settings}>
						<div className="slide">
							<div className="img_part">
								<img alt="image" src={`${http1}${props.image1}`} />
							</div>
							<h2>{props.title1}</h2>
							<p>{props.para1}</p>
						</div>

						<div className="slide">
							<div className="img_part">
								<img alt="image" src={`${http1}${props.image2}`} />
							</div>
							<h2>{props.title1}</h2>
							<p>{props.para1}</p>
						</div>

						<div className="slide">
							<div className="img_part">
								<img alt="image" src={`${http1}${props.image3}`} />
							</div>
							<h2>{props.title1}</h2>
							<p>{props.para1}</p>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ScrollStep;
