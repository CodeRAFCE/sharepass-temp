import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {apiUrl} from "../../assets/js/blogConfig";

const VerifyEmail = () => {
    const { code } = useParams();
    useEffect(() => {
        const verifyEmailWithCode = async () => {

            try {
                const response = await fetch(`${apiUrl}wp-json/custom-subscriber/v1/verify-email`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    verification_code: code
                  }),
                });
                
                console.log("response", response);
            } catch (error) {
                // Handle error here
                console.log("Error", error);
            }
        }

        verifyEmailWithCode();
    }, []);

    return (
        <div>  
        </div>
    );
}

export default VerifyEmail;