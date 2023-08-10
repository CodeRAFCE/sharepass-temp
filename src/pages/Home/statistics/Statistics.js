import "./statistics.css";
import http1 from "../../variables";
import { fetchCounters } from "../../../services/services";
import { useEffect, useState, useRef } from "react";

const Statistics = (props) => {
  
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    if(statistics.status) return;

    const getStatisticDetails = async () => {
      const response = await fetchCounters();
      setStatistics(response);
    }
    
    getStatisticDetails();
  }, []);

  return (
    <section className="statistics">
      <div className="item item-eco">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
          <g> 
            <path fill="none" color="#45e097" d="M0 0H24V24H0z"/>
            <path fill="#45e097" d="M21 3v2c0 9.627-5.373 14-12 14H7.098c.212-3.012 1.15-4.835 3.598-7.001 1.204-1.065 1.102-1.68.509-1.327-4.084 2.43-6.112 5.714-6.202 10.958L5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z"/> 
          </g> 
        </svg>
        <p className="tag">{statistics.details? statistics.details.efficency : ""}</p>
        <p className="title">ENERGY EFFICIENCY</p>
        <p className="para">SharePass reduces energy consumption by running its core services on demand</p>
      </div>
      <div className="item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 4.99C14.958 3.944 13.904 3 12 3 8.8 3 8 5.667 8 7v3"/>
          <path fill="currentColor" fillRule="evenodd" d="M3 12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7zm10 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3z" clipRule="evenodd"/>
        </svg>
        <p className="tag">{statistics.details? statistics.details.secretsSharepassed : ""}</p>
        <p className="title">SECRETS SHAREPASSED</p>
        <p className="para">Total secrets generated and delivered using SharePass</p>
      </div>
      <div className="item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
          <g> 
            <path fill="none" d="M0 0h24v24H0z"/> 
            <path fillRule="nonzero" d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10z"/> 
          </g> 
        </svg>
        <p className="tag">{statistics.details? statistics.details.dataSharepassed : ""}</p>
        <p className="title">DATA SHAREPASSED</p>
        <p className="para">Total data transferred using SharePass (On average, a 10 characters secret is 270 bytes)</p>
      </div>
    </section>
  );
}

export default Statistics;