import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {apiUrl} from "../../assets/js/blogConfig";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const VerifyEmail = () => {
    const { code, id } = useParams();
    const [status, setStatus] = useState('loading');
    useEffect(() => {
        const verifyEmailWithCode = async () => {

            try {
                const response = await fetch(`${apiUrl}wp-json/custom-verification/v1/verify-email`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    verification_code: code,
                    id: id
                  }),
                });
                
                console.log("response", response);

                if(response.status != 200) {
                  setStatus('error');
                }else{
                  setStatus('success');
                }
            } catch (error) {
                // Handle error here
                console.log("Error", error);
            }
        }

        verifyEmailWithCode();
    }, []);

    return (
      <>
        <Helmet>
            <title>Verify email | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="Become a partner | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
      
        <section className="verify-email">
          <div className="content_sec">  

                  {status == 'loading' && <div className="loading-container">
                    <div className="loading-circle"></div>
                  </div>}

                  {status == 'success' && <div className="center-elements-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25%" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16"> 
                      <path color="#4ffbaa" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> 
                      <path color="#4ffbaa" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> 
                    </svg>
                    <h1>Email verified!</h1>
                  </div>}

                  {status == 'error' && <div className="center-elements-container">
                    <svg width="25%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.793-4.207a1 1 0 0 1 1.414 0L12 10.586l2.793-2.793a1 1 0 1 1 1.414 1.414L13.414 12l2.793 2.793a1 1 0 0 1-1.414 1.414L12 13.414l-2.793 2.793a1 1 0 0 1-1.414-1.414L10.586 12 7.793 9.207a1 1 0 0 1 0-1.414z" 
                        fill="#fd5d93"
                      />
                    </svg>
                    <h1>Invalid link</h1>
                  </div>}
          </div>
        </section>
      </>
    );
}

export default VerifyEmail;