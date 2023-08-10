import './blockcard.css';
import http1 from "../../../variables";
import LearnMore from '../../../../components/learnmore/LearnMore';
import { useNavigate } from "react-router-dom";
import defaultImage from "../../../../assets/images/default.webp";




const BlockCard = ({ title, subcategory, id,date, img, postType = "blog" }) => {
    const navigate = useNavigate();

const goBlockDetail = (id) => {
    navigate(`/${postType}/${id}`);
}

    return (
        <div className="blogcard" onClick={() => goBlockDetail(id)}>
            <div className="date_line">
                <button type="button">{subcategory ?? 'Blog'}</button>
                <p className="date">{date}</p>
            </div>
            <h3 dangerouslySetInnerHTML={{__html: title}} />
            <div className="img_wrap">
                <img
                    src={img ? img : defaultImage}                    
                />
            </div>
            <div className="overlayer">
                <div className="date_line">
                    <button type="button">{subcategory ?? 'Blog'}</button>
                    <p className="date">{date}</p>
                </div>
                <h3 dangerouslySetInnerHTML={{__html: title}} />
                <div className="img_wrap">
                    <img
                        src={img ? img : defaultImage}
                    />
                </div>
                <div className="learn_wrap">
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
    )
}

export default BlockCard;