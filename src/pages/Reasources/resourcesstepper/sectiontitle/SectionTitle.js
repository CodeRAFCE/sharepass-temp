
import "./sectiontitle.css";

const SectionTitle = ({title, img}) => {
    return(
        <div className="titles_wrap">
            <h2>{title}</h2>
            <img src={img} />
        </div>
    )
}

export default SectionTitle;