import { Fragment, useEffect, useState } from 'react';

import axios from 'axios';
import http1 from "../variables";
import './partners.css';
import PartnersLanding from './partnerslanding/PartnersLanding';
import BottomSec from "../Home/bottom/BottomSec"
import PartnersInfo from './partnerinfo/PartnersInfo';
import DistributorsInfo from './distributorsinfo/DistributorsInfo';
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const Partners = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        setData({
            "_id": "644ff662540f151b142d81e8",
            "title": "Our Trusted Partners",
            "description": "At SharePass, we believe that collaboration is key to building a more secure digital world. That's why we've partnered with industry leaders who share our data privacy and protection commitment. Our trusted partners work with us to provide world-class data protection solutions.",
            "sec_1_title": "Partners",
            "sec_1_desc": "We are proud to work with companies that share our values and vision. Together, we create innovative solutions that benefit our customers and communities.",
            "sec_2_title": "Distributors",
            "sec_2_image": "public/files/2023-06-03T10-14-26.617Z-natan.png",
            "sec_2_desc": "We are grateful for their hard work and dedication in helping us reach new customers and markets. We believe in building strong, collaborative relationships based on trust and respect.",
            "sec_3_title": "rty",
            "sec_3_image": "public\\files\\2023-05-01T17-26-58.413Z-data.png",
            "sec_3_desc": "rty",
            "createdAt": "2023-05-01T17:26:58.429Z",
            "updatedAt": "2023-06-03T10:14:26.838Z",
            "__v": 0,
            "image": "public\\files\\2023-05-01T17-37-08.290Z-partners.png",
            "sec_1_image_1": "public/files/2023-06-03T10-14-26.615Z-nvidia.png",
            "sec_1_image_2": "public/files/2023-06-03T10-14-26.616Z-yubikey.png"
        });

        window.scrollTo(0, 0);
    }, []);


    return (
        <Fragment>
            <Helmet>
                <title>Partners | SharePass</title>
                <meta property="description" content={defaultMetaDescription} />
                <meta property="og:title" content="Partners | SharePass" />
                <meta property="og:description" content={defaultMetaDescription} />
                <meta property="og:image" content={defaultOgImg} />
            </Helmet>
            <PartnersLanding
                title={data.title}
                para={data.description}
                image={data.image}
            />
            <PartnersInfo
                title={data.sec_1_title}
                para={data.sec_1_desc}
                image1={data.sec_1_image_1}
                image2={data.sec_1_image_2}
            />
            <DistributorsInfo
                title={data.sec_2_title}
                para={data.sec_2_desc}
                image={data.sec_2_image}
            />
        </Fragment>
    )
}

export default Partners;