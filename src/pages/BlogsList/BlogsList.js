import "./blogslist.css";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import Subscribe from "../Reasources/subscribe/Subscribe";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import {apiBaseUrl} from "../../assets/js/blogConfig";
import 'react-toastify/dist/ReactToastify.css';
import BlockCard from "../Reasources/resourcesstepper/blockcard/BlockCard";

const BlogsList = () => {

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getBlogs = async (pagination = 1) => {
        setIsLoading(true);
        await axios.get(`${apiBaseUrl}posts?per_page=12&page=${pagination}`).then(async (res) => {
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
        getBlogs();
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            <Helmet>
                <title>Blogs | SharePass</title>
                <meta property="description" content={defaultMetaDescription} />
                <meta property="og:title" content="Blogs | SharePass" />
                <meta property="og:description" content={defaultMetaDescription} />
                <meta property="og:image" content={defaultOgImg} />
            </Helmet>
            <section className="allcontent">
                <div className="content_sec">
                    <h2>All Blogs</h2>
                    

                    <div className="content_grid">
                        {data && data.map((info, k) => (
                            <BlockCard title={info.title? info.title.rendered : ""} img={info.fimg_url} type={"Blog"} id={info.slug} date={formatDate(info.date)} />
                        ))}
                    </div>

                    {headers && page < headers["x-wp-totalpages"] && <div className="btn_wrap">
                        <button onClick={async () => {
                            const newPage = page + 1;
                            await getBlogs(newPage);
                            setPage(newPage);
                        }} type="button" disabled={isLoading}>load more</button>
                    </div>}
                </div>
                
                <Subscribe />
            </section>
        </Fragment>
    )
}

export default BlogsList;