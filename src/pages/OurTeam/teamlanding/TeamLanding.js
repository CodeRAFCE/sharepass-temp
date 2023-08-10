import "./teamlanding.css";
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import bgimg from "../../../assets/images/bggrid.svg";
import greenBg from "../../../assets/images/greenhalfelips.svg";
import blueBg from "../../../assets/images/bluehalfellips.svg";



const TeamLanding = () => {
    return(
        <section className="team_landing">
            <img src={greenBg} alt="elips" className="green" />
            <img src={blueBg} alt="elips" className="blue" /> 
            <div className="content_sec">
                <div className="bigrid">
                    <div className="text_wrap">
                        <TinyTitle title='our team' />
                        <h1>The People Protecting Your Privacy</h1>
                        <p>Meet the dedicated and experienced individuals behind SharePass. Learn more about our team members and their contributions to our mission of protecting personal and confidential information in the digital age.</p>
                    </div>
                    <div className="img_wrap">
                        <img src={bgimg} alt="grid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamLanding;