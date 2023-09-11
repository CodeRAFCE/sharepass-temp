import "./roadmapdetail.css";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import SingleRoadmap from "./singleroadmap/SingleRoadmap";
import Subscribe from "../Reasources/subscribe/Subscribe";
import {apiBaseUrl} from "../../assets/js/blogConfig";
import 'react-toastify/dist/ReactToastify.css';
import { DiscussionEmbed } from 'disqus-react';

const RoadmapDetail = () => {

    const [data, setData] = useState(null);
    const { id } = useParams();

    const getBlog = async () => {
        await axios.get(`${apiBaseUrl}roadmap?slug=${id}&_embed`).then(async (res) => {

            if(res && res.data && res.data.length > 0){
                delete res.data[0].excerpt;
                setData(res.data[0]);
            }

        }).catch((err) => {
            console.log(err);
        })
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
                        <SingleRoadmap
                            
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
        </section>
    )
}

export default RoadmapDetail;