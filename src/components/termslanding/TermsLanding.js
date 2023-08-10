import "./termslanding.css"
import { useNavigate } from "react-router-dom";
import { links } from "../../constants/links";

const TermsLanding = ({title}) => {
    const navigate = useNavigate();
    
    const goTo = (path) => {
        if(path.includes("https://")){
            window.location.href = path;
            return null;
        }else{
            navigate(path);
        }
    }

    return (
        <section className="terms_landing">
            <svg className="bg" width="204" height="207" viewBox="0 0 204 207" fill="none"><g clip-path="url(#a)" fill="#7829F9"><path opacity=".3" d="M621.84.618652v457.904H163.936V.618652z"></path><path opacity=".4" d="M641.039 41.791v457.541H123.137V41.791z"></path><path opacity=".5" d="M641.039 82.5996v457.541H82.091V82.5996z"></path><path opacity=".6" d="M660.355 123.409V580.95H41.045V123.409z"></path><path opacity=".7" d="M660.355 164.218v457.541H-.001V164.218z"></path></g><defs><clipPath id="a"><path fill="#fff" transform="matrix(0 1 1 0 0 .618652)" d="M0 0h206.381v204H0z"></path></clipPath></defs></svg>
            <div className="content_sec">
                <div className="landing_wrap">
                    {false && <div className="time">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 3.797C6.031 1.516 8.781.375 12 .375c3.219 0 5.953 1.14 8.203 3.422 2.281 2.25 3.422 4.984 3.422 8.203 0 3.219-1.14 5.969-3.422 8.25-2.25 2.25-4.984 3.375-8.203 3.375-3.219 0-5.969-1.125-8.25-3.375C1.5 17.969.375 15.219.375 12c0-3.219 1.125-5.953 3.375-8.203ZM22.125 12c0-2.813-1-5.203-3-7.172C17.156 2.86 14.781 1.875 12 1.875c-2.813 0-5.203 1-7.172 3C2.86 6.844 1.875 9.219 1.875 12c0 2.813.984 5.203 2.953 7.172 2 1.969 4.39 2.953 7.172 2.953 2.813 0 5.203-.984 7.172-2.953 1.969-2 2.953-4.39 2.953-7.172Zm-6.984 4.125-3.797-2.766a.46.46 0 0 1-.235-.421v-7.5c0-.375.188-.563.563-.563h.656c.375 0 .563.188.563.563v6.843l3.328 2.438c.281.219.312.469.093.75l-.375.562c-.218.282-.484.313-.796.094Z" fill="#02F3A2"></path></svg>
                        <p>Last updated2023-03-22 15:48:08</p>
                    </div>}
                    <h1>{title}</h1>
                    <div className="link_wrap">
                        {
                            links.map((ele) => {
                                return (
                                    <div className="tab" onClick={() => goTo(ele.path)}>
                                        <p>{ele.link}</p>
                                        <span>  <svg width="15" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.813 1.188c.187-.167.364-.167.53 0l6.532 6.562c.188.167.188.333 0 .5l-6.531 6.563c-.167.166-.344.166-.532 0l-.625-.626a.338.338 0 0 1-.093-.25c0-.104.031-.197.093-.28l4.844-4.845H.375c-.25 0-.375-.124-.375-.374v-.876c0-.25.125-.375.375-.375h10.656L6.187 2.345c-.166-.188-.166-.365 0-.531l.625-.625Z" fill="#fff"></path></svg></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TermsLanding;