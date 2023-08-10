import "./casestudy.css";
import { Fragment, useEffect } from "react";
import CaseLanding from "./caselanding/CaseLanding";
import BottomSec from "../Home/bottom/BottomSec";
import CaseStepper from "./casestepper/CaseStepper";
import { useParams } from 'react-router-dom';
import casestudy from "../../assets/images/casestudy.png";

const CaseStudy = () => {

  const { id } = useParams();

  const landingData = [
    {
      id: 0,
      title: "Silent Breach",
      para: "Silent Breach is a multi-national cybersecurity firm specialising in network security and digital asset protection. Silent Breach takes a holistic approach to cybersecurity, offering clients a suite of turn-key solutions that combine world class cybersecurity services, managed programs, and an expanding product suiteThis is supported by an award-winning security team stationed across three continents, a global SOC, and around-the- clock operations.",
      img:casestudy
    },
    {
      id: 1,
      title: "Schur",
      para: "Founded in 1846, Schur is the oldest family-run packaging business in the world.A combination of the latest technologies and centuries of experience makes Schur’s production stand out as fast, flexible, and premium. Schur is comprised of 12 companies, with operations in six countries and a global market presence serving     customers across the world.They have a global workforce of approximately 900 employees across facilities in Denmark, Sweden, Germany, Australia and the USA.",
      img:casestudy
    },
    {
      id: 2,
      title: "Natan",
      para: "Founded in 1846, Schur is the oldest family-run packaging business in the world.A combination of the latest technologies and centuries of experience makes Schur’s production stand out as fast, flexible, and premium. Schur is comprised of 12 companies, with operations in six countries and a global market presence serving     customers across the world.They have a global workforce of approximately 900 employees across facilities in Denmark, Sweden, Germany, Australia and the USA.",
      img:casestudy
    }
  ]


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <CaseLanding title={landingData[id].title} para={landingData[id].para} img={landingData[id].img} />
      <CaseStepper id={id}/>
    </Fragment>
  )
}

export default CaseStudy;