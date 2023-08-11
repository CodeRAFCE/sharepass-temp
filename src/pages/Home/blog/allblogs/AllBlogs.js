import "./allblogs.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {apiBaseUrl} from "../../../../assets/js/blogConfig";
import { useNavigate } from "react-router-dom";
import LearnMore from "../../../../components/learnmore/LearnMore";
import defaultImage from "../../../../assets/images/default.webp";

const AllBlogs = () => {

    const navigate = useNavigate();

    const [blog, setBlog] = useState([]);

    const blogData = async () => {
        const res = await axios.get(`${apiBaseUrl}posts?sticky=true`)
            .then((response) => {
                setBlog(response.data);
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        if(blog.length > 0) return;
        blogData();
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const goBlogDetail = (id) => {
        navigate(`/blog/${id}`);
    }

    return (
        <div className="blog_grid">
            {blog && blog.map((data, j) => {
                let category = 'Blog';

                /*if(
                    data._embedded && 
                    data._embedded["wp:term"] && 
                    data._embedded["wp:term"].length > 0 && 
                    data._embedded["wp:term"][0].length > 0 &&
                    data._embedded["wp:term"][0][0].name
                ){
                    category = data._embedded["wp:term"][0][0].name;
                }*/

                return (
                    <Fragment key={data.slug}>
                        <div className="blog" onClick={() => goBlogDetail(data.slug)}>
                            <div className="date_line">
                                <button type="button">{category}</button>
                                <p className="date">{data.date ? formatDate(data.date) : ''}</p>
                            </div>
                            <h3>{data.title && data.title.rendered ? data.title.rendered : ''}</h3>
                            <div className="img_wrap">
                                <img
                                    src={data.fimg_url? `${data.fimg_url}` : defaultImage}
                                />
                            </div>

                            <div className="learn">
                                <p>Learn More</p>

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
                            </div>
                            <div className="overlay">
                                <div className="date_line">
                                    <button type="button">{category}</button>
                                    <p className="date">{data.date ? formatDate(data.date) : ''}</p>
                                </div>
                                <h3>{data.title && data.title.rendered ? data.title.rendered : ''}</h3>
                                <div className="img_wrap">
                                    <img
                                        src={data.fimg_url? `${data.fimg_url}` : defaultImage}
                                    />
                                </div>
                                <div className="more_wrap">
                                    <LearnMore
                                        title="Learn More"
                                        top='20px'
                                        boxcolor="green"
                                        textcolor="#fff"
                                        path=""
                                    />
                                </div>
                            
                            </div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default AllBlogs;