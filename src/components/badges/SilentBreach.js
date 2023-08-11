
import { useEffect, useState } from "react";
import { useScript } from "../../services/hooks/CustomHooks";

const SilentBreachBadge = (props) => {
    useScript('https://silentbreach.com/certificates/load.js');

    return <div
        id="silentbreach-badge"
        customerid="sharepass-8bbe2cd36ee63289b9e9f8d6b4ca4b4c"
    >  
    </div>;
}

export default SilentBreachBadge;