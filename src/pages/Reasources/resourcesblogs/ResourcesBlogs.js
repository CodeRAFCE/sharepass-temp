
import "./resourcesblogs.css";
import AllBlogs from "../../Home/blog/allblogs/AllBlogs";
import SectionTitle from "../resourcesstepper/sectiontitle/SectionTitle";

const ResourcesBlogs = () => {
    return(
        <section className="resources_blogs">
            <div className="content_sec">
                <h2>Recent Blogs</h2>
                <AllBlogs />                   
            </div>
        </section>
    )
}

export default ResourcesBlogs;