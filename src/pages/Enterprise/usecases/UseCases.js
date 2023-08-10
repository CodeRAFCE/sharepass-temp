import "./usecases.css";
import http1 from "../../variables";
import { useNavigate } from "react-router-dom";
import LearnMore from "../../../components/learnmore/LearnMore";
import natanStudy from "../../../assets/images/NATANStudy.png";
import schurStudy from "../../../assets/images/SchurStudy.png";
import silentBreachStudy from "../../../assets/images/SilentBreachStudy.png";

const UseCases = (props) => {
  const navigate = useNavigate();
  const viewDetail = (id) => {
    navigate(`/casestudy/${id}`);
  }
  return (
    <section className="use_cases">
      <div className="content_sec">
        <h2 className="title">Case Studies</h2>
        <div className="card_grid">
          <div className="card" onClick={()=>viewDetail(0)}>
            <img src={/*`${http1}${props.image1}`*/silentBreachStudy} />
            <p className="tag">{props.title1}</p>
            <div className="overlay">
              <p className="title">{props.title1}</p>
              <p className="para">{props.para1}</p>
              <div className="more">
              <LearnMore
                    title="Learn More"
                    top='0px'
                    boxcolor="green"
                    textcolor="#fff"
                    path="casestudy/0"
               
                />
              </div>
            </div>
          </div>
          <div className="card" onClick={()=>viewDetail(1)}>
            <img src={/*`${http1}${props.image2}`*/schurStudy} />
            <p className="tag">{props.title2}</p>
            <div className="overlay">
              <p className="title">{props.title2}</p>
              <p className="para">{props.para2}</p>
              <div className="more">
              <LearnMore
                    title="Learn More"
                    top='0px'
                    boxcolor="green"
                    textcolor="#fff"
                    path="casestudy/1"
               
                />
              </div>
            </div>
          </div>
          <div className="card" onClick={()=>viewDetail(2)}>
            <img src={/*`${http1}${props.image3}`*/natanStudy} />
            <p className="tag">{props.title3}</p>
            <div className="overlay">
              <p className="title">{props.title3}</p>
              <p className="para">{props.para3}</p>
              <div className="more">
               <LearnMore
                    title="Learn More"
                    top='0px'
                    boxcolor="green"
                    textcolor="#fff"
                    path="casestudy/2"
               
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases;