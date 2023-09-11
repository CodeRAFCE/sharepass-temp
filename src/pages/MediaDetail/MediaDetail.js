import "./mediadetail.css";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import SingleMedia from "./singlemedia/SingleMedia";
import BottomSec from "../Home/bottom/BottomSec";
import Subscribe from "../Reasources/subscribe/Subscribe";
import http1 from "../variables";
import { useNavigate } from "react-router-dom";
import LearnMore from "../../components/learnmore/LearnMore";
import { ToastContainer, toast } from 'react-toastify';
import {apiBaseUrl} from "../../assets/js/blogConfig";
import 'react-toastify/dist/ReactToastify.css';
import defaultImage from "../../assets/images/default.webp";
import { DiscussionEmbed } from 'disqus-react';
import BlockCard from "../Reasources/resourcesstepper/blockcard/BlockCard";

const MediaDetail = () => {
    
    const navigate = useNavigate();
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    const [data, setData] = useState(null);
    const { id } = useParams();
    const [relatedPost, setRelatedPost] = useState(null);

    const getBlog = async () => {
        await axios.get(`${apiBaseUrl}mediapost?slug=${id}`).then(async (res) => {

            if(res && res.data && res.data.length > 0){
                delete res.data[0].excerpt;
                setData(res.data[0]);
            }
            /*const n = 3;
            const currentIndex = res.data.data.findIndex((item) => item.id === id);
            const nextItems = res.data.data.slice(currentIndex + 1, currentIndex + n + 1);
            setRelatedPost(nextItems);
            console.log("Related:::", nextItems)*/
            /*get other posts*/
            
            //await axios.get(`${apiBaseUrl}posts?per_page=4&_embed=wp:term`).then((related) => {
            await axios.get(`${apiBaseUrl}mediapost?before=${res.data[0].date}&per_page=3`).then((related) => {
                if(related && related.data && related.data.length > 0){
                    let includedFlag = false;
                    for(let i = 0, size = related.data.length; i < size; i++){
                        if(related.data[i].slug == id){
                            delete related.data[i];
                            includedFlag = true;
                        }
                    }
                    
                    if(!includedFlag && related.data.length == 4){
                        delete related.data[3];
                    }
                    
                    setRelatedPost(related.data);
                }else{
                    setRelatedPost(null);
                }

            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }


    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const goBlogDetail = (id) => {
        navigate(`/media/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    useEffect(() => {
        getBlog();
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <section className="blog_detail">
            <div className="content_sec">
                <div className="bi_flex">
                    
                    <div className="blog_wrap">
                        <SingleMedia
                            
                            {...data}
                        />
                    </div>

                </div>

                <DiscussionEmbed
                    shortname='sharepass'
                    config={
                        {
                            url: window.location.href,
                            identifier: data && data.slug ? data.slug : '',
                            title: data && data.title && data.title.rendered ? data.title.rendered : '',
                            language: 'en_US'
                        }
                    }
                />
            </div>
            
            <Subscribe />

            {relatedPost && <div className="content_sec">
                <h2 className="post_title">Next Medias</h2>
                <div className="post_grid">
                    {relatedPost.map((data) => {
                       

                        /*return (
                            <Fragment key={data.slug}>
                                <div className="blog" onClick={() => goBlogDetail(data.slug)}>
                                    <div className="date_line">
                                        <button type="button">Media</button>
                                        <p className="date">{data.date ? formatDate(data.date) : ''}</p>
                                    </div>
                                    <h3 dangerouslySetInnerHTML={{__html: data.title && data.title.rendered ? data.title.rendered : ''}} />
                                    <div className="img_wrap">
                                        <img
                                            src={data.fimg_url? `${data.fimg_url}` : defaultImage}
                                        />
                                    </div>
                                   
                                    <div className="overlay">
                                        <div className="date_line">
                                            <button type="button">Media</button>
                                            <p className="date">{data.date ? formatDate(data.date) : ''}</p>
                                        </div>
                                        <h3 dangerouslySetInnerHTML={{__html: data.title && data.title.rendered ? data.title.rendered : ''}} />
                                        <div className="img_wrap">
                                            <img
                                                src={data.fimg_url? `${data.fimg_url}` : defaultImage}
                                            />
                                        </div>

                                        <div className="learn">
                                        <LearnMore
                                            title="Learn More"
                                            top='0px'
                                            boxcolor="green"
                                            textcolor="#fff"
                                            path=""

                                        />
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )*/
                        
                        return (
                            <Fragment key={data.slug}>
                                <BlockCard title={data.title? data.title.rendered : ""} img={data.fimg_url} subcategory={'Media'} postType={'media'} id={data.slug} date={formatDate(data.date)} />
                            </Fragment>
                        )
                    })}
                </div>
            </div>}
        </section>
    )
}

export default MediaDetail;