import "./teamleaders.css";
import {useEffect, useState, Fragment} from "react";
import hexagone from "../../../assets/images/hexagone.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import greenLn from "../../../assets/images/greenlinkedin.svg"
import bgGrid from "../../../assets/images/bggrid.svg";
import leadera from "../../../assets/images/leadera.png";
import leaderb from "../../../assets/images/leaderb.png";
import leaderc from "../../../assets/images/leaderc.png";
import leaderd from "../../../assets/images/leaderd.png";
import leadere from "../../../assets/images/leadere.png";
import leaderf from "../../../assets/images/leaderf.png";
import leaderg from "../../../assets/images/leaderg.png";
import LeaderDetails from "../leaderdetail/LeaderDetails";






const leadersInfo = [
    {
        id: 0,
        profile: leadera,
        name: 'Yuri Miloslavsky',
        post: 'CEO, SharePass',
        linkedin:'https://www.linkedin.com/in/yurimiloslavsky/',
    },
    {
        id: 1,
        profile: leaderb,
        name: 'Mauro Osorio',
        post: 'COO, SharePass',
        linkedin:'https://www.linkedin.com/in/garciaosorio/',
    },
    {
        id: 2,
        profile: leaderc,
        name: 'Luciano Vitetti',
        post: 'CTO, SharePass',
        linkedin:'https://www.linkedin.com/in/luciano-vitetti/',
    },
    {
        id: 3,
        profile: leaderd,
        name: 'Natali Miloslavsky',
        post: 'QA Specialist',
        linkedin:'https://www.linkedin.com/in/natali-miloslavsky-719862100/',
    },
    {
        id: 4,
        profile: leadere,
        name: 'Carlos Zaburlin',
        post: 'Lead developer',
        linkedin:'https://www.linkedin.com/in/czaburlin/',
    },
    {
        id: 5,
        profile: leaderf,
        name: 'Marc Castejon',
        post: 'CISO',
        linkedin:'https://www.linkedin.com/in/marc-castejon/',
    },
    {
        id: 6,
        profile: leaderg,
        name: 'Navoda Bandara',
        post: 'Automation officer',
        linkedin:'https://www.linkedin.com/in/navoda-semasinghe/',
    },

]



const TeamLeaders = ({openHandler, closeHandler}) => {

    const viewDetails = (info) => {
        openHandler(info);
    }

    return (
        <Fragment>
        <section className="leaders">
            <img className="bgimg" src={bgGrid} alt="bggrid"/>
            <div className="content_sec">
                <h2>Leadership Team</h2>
                <div className="img_grid">
                    {leadersInfo && leadersInfo.map((info) => {
                        return (
                            <div className="leader" onClick={() => viewDetails(info)}>
                                <div className="img_wrap">
                                    <img src={info.profile} />
                                    <div className="imglayer"></div>
                                </div>
                                <div className="details_text">
                                    <div className="text">
                                        <p className="nametext"><img src={hexagone} alt="hexa" />{info.name}</p>
                                        <p>{info.post}</p>
                                    </div>
                                    <a href={info.linkedin} target="_blank" className="ln" >
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>    
                   
        </section>
        
        </Fragment>
    )
}

export default TeamLeaders;