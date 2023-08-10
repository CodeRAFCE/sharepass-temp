import { useEffect, useState, Fragment } from "react";
import './ourcustomers.css';
import axios from "axios";
import http1 from '../../variables';

const OurCustomers = () => {
    const [client, setClient] = useState([]);
    
    useEffect(() => {
        if(client.length > 0) return;
        
        setClient([
            {
            "_id": "646a6ee4d2b09383e62b3a6b",
            "image": "public/files/2023-05-21T19-20-04.986Z-centrevision.png",
            "createdAt": "2023-05-21T19:20:04.997Z",
            "updatedAt": "2023-05-21T19:20:04.997Z",
            "__v": 0
            },
            {
            "_id": "646a6ef3d2b09383e62b3a6f",
            "image": "public/files/2023-05-21T19-20-19.273Z-natan.png",
            "createdAt": "2023-05-21T19:20:19.275Z",
            "updatedAt": "2023-05-21T19:20:19.275Z",
            "__v": 0
            },
            {
            "_id": "646a6efcd2b09383e62b3a73",
            "image": "public/files/2023-05-21T19-20-28.540Z-silentbreach.png",
            "createdAt": "2023-05-21T19:20:28.542Z",
            "updatedAt": "2023-05-21T19:20:28.542Z",
            "__v": 0
            },
            {
            "_id": "646a6f0cd2b09383e62b3a77",
            "image": "public/files/2023-05-21T19-20-44.121Z-schur.png",
            "createdAt": "2023-05-21T19:20:44.123Z",
            "updatedAt": "2023-05-21T19:20:44.123Z",
            "__v": 0
            },
            {
            "_id": "646a6f24d2b09383e62b3a7b",
            "image": "public/files/2023-05-21T19-21-08.305Z-ymtech.png",
            "createdAt": "2023-05-21T19:21:08.307Z",
            "updatedAt": "2023-05-21T19:21:08.307Z",
            "__v": 0
            },
            {
            "_id": "646a6f31d2b09383e62b3a7f",
            "image": "public/files/2023-05-21T19-21-21.952Z-cfc_logotype_coloured.png",
            "createdAt": "2023-05-21T19:21:21.955Z",
            "updatedAt": "2023-05-21T19:21:21.955Z",
            "__v": 0
            }
        ]);
    }, []);
    return (
        <div className='our_customers'>
            <div className='content_sec' >          
                <h2>Our Customers</h2>
                <p>Our customers are at the heart of everything we do at SharePass. We provide a privacy platform that prioritizes data privacy and security, empowering users to take control of their personal and confidential information. Join our community and enjoy the peace of mind of knowing your data is safe, secure, and accessible only when authorized.</p>
                <div className="clients_slider">
                    <div className="marquee" style={{ animationDuration: "25s" }}>
                        {
                          client && client.map((post, j) => (
                                <Fragment key={j}>
                                <a target="_blank" href="#" >
                                    <img
                                        src={`${http1}${post.image}`}
                                        title=""
                                        className="marqueelogo"
                                        style={{ width: "auto", maxWidth: "auto" }}

                                    />
                                </a>
                                </Fragment>
                            ))
                        }
                    </div>
                    <div className="marquee" style={{ animationDuration: "25s" }}>
                        {
                            client.map((post, k) => (
                                <Fragment key={k}>
                                <a target="_blank" href="#" >
                                    <img
                                        src={`${http1}${post.image}`}
                                        title=""
                                        className="marqueelogo"
                                        style={{ width: "auto", maxWidth: "auto" }}
                                    />
                                </a>
                                </Fragment>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurCustomers;