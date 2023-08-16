import "./resourcesstepper.css";
import SectionTitle from "./sectiontitle/SectionTitle";
import { Fragment, useEffect, useState, useRef } from 'react';
import articlibg from "../../../assets/images/article-bg-dots.avif";
import blockbg from "../../../assets/images/blog-media-dots.avif";
import eventbg from "../../../assets/images/event-layer.avif";
import BlockCard from "./blockcard/BlockCard";
import axios from "axios";
import pdfFile from "../../../assets/GISEC24-Sharepass.pdf";
import {apiBaseUrl} from "../../../assets/js/blogConfig";
import { useNavigate } from "react-router-dom";

const ResourcesStepper = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);
    const [blogData, setBlogData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [mediaData, setMediaData] = useState([]);
    
    const [blogPage, setBlogPage] = useState(1);
    const [blogHeaders, setBlogHeaders] = useState({});
    const [blogLoading, setBlogLoading] = useState(false);

    const [eventPage, setEventPage] = useState(1);
    const [eventHeaders, setEventHeaders] = useState({});
    const [eventLoading, setEventLoading] = useState(false);

    const [mediaPage, setMediaPage] = useState(1);
    const [mediaHeaders, setMediaHeaders] = useState({});
    const [mediaLoading, setMediaLoading] = useState(false);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }


    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'first') {
                    setActiveStep(1);
                } else if (entry.target.id === 'second') {
                    setActiveStep(2);
                } else if (entry.target.id === 'third') {
                    setActiveStep(3);
                } else if (entry.target.id === 'fourth') {
                    setActiveStep(4);
                }
            }
        });
    };


    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const getblogs = async (page = 1) => {
        setBlogLoading(true);
        await axios.get(`${apiBaseUrl}posts?_embed=true&per_page=4&page=${page}`)
            .then((response) => {
                setBlogHeaders(response.headers);
                setBlogData([].concat(blogData, response.data));

            })
            .catch((error) => {
                console.log(error);
            });
        setBlogLoading(false);

        
        const sectionRef = sectionRefs[0];
        if (sectionRef.current) {
            const observer = new IntersectionObserver(handleIntersection, options);
            // Re-observe the section
            observer.observe(sectionRef.current);
        }
    }

    const getEvents = async (page = 1) => {
        setEventLoading(true);
        await axios.get(`${apiBaseUrl}event?per_page=3&page=${page}`)
            .then((response) => {
                setEventHeaders(response.headers);
                setEventData([].concat(eventData, response.data));
            })
            .catch((error) => {
                console.log(error);
            });
        setEventLoading(false);

    }

    const getMediaPosts = async (page = 1) => {
        setMediaLoading(true);
        await axios.get(`${apiBaseUrl}mediapost?_embed=true&per_page=4&page=${page}`)
            .then((response) => {
                setMediaHeaders(response.headers);
                setMediaData([].concat(mediaData, response.data));

            })
            .catch((error) => {
                console.log(error);
            });
        setMediaLoading(false);
    }


    const scrollToSection = (idName) => {
        const section = document.getElementById(idName);
        section.scrollIntoView({ behavior: 'smooth' });
        const offset = 100;
        const topOffset = section.offsetTop - offset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
    };

    const setStepHandler = (num) => {
        setActiveStep(num);

        if (num === 1) {
            scrollToSection('first');
        } else if (num === 2) {
            scrollToSection('second');
        } else if (num === 3) {
            scrollToSection('third');
        } else if (num === 4) {
            scrollToSection('fourth');
        } else {
            scrollToSection('first');
        }
    }

    useEffect(() => {
        getblogs();
        getEvents();
        getMediaPosts();

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

    return (
        <section className="resource_stepper">
            <div className="content_sec">
                <div className="step_grid">
                    <div className="step_sec">
                        <div className="step_block">
                            <button type="button" className={activeStep === 1 ? 'active' : ''} onClick={() => setStepHandler(1)}><span></span>Blog</button>
                            <button type="button" className={activeStep === 2 ? 'active' : ''} onClick={() => setStepHandler(2)}><span></span>Events</button>
                            <button type="button" className={activeStep === 3 ? 'active' : ''} onClick={() => setStepHandler(3)}><span></span>Media</button>
                        </div>
                    </div>
                    <div className="sec_content">
                        <div className="sec sec_article" id='first' ref={sectionRefs[0]}>
                            <SectionTitle title="Blog Articles" img={articlibg} />
                            {blogData.length > 0 && <div className="cards_grid">
                                {blogData.map((data) => {
                                    return (<Fragment key={data.slug}>
                                        <BlockCard title={data.title? data.title.rendered : ""} img={data.fimg_url} type={'Blog'} id={data.slug} date={formatDate(data.date)} />
                                    </Fragment>)
                                })}
                            </div>}

                            {blogHeaders && blogPage < blogHeaders["x-wp-totalpages"] && <div className="btn_wrap">
                                <button onClick={async () => {
                                    const newPage = blogPage + 1;
                                    await getblogs(newPage);
                                    setBlogPage(newPage);
                                }} type="button" disabled={blogLoading}>load more</button>
                            </div>}

                            {blogData.length === 0 && <p className="notice">Currently no upcoming blogs, please view our past blogs.</p>}
                        </div>

                        <div className="sec sec_event" id='second' ref={sectionRefs[1]}>
                            <SectionTitle title="Upcoming Events" img={blockbg} />
                            <div className="events-container events-container-resources">
                                {eventData.length > 0 && eventData.map((data) => {
                                            return <Fragment key={data.slug}>
                                                <div className="event_card">
                                                    <div className="event_inner_card">
                                                        <div className="image_wrap">
                                                            <img src={data.fimg_url}></img>
                                                        </div>
                                                        <div className="text_wrap">
                                                            <small>{data.event_reference_date}</small>
                                                            <h3 dangerouslySetInnerHTML={{__html: data.title? data.title.rendered : ""}} />
                                                            <p dangerouslySetInnerHTML={{__html: data.excerpt ? data.excerpt.rendered : ""}} />
                                                        </div>
                                                    </div>
                                                    <div className="event_link">
                                                        <a onClick={() => {
                                                            navigate(`/event/${data.slug}`);
                                                        }} download>Know&nbsp;More</a>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        }
                                    )
                                }
                            </div>
                            {eventData.length === 0 && <p className="notice">Currently no upcoming events, please view our past events.</p>}
                            {eventHeaders && eventPage < eventHeaders["x-wp-totalpages"] && <div className="btn_wrap">
                                <button onClick={async () => {
                                    const newPage = eventPage + 1;
                                    await getEvents(newPage);
                                    setEventPage(newPage);
                                }} type="button" disabled={eventLoading}>load more</button>
                            </div>}
                        </div>


                        <div className="sec sec_media" id='third' ref={sectionRefs[2]}>
                            <SectionTitle title="Media Center" img={eventbg} />
                            {mediaData.length > 0 && <div className="cards_grid">
                                {mediaData.map((data) => {
                                    return (<Fragment key={data.slug}>
                                        <BlockCard title={data.title? data.title.rendered : ""} img={data.fimg_url} postType="media" subcategory="Media" id={data.slug} date={formatDate(data.date)} />
                                    </Fragment>)
                                })}
                            </div>}
                            {mediaData.length === 0 && <p className="notice">No Media available.</p>}
                            {mediaHeaders && mediaPage < mediaHeaders["x-wp-totalpages"] && <div className="btn_wrap">
                                <button onClick={async () => {
                                    const newPage = mediaPage + 1;
                                    await getMediaPosts(newPage);
                                    setMediaPage(newPage);
                                }} type="button" disabled={mediaLoading} >load more</button>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className="sec sec_media">
                    <SectionTitle title="Linkedin News" img={eventbg} />
                    <div className='sk-ww-linkedin-newsletter' data-embed-id='180765'></div>
                </div>
            </div>
        </section>
    )
}

export default ResourcesStepper;