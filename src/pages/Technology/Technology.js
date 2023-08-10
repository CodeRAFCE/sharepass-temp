import { Fragment, useEffect, useState } from 'react';

import axios from 'axios';
import http1 from "../variables";
import './technology.css';
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const Technology = () => {
    const [data, setData] = useState([]);
    const partnerDataApi = async () => {
        try {
            const response = await axios.get('https://sharepass-2.supagrow.in/partnerpageapi');
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        partnerDataApi();
        window.scrollTo(0, 0);
    }, []);


    return  <Fragment>
        <Helmet>
            <title>Technology | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="Technology | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
        
    </Fragment>;
    
}

export default Technology;