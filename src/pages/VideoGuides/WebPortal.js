import { useEffect, useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import {apiUrl} from "../../assets/js/blogConfig";
import axios from "axios";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import TinyTitle from "../../components/tinytitle/TinyTitle";
import YouTubePlayer from 'react-player/youtube';

const WebPortal = () => {

    const [videoTutorials, setVideoTutorials] = useState([]);
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    });

    const carouselRef = useRef(null);

    const getVideoTutorials = async () => {
        
        await axios.get(`${apiUrl}wp-json/youtube/v1/videos?playlist=PLX59VfUF4v2AVg0vMKbZMzHls5c0WvOju`)
        .then((response) => {
            setVideoTutorials( response.data );
        })
        .catch((error) => {
            console.log(error);
        });

    }
    
    useEffect(() => {
        
        getVideoTutorials();

    }, []);

    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />;
        });

    useEffect(() => {
        function handleResize() {
            if (carouselRef.current) {
                console.log(carouselRef.current);
                setDimensions({
                    height: carouselRef.current.offsetWidth * 0.4825,
                    width: carouselRef.current.offsetWidth
                });
            }
        }
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>
        <Helmet>
            <title>How to use web portal | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="How to use web portal | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
        <section className="about_landing">
            <div ref={carouselRef} className='content_sec'>
                <div className="text_wraper">
                    <TinyTitle title="How to use" />
                    <h1>SharePass Web Portal</h1>
                          {false && <p>Embark on a guided exploration of SharePass's web portal through our comprehensive video gallery. Uncover a wealth of step-by-step tutorials and insightful demonstrations, designed to empower users of all levels in navigating and harnessing the full potential of our innovative software platform. Dive into an array of videos that unravel the intricacies of our web portal's features, ensuring a seamless and enriching experience as you embark on your journey towards mastering the art of utilizing our software to its fullest extent.</p>}
                </div>

                <Carousel thumbWidth={240} showArrows={true} dynamicHeight={true} renderItem={customRenderItem} renderThumbs={customRenderThumb}>
                  {videoTutorials && 
                      videoTutorials.map((video, index) => (
                          <YouTubePlayer 
                            width={"100%"}
                            height={`${dimensions.height}px`}
                            controls={true}
                            url={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
                            key={`youtube-${index}`}
                          />
                      ))
                  }
              </Carousel>
            </div>
            
        </section>
        
    </>;
}

export default WebPortal;