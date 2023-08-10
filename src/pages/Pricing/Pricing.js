import { Fragment, useEffect } from 'react';
import './pricing.css';
import PricingLanding from './pricinglanding/PricingLanding';
import FlexiblePlan from './flexibleplan/FlexiblePlan';
import Plans from './plans/plans';
import BottomSec from "../Home/bottom/BottomSec";
import ComparePlans from "./ComparePlans/ComparePlans";

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return(
        <Fragment>
        <PricingLanding />
        <FlexiblePlan />
        <Plans />
        <ComparePlans />      
        </Fragment>
    )
}

export default Pricing;