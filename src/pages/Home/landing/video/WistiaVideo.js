import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import "./wistiavideo.css";
import close from "../../../../assets/images/whiteclose.svg";

const WistiaVideo = ({play=false, closePopup }) => {
  /*const embedUrl = `https://fast.wistia.net/embed/iframe/cx2anqroag.jsonp`;
  const endedAnimation = (e) => {
    console.log("event!!", e);
  };

  return (
    <section className="popup_video">
      <button type="button" onClick={closePopup}>
          <img src={close} alt="close" />
      </button>
      <div className='video_wrap'>
        <iframe 
          className='wistia_video' 
          width="100%" height="100%"
          src={embedUrl} 
          title="Intro video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowullscreen="true" 
          onChange={endedAnimation}
        >
        </iframe>
        
      </div>
    </section>
  );
  */
 
  const [video, setVideo] = useState();
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  });
  const refVideoWrap = useRef(null);

  useEffect(() => {
    if (!video) return
    if (play) {
      //console.log('play video')
      video.play()
    } else {
      video.pause()
    }
  }, [play, video])

  useEffect(() => {
    window._wq = window._wq || []

    // RUN WEBSITE IN PRICAVY MODE
    window._wq.push(function (W) {
      W.consent(true)
    })

    window._wq.push({
      id: "cx2anqroag",
      options: {
        // PLAYBACK
        preload: true,
        muted: false,
        playsinline: true,
        autoPlay: false,
        silentAutoPlay: true,
        //endVideoBehavior: 'loop',

        // LAYOUT
        fitStrategy: 'none',
        videoFoam: true,

        // TRACKING
        copyLinkAndThumbnailEnabled: false,
        doNotTrack: true,
        googleAnalytics: false,
        seo: false,

        // DEFAULT QUALITY
        // qualityMax,
        // qualityMin,

        // UI CONTROLS
        controlsVisibleOnLoad: true,
        fullscreenOnRotateToLandscape: false,
        fullscreenButton: true,
        settingsControl: true,
        qualityControl: true,
        playButton: true,
        playbar: true,
        playbackRateControl: true,
        smallPlayButton: true,
        stillUrl:  window.location.protocol + '//' + window.location.host + "/assets/img/video-bg.jpg",
        playerColor: "#1d8cf8",
        plugin: {
          "captions-v1": {
            onByDefault: true,
            language: 'en' 
          }
        }
      },
      onReady: myOnReady,
      /*onHasData: () => {
        console.log('onHasData')
      },*/
    })
  }, [])

  const onPlayEvent = () => {
    //console.log('The video was just played!', "cx2anqroag")
  }

  const onEndEvent = async () => {
    closePopup();
  }

  useEffect(() => {
    if (!video) return

    video.bind('play', onPlayEvent)
    video.bind('end', onEndEvent)
    video.bind('beforeremove', function () {
      return video.unbind
    })
    return () => {
      video.unbind('play', onPlayEvent)
      video.unbind('end', onEndEvent)
      //video.remove() // clean up
    }
  }, [video])

  const myOnReady = (video) => {
    //console.log('myOnReady')
    setVideo(video)
  }

  // const isSSR = typeof window === 'undefined'
  // if (isSSR) return null

  /*@TODO: Refactor resizing script */

  useEffect(() => {
    function handleResize() {

      clearTimeout(window.resizedFinished);
      window.resizedFinished = setTimeout(function(){
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }, 250);

    } 

    window.addEventListener('resize', handleResize)
  });

  return (
    <section className="popup_video">
      <button type="button" onClick={closePopup}>
          <img src={close} alt="close" />
      </button>
      <div ref={refVideoWrap} className='video_wrap'>
        <div className='wistia_video'>
          <div 
            className="WistiaEmbed wistia_embed wistia_async_cx2anqroag" 
            style={{
              width: refVideoWrap.current? refVideoWrap.current.offsetWidth : 0, 
              height: refVideoWrap.current? refVideoWrap.current.offsetHeight : 0,
              maxHeight: "646px"
            }} 
          ></div>
        </div>
      </div>
    </section>
  )
};

export default WistiaVideo;