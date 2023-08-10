import "./eventslist.css";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import Subscribe from "../Reasources/subscribe/Subscribe";
import {apiBaseUrl} from "../../assets/js/blogConfig";
import 'react-toastify/dist/ReactToastify.css';
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import { useNavigate } from "react-router-dom";

const EventsList = () => {
    const navigate = useNavigate();

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getEvents = async (pagination = 1) => {
        setIsLoading(true);
        await axios.get(`${apiBaseUrl}event?per_page=4&page=${pagination}`).then(async (res) => {
            if(res && res.data && res.data.length > 0){
                setHeaders(res.headers);
                setData([].concat(data, res.data));
            }
        }).catch((err) => {
            console.log(err);
        });
        setIsLoading(false);
    }


    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    useEffect(() => {
        getEvents();
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            <Helmet>
                <title>Events | SharePass</title>
                <meta property="description" content={defaultMetaDescription} />
                <meta property="og:title" content="Events | SharePass" />
                <meta property="og:description" content={defaultMetaDescription} />
                <meta property="og:image" content={defaultOgImg} />
            </Helmet>
            <section className="allcontent">
                <div className="content_sec">
                    <h2>All Events</h2>
                    

                    <div className="events-container mb-100">
                        {data && data.map((info, k) => (
                            <Fragment key={info.slug}>
                                <div className="event_card">
                                    <div className="event_inner_card">
                                        <div className="image_wrap">
                                            <img src={info.fimg_url}></img>
                                        </div>
                                        <div className="text_wrap">
                                            <small>{data.event_reference_date}</small>
                                            <h3 dangerouslySetInnerHTML={{__html: info.title? info.title.rendered : ""}} />
                                            <p dangerouslySetInnerHTML={{__html: info.excerpt ? info.excerpt.rendered : ""}} />
                                        </div>
                                    </div>
                                    <div className="event_link">
                                        <a onClick={() => {
                                            navigate(`/event/${info.slug}`);
                                        }} download>Know&nbsp;More</a>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>

                    {headers && page < headers["x-wp-totalpages"] && <div className="btn_wrap">
                        <button onClick={async () => {
                            const newPage = page + 1;
                            await getEvents(newPage);
                            setPage(newPage);
                        }} type="button" disabled={isLoading}>load more</button>
                    </div>}
                </div>
                
                <Subscribe />
            </section>
        </Fragment>
    )
}

export default EventsList;