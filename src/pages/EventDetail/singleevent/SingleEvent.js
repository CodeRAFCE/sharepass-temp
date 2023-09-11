import "./singleevent.css";
import { useState } from "react";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultMetaTitle,defaultOgImg} from "../../../assets/js/blogConfig";
import { estimateReadingTime, cleanTags, decodeHtml } from "../../../services/utils";

const SingleEvent = (props) => {
    const [speaking, setSpeaking] = useState(false);

    function handleSpeak() {      
        if (!speaking) {
          const excerptSpeech = props.has_excerpt && props.excerpt && props.excerpt.rendered ? cleanTags(props.excerpt.rendered) : "";
          //const dateSpeech = props.date ? formatDate(props.date) : "";
          const contentSpeech = props.content && props.content.rendered ? cleanTags(props.content.rendered) : "";

          const Heading = new SpeechSynthesisUtterance(document.querySelector('h1').textContent);
          //const speech = new SpeechSynthesisUtterance(dateSpeech);
          const speechSecond = new SpeechSynthesisUtterance(excerptSpeech);
          const speechThrid = new SpeechSynthesisUtterance(contentSpeech);

          //speech.lang='en-US';
          //speech.rate=1.0;
          window.speechSynthesis.speak(Heading);
          //window.speechSynthesis.speak(speech);
          window.speechSynthesis.speak(speechSecond);
          window.speechSynthesis.speak(speechThrid);

          setSpeaking(true);
        } else {
          window.speechSynthesis.cancel();
          setSpeaking(false);
        }
    }

    function formatDate(dateString) {
      const date = new Date(dateString);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    /*let category;

    if(
      props._embedded && 
      props._embedded["wp:term"] && 
      props._embedded["wp:term"].length > 0 && 
      props._embedded["wp:term"][0].length > 0 &&
      props._embedded["wp:term"][0][0].name
    ){
      category = props._embedded["wp:term"][0][0].name;
    }else if(props.type == 'event'){
      category = "Event";
    }*/
    
    const metaDescription = props.content && props.content.rendered ? cleanTags(props.content.rendered) : defaultMetaDescription;
    return (
        <div className="single_blog">
            <Helmet>
              <title>{props.title && props.title.rendered ? `${decodeHtml(props.title.rendered)} | SharPass` : defaultMetaTitle}</title>
              <meta property="description" content={metaDescription.length > 200 ? metaDescription.substring(0,197) + "..."  : metaDescription} />
              <meta property="og:title" content={props.title && props.title.rendered ? `${decodeHtml(props.title.rendered)} | SharPass` : defaultMetaTitle} />
              <meta property="og:description" content={metaDescription.length > 200 ? metaDescription.substring(0,197) + "..."  : metaDescription} />
              <meta property="og:image" content={props.fimg_url? props.fimg_url : defaultOgImg} />
            </Helmet>
            <div className="date_line">
                <div className="tag">Event</div>
                <p className="date">  {props.event_reference_date ? props.event_reference_date : props.date ? formatDate(props.date) : ''}</p>
                <button onClick={handleSpeak} className="speak-article" style={{ border: "none" }}>
                    <svg version="1.0"
                        width="14.000000pt" height="14.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M4103 4575 c-45 -19 -121 -92 -146 -140 -15 -28 -21 -59 -22 -105 0
                  -78 10 -98 123 -237 279 -344 456 -749 529 -1205 24 -154 24 -534 0 -695 -66
                  -439 -222 -809 -490 -1165 -101 -136 -117 -168 -117 -240 0 -67 26 -124 80
                  -178 55 -55 111 -80 180 -80 103 0 149 35 287 220 202 269 364 591 466 930
                  295 971 66 2032 -606 2812 -58 67 -121 98 -199 98 -29 -1 -67 -7 -85 -15z"/>
                            <path d="M2226 4310 c-22 -12 -327 -260 -677 -551 l-638 -528 -374 -3 -374 -3
                  -49 -30 c-30 -19 -60 -49 -79 -79 l-30 -49 -3 -516 c-2 -458 -1 -521 14 -559
                  23 -61 60 -101 119 -128 50 -24 53 -24 411 -24 l361 0 634 -526 c349 -289 654
                  -537 679 -552 116 -69 279 -6 326 127 19 53 19 3239 0 3293 -16 46 -51 88 -96
                  118 -52 35 -170 40 -224 10z"/>
                            <path d="M3358 3789 c-93 -14 -186 -98 -214 -195 -24 -84 -10 -133 73 -252 37
                  -53 84 -127 106 -166 234 -424 210 -983 -59 -1382 -73 -109 -84 -136 -84 -204
                  0 -72 22 -122 81 -181 80 -80 192 -102 280 -56 103 54 271 334 358 595 58 174
                  82 317 88 524 8 257 -15 425 -87 648 -79 244 -290 594 -390 645 -44 23 -101
                  32 -152 24z"/>
                        </g>
                    </svg>
                </button>
            </div>
            <h1 className="blogtitle">
            {props.title && props.title.rendered ? decodeHtml(props.title.rendered) : ''}
            </h1>
            <div className="timing">
                <svg
                    width={24}
                    height={24}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.75 3.797C6.031 1.516 8.781.375 12 .375c3.219 0 5.953 1.14 8.203 3.422 2.281 2.25 3.422 4.984 3.422 8.203 0 3.219-1.14 5.969-3.422 8.25-2.25 2.25-4.984 3.375-8.203 3.375-3.219 0-5.969-1.125-8.25-3.375C1.5 17.969.375 15.219.375 12c0-3.219 1.125-5.953 3.375-8.203ZM22.125 12c0-2.813-1-5.203-3-7.172C17.156 2.86 14.781 1.875 12 1.875c-2.813 0-5.203 1-7.172 3C2.86 6.844 1.875 9.219 1.875 12c0 2.813.984 5.203 2.953 7.172 2 1.969 4.39 2.953 7.172 2.953 2.813 0 5.203-.984 7.172-2.953 1.969-2 2.953-4.39 2.953-7.172Zm-6.984 4.125-3.797-2.766a.46.46 0 0 1-.235-.421v-7.5c0-.375.188-.563.563-.563h.656c.375 0 .563.188.563.563v6.843l3.328 2.438c.281.219.312.469.093.75l-.375.562c-.218.282-.484.313-.796.094Z"
                        fill="#02F3A2"
                    />
                </svg>
                <p>{`~${props.content && props.content.rendered? estimateReadingTime(props.content.rendered) : 1} Min read`}</p>
            </div>
            <article>              
              <div className="blog_injector">
                <p style={{ fontWeight: 400 }}>                  
                  <div dangerouslySetInnerHTML={{ __html: props.excerpt && props.excerpt.rendered ? props.excerpt.rendered : '' }} className="container_wrap" />
                </p>
                <p>                  
                  <div dangerouslySetInnerHTML={{ __html: props.content && props.content.rendered ? props.content.rendered : '' }} className="container_wrap" />
                </p>                
              </div>
            </article>
        </div>
    )
}

export default SingleEvent;