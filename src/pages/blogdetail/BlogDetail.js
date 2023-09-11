import "./blogdetail.css";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import SingleBlog from "./singleblog/SingleBlog";
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

const BlockDetail = () => {
    const notify = () => toast("News Letter Send SuccessFully.");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://sharepass-2.supagrow.in/storenewsletter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
         
          notify()
          setEmail('')
          // Handle the response here (e.g., update state, show success/error message)
        } catch (error) {
          // Handle error here
        }
      };
      const [email, setEmail] = useState('');
      const [formData, setFormData] = useState({});
      const handleChange = (e) => {
        setEmail(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
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
        await axios.get(`${apiBaseUrl}posts?slug=${id}&_embed=wp:term`).then(async (res) => {

            if(res && res.data && res.data.length > 0){
                setData(res.data[0]);
            }
            /*const n = 3;
            const currentIndex = res.data.data.findIndex((item) => item.id === id);
            const nextItems = res.data.data.slice(currentIndex + 1, currentIndex + n + 1);
            setRelatedPost(nextItems);
            console.log("Related:::", nextItems)*/
            /*get other posts*/
            
            //await axios.get(`${apiBaseUrl}posts?per_page=4&_embed=wp:term`).then((related) => {
            await axios.get(`${apiBaseUrl}posts?before=${res.data[0].date}&per_page=3`).then((related) => {
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
        navigate(`/blog/${id}`);
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
                    {false && <div className="card_wrap">
                        <div className="card">
                            <button className="redirect">
                                <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width={30} height={30} fill="#02F3A2" />
                                    <path
                                        d="M14.8125 8.1875C15 8.02083 15.1771 8.02083 15.3438 8.1875L21.875 14.75C22.0625 14.9167 22.0625 15.0833 21.875 15.25L15.3438 21.8125C15.1771 21.9792 15 21.9792 14.8125 21.8125L14.1875 21.1875C14.125 21.125 14.0938 21.0417 14.0938 20.9375C14.0938 20.8333 14.125 20.7396 14.1875 20.6562L19.0312 15.8125H8.375C8.125 15.8125 8 15.6875 8 15.4375V14.5625C8 14.3125 8.125 14.1875 8.375 14.1875H19.0312L14.1875 9.34375C14.0208 9.15625 14.0208 8.97917 14.1875 8.8125L14.8125 8.1875Z"
                                        fill="#09182C"
                                    />
                                </svg>
                                <p> back to resources</p>
                            </button>
                            <h3>Stay updated on the latest SharePass news</h3>
                            <ToastContainer toastStyle={{ top:"6em" }} />
                            <form
                             action=""
                             method="post"
                             id="mc-embedded-subscribe-form"
                             name="mc-embedded-subscribe-form"
                             className="validate"
                             target="_blank"
                             noValidate=""
                             onSubmit={handleSubmit}>
                            <input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter Your Email" />
                            <button type="submit" className="subscribe">Subscribe</button>
                            </form>
                            <div className="sharebox">
                                <p className="share">Share Post:</p>
                                <div className="icons">
                                    <a href="" target="_blank" rel="noreferrer">
                                        <svg
                                            width={20}
                                            height={16}
                                            viewBox="0 0 20 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.5988 4.16693C17.6238 4.26521 17.6363 4.42491 17.6363 4.64605C17.6363 5.94826 17.3867 7.25048 16.8876 8.5527C16.3886 9.83035 15.6774 11.0097 14.7541 12.0908C13.8557 13.1473 12.6829 14.0073 11.2355 14.6707C9.78821 15.3341 8.19116 15.6658 6.44437 15.6658C4.24842 15.6658 2.23961 15.0884 0.417969 13.9336C0.692463 13.9581 1.00439 13.9704 1.35375 13.9704C3.17539 13.9704 4.80988 13.4176 6.25722 12.3119C5.38382 12.3119 4.61025 12.0662 3.93649 11.5748C3.28768 11.0589 2.83851 10.42 2.58897 9.65836C2.83851 9.68293 3.07558 9.69521 3.30016 9.69521C3.64952 9.69521 3.99888 9.65836 4.34823 9.58465C3.74933 9.46179 3.21282 9.21609 2.7387 8.84754C2.26457 8.47899 1.89026 8.03673 1.61576 7.52075C1.34127 6.98021 1.20402 6.40281 1.20402 5.78856V5.71485C1.75301 6.03426 2.33943 6.20625 2.96328 6.23082C1.79044 5.44458 1.20402 4.36349 1.20402 2.98756C1.20402 2.2996 1.39118 1.64849 1.76549 1.03423C2.7387 2.23817 3.92401 3.19641 5.32144 3.90894C6.74382 4.62148 8.25354 5.0146 9.8506 5.08831C9.80069 4.79347 9.77574 4.49862 9.77574 4.20378C9.77574 3.14727 10.15 2.23817 10.8987 1.4765C11.6722 0.714822 12.5955 0.333984 13.6686 0.333984C14.8165 0.333984 15.7772 0.739392 16.5508 1.55021C17.4491 1.37822 18.2851 1.07109 19.0586 0.628826C18.7592 1.53792 18.1853 2.25046 17.3368 2.76643C18.0854 2.66815 18.8341 2.4593 19.5827 2.13989C19.0337 2.92614 18.3724 3.60181 17.5988 4.16693Z"
                                                fill="#F1F3F9"
                                                className=""
                                            />
                                        </svg>
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <svg
                                            width={17}
                                            height={18}
                                            viewBox="0 0 17 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_152_129983)">
                                                <rect
                                                    width={17}
                                                    height={17}
                                                    transform="translate(0 0.5)"
                                                    fill="#F1F3F9"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M18 17.4514C18 18.0304 17.5304 18.5 16.9514 18.5H0.0486221C-0.530647 18.5 -1 18.0304 -1 17.4514V0.548685C-1 -0.03058 -0.530647 -0.5 0.0486221 -0.5H16.9514C17.5304 -0.5 18 -0.03058 18 0.548685V17.4514ZM11.7074 10.904V17.4434H9.07564V10.904H6.875V8.35545H9.07564V6.47599C9.07564 4.29486 10.4077 3.1072 12.3535 3.1072C13.2854 3.1072 14.0865 3.17661 14.32 3.20761V5.48701L12.9704 5.48764C11.9123 5.48764 11.7074 5.99045 11.7074 6.72832V8.35545H14.2311L13.9025 10.904H11.7074Z"
                                                    fill="#09182C"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_152_129983">
                                                    <rect
                                                        width={17}
                                                        height={17}
                                                        fill="white"
                                                        transform="translate(0 0.5)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <svg
                                            width={17}
                                            height={16}
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.621094 15.6132H3.9386V4.57422H0.621094V15.6132Z"
                                                fill="#F1F3F9"
                                                className=""
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.1011 9.46783V15.6133H12.8533V9.80925C12.8533 8.32979 12.3295 7.41935 11.1771 7.41935C10.4312 7.41138 9.76073 7.91212 9.50091 8.6712C9.40767 8.96254 9.37205 9.27323 9.39615 9.58164V15.6133H6.14844V4.91565H9.39615V6.39511C10.0058 5.26389 11.1237 4.57082 12.3295 4.57423C14.4248 4.57423 16.1011 6.1675 16.1011 9.46783Z"
                                                fill="#F1F3F9"
                                                className=""
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.3267 0.164933C1.47484 0.0712231 0.714902 0.746757 0.628674 1.6715C0.623936 1.71887 0.622041 1.76521 0.621094 1.81258C0.622041 2.72599 1.30428 3.46434 2.14382 3.46228C2.17319 3.46228 2.20257 3.46228 2.23194 3.46022C3.0838 3.5529 3.84374 2.87943 3.92997 1.95365C3.93376 1.90629 3.9366 1.85995 3.93755 1.81258C3.96787 0.931088 3.3349 0.191707 2.52474 0.157724C2.45841 0.155665 2.39208 0.157724 2.3267 0.164933Z"
                                                fill="#F1F3F9"
                                                className=""
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>}
                    <div className="blog_wrap">
                        <SingleBlog
                            
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
                <h2 className="post_title">Next Posts</h2>
                <div className="post_grid">
                    {relatedPost.map((data) => {
                        /*let category;

                        if(
                            data._embedded && 
                            data._embedded["wp:term"] && 
                            data._embedded["wp:term"].length > 0 && 
                            data._embedded["wp:term"][0].length > 0 &&
                            data._embedded["wp:term"][0][0].name
                        ){
                            category = data._embedded["wp:term"][0][0].name;
                        }*/

                        /*return (
                            <Fragment key={data.slug}>
                                <div className="blog" onClick={() => goBlogDetail(data.slug)}>
                                    <div className="date_line">
                                        <button type="button">Blog</button>
                                        <p className="date">{data.date ? formatDate(data.date) : ''}</p>
                                    </div>
                                    <h3>{data.title && data.title.rendered ? data.title.rendered : ''}</h3>
                                    <div className="img_wrap">
                                        <img
                                            src={data.fimg_url? `${data.fimg_url}` : defaultImage}
                                        />
                                    </div>
                                   
                                    <div className="overlay">
                                        <div className="date_line">
                                            <button type="button">Blog</button>
                                            <p className="date">{data.date ? formatDate(data.date) : ''}</p>
                                        </div>
                                        <h3>{data.title && data.title.rendered ? data.title.rendered : ''}</h3>
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
                                <BlockCard title={data.title? data.title.rendered : ""} img={data.fimg_url} type={'Blog'} id={data.slug} date={formatDate(data.date)} />
                            </Fragment>
                        )
                    })}
                </div>
            </div>}
        </section>
    )
}

export default BlockDetail;