import './ourteam.css';
import { Fragment, useEffect, useState } from 'react';
import TeamLanding from './teamlanding/TeamLanding';
import TeamLeaders from './teamleaders/TeamLeaders';
import BottomSec from "../Home/bottom/BottomSec";
import LeaderDetails from "./leaderdetail/LeaderDetails";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const OurTeam = () => {

    const [popupStatus, setPopupStatus] = useState(false);
    const [viewInfo, setViewInfo] = useState({});

    const closePopup = () => {
        setPopupStatus(false);
        setViewInfo({});
        window.scrollTo(0, 0);
    }

    const openPopup = (info) => {
        setPopupStatus(true);
        setViewInfo(info);
        console.log(info);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);



    return (
        <Fragment>
  
            <Helmet>
                <title>Our team | SharePass</title>
                <meta property="description" content={defaultMetaDescription} />
                <meta property="og:title" content="Our team | SharePass" />
                <meta property="og:description" content={defaultMetaDescription} />
                <meta property="og:image" content={defaultOgImg} />
            </Helmet>
            {popupStatus ?
             <LeaderDetails closeHandler={closePopup} info={viewInfo} /> : 
             <>
                <TeamLanding />
                <TeamLeaders openHandler={openPopup} />
            </>
            }
        </Fragment>
    )
}

export default OurTeam;