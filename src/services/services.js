import {
    URL_COUNTERS,
    URL_DOMAIN,
} from "../constants/urls";

export const fetchCounters = async (body) => {
    const res = await fetch(URL_COUNTERS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((res) => {
        return res;
    })
    .catch((error) => {
        console.log("Error when trying to get counters details", error);
        return error;
    });
  
    if(res.status === 'Success'){
        try {
            let date1 = new Date();
            let num1 = date1.getTime();

            let date2 = new Date('2021-01-01T00:00:00');
            var num2 = date2.getTime();

            let SECRETS_SHARED = res.details.totalSecretsSharePassed;
            let SECONDS_FROM_JANUARY = Math.ceil((num1 - num2) / 1000);
            let efficency = (100 - (SECRETS_SHARED * 30 / SECONDS_FROM_JANUARY)).toFixed(5);

            return {
                status: "Success",
                details: {
                    secretsSharepassed: ("" + res.details.totalSecretsSharePassed).replace(/\B(?=(?:\d{3})+(?!\d))/g, ','),
                    dataSharepassed: res.details.totalDataSharePassed,
                    efficency: efficency + '%'
                }
            }

        } catch (error) {
            console.log("ERROR COUNTERS", error)
        }
    }

    return res;
};

export const fetchDomainData = async (domain) => {
    return fetch(`${URL_DOMAIN}?domain=${domain}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((res) => {
        return res;
    })
    .catch((error) => {
        console.log("Error when trying to get domain data", error);
        return error;
    });
};