import './resources.css';
import { Fragment, useEffect } from 'react';
import ResourcesLanding from './resourcelanding/ResourcesLanding';
import ResourcesBlogs from './resourcesblogs/ResourcesBlogs';
import ResourcesStepper from './resourcesstepper/ResourcesStepper';
import Subscribe from './subscribe/Subscribe';
import BottomSec from "../Home/bottom/BottomSec";
import AllContent from "./allcontent/AllContent";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const Resources = () => { 
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return(
        <Fragment>
        <Helmet>
            <title>Resources | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="Resources | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
            <ResourcesLanding />
            {false && <ResourcesBlogs />}
            <ResourcesStepper />
            <Subscribe />
            {false && <AllContent />}
        </Fragment>
    )
}

export default Resources;