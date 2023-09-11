import "./aboutlanding.css";
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import http1 from "../../variables";
import { fetchCounters } from "../../../services/services";
import { useEffect, useState, useRef } from "react";
import personalDataGuardian from "../../../assets/images/Personal-Data-Guardian.png";
import privacyOrg from "../../../assets/images/Organization-Privacy.png";
import connectConfidence from "../../../assets/images/Connect.png";
import energyEfficency from "../../../assets/images/Energy-effecient.png";
import secretsSharepassed from "../../../assets/images/Secrets-Sharepassed.png";
import dataSharepassed from "../../../assets/images/Data-SharePassed.png";
import { InView } from 'react-intersection-observer';


const AboutLanding = (props) => {

    const [statistics, setStatistics] = useState(false);
    const [visible, setVisible] = useState(false);
    const [secretsQty, setSecretsQty] = useState(0);
    const [efficencyQty, setEfficencyQty] = useState(0);
    const [sharedDataQty, setSharedDataQty] = useState(0);
    const [sharedDataUnit, setSharedDataUnit] = useState("B");

    useEffect(() => {
        
        setStatistics(true);
        if(statistics) return;

        const getStatisticDetails = async () => {
            const response = await fetchCounters();

            if(response.details){

                let responseTotal = response.details.secretsSharepassed;
                for (let count = 0; count <= responseTotal; count++) {
                    setTimeout(() => {
                        setSecretsQty(count);
                    }, 1000);
                }   
                
                let dataParts = response.details.dataSharepassed.split(" ");

                if(dataParts.length == 2){
                    for (let count = 0; count <= dataParts[0]; count++) {
                        setTimeout(() => {
                            setSharedDataQty(count);
                        }, 1000);
                    }  
    
                    setSharedDataUnit(dataParts[1]);
                }

                //let efficencyInt = parseFloat(response.details.efficency.replace('%', ''));
                
                for (let count = 0; parseFloat(count).toFixed(2) <= 99.99;  count += 0.01) {
                    setTimeout(() => {
                        setEfficencyQty(parseFloat(count).toFixed(2));
                        
                    }, 1000);
                } 
            } 
        }
        
        getStatisticDetails();
    }, []);

    return (
        <section className="about_landing">
            <div className="content_sec">
                <div className="text_wraper">
                    <TinyTitle title="ABOUT SHAREPASS" />
                    <h1>{props.title}</h1>
                    <p className="para">{props.para}</p>
                </div>
            </div>
            <InView 
                onChange={(inView, entry) => {
                    if (inView) {
                        setVisible(true)
                    }else{
                        setVisible(false)
                    }
                }} 
            >
                <div className="row-grids" style={{opacity:visible ? 1 : 0, transition:'all 1.5s ease-in-out'}}>
                    <div className="tri_grid">
                        <div className="part">
                            <img alt="icon"
                                src={/*`${http1}${props.image1}`*/personalDataGuardian}
                            />
                            <h3>{props.title1}</h3>
                            <p>{props.para1}</p>
                        </div>

                        <div className="part mid">
                            <img alt="icon"
                                src={/*`${http1}${props.image2}`*/privacyOrg}
                            />
                            <h3>{props.title2}</h3>
                            <p>{props.para2}</p>
                        </div>

                        <div className="part">
                            <img alt="icon"
                                src={/*`${http1}${props.image3}`*/connectConfidence}
                            />
                            <h3>{props.title3}</h3>
                            <p>{props.para3}</p>
                        </div>
                    </div>

                    <div className="tri_grid tri_grid_no_margin tri_grid_no_vertical_padding">
                        <div className="part">
                            <hr/>
                        </div>

                        <div className="part">
                            <hr/>
                        </div>

                        <div className="part">
                            <hr/>
                        </div>
                    </div>

                    <div className="tri_grid tri_grid_no_margin">
                        <div className="part item-eco">
                            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                                <g> 
                                    <path fill="none" color="#45e097" d="M0 0H24V24H0z"/>
                                    <path fill="#45e097" d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z"/> 
                                </g> 
                            </svg>*/}
                            <img alt="icon"
                                src={/*`${http1}${props.image3}`*/energyEfficency}
                            />    
                            <h2>{`${efficencyQty}%`}</h2>
                            <h3>Energy Efficency</h3>
                        </div>

                        <div className="part mid">
                            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path color="#7829fa" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 4.99C14.958 3.944 13.904 3 12 3 8.8 3 8 5.667 8 7v3"/>
                                <path color="#7829fa" fill="currentColor" fillRule="evenodd" d="M3 12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7zm10 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3z" clipRule="evenodd"/>
                            </svg>*/}
                            
                            <img alt="icon"
                                src={/*`${http1}${props.image3}`*/secretsSharepassed}
                            />   
                            <h2>{secretsQty}</h2>
                            <h3>Secrets SharePassed</h3>
                        </div>

                        <div className="part">
                            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                                <g> 
                                    <path fill="none" d="M0 0h24v24H0z"/> 
                                    <path fill="#7829fa" fillRule="nonzero" d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10z"/> 
                                </g> 
                            </svg>*/}
                            
                            <img alt="icon"
                                src={/*`${http1}${props.image3}`*/dataSharepassed}
                            />
                            <h2>{`${sharedDataQty} ${sharedDataUnit}`}</h2>
                            <h3>Data SharePassed</h3>
                        </div>
                    </div>
                </div>
            </InView>
        </section>
    )
}

export default AboutLanding;