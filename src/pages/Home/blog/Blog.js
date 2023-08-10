import "./blog.css";
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import { useNavigate } from "react-router-dom";
import AllBlogs from "./allblogs/AllBlogs";

const Blog = () => {
const navigate = useNavigate();

    function goToResources(){
        navigate("/resources");
    }
    return (
        <section className="blog_sec">
            <div className="content_sec">
                <div className="blog_title">
                    <div className="left">
                    <TinyTitle title="Home" />
                    <h2>Blogs</h2>
                    </div>
                    <button type="button" onClick={goToResources}>Resources</button>
                </div>
                <AllBlogs />
            </div>
        </section>
    );
}

export default Blog;