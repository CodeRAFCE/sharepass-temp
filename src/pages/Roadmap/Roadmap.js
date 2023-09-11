import React, { useState, useEffect, useCallback } from "react";
import "./../../assets/css/contact.css";
import TinyTitle from "../../components/tinytitle/TinyTitle";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import { useNavigate } from "react-router-dom";
import { fetchRoadmapData } from "../../services/cms";
import { formatDate, cleanTags } from "../../services/utils";
import LearnMore from "../../components/learnmore/LearnMore";

//class Signup extends React.Component
const Roadmap = () => {

  const [roadmapData, setRoadmapData] = useState({});
  const [openState, setOpenState] = useState({});
  const [taxonomies, setTaxonomies] = useState([]);
  const [selectedTaxonomy, setSelectedTaxonomy] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {

    const getRoadmapData = async () => {
      let roadmapDetails = await fetchRoadmapData();
      
      let mappedData = {};
      let taxonomiesData = [];
      if(roadmapDetails.length > 0){
        roadmapDetails.forEach(element => {
          const taxonomyData = element['_embedded']['wp:term'][0][0];

          if(!mappedData[taxonomyData.slug]){
            taxonomiesData.push(taxonomyData);
            mappedData[taxonomyData.slug] = {
              name: taxonomyData.name,
              active: [],
              completed: [],
              notified: [],
            }
          }

          delete element['_embedded'];
          delete element['_links'];

          mappedData[taxonomyData.slug][element['roadmap_status']].push(element);

        });
      }

      setRoadmapData(mappedData);
      setTaxonomies(taxonomiesData.sort((a, b) =>  a['id'] - b['id']));
    };
    window.scrollTo(0, 0);

    getRoadmapData();
  }, []);

  const handleTaxonomyContent = (key) => {
    setSelectedTaxonomy(key);
    setOpenState({});
  };

  const toggleOpen = (id) => {
    setOpenState((prevState) => ({
      [id]: !prevState[id],
    }));
  }

  return(<>
        <Helmet>
          <title>Roadmap | SharePass</title>
          <meta property="description" content={defaultMetaDescription} />
          <meta property="og:title" content="Roadmap | SharePass" />
          <meta property="og:description" content={defaultMetaDescription} />
          <meta property="og:image" content={defaultOgImg} />
        </Helmet>
        <section className="about_landing">
          <div className='content_sec'>
              <div className="text_wraper">
                  <TinyTitle title="Check what is next" />
                  <h1>Roadmap</h1>
                  <p className="para">We're always improving SharePass based on customer feedback and our vision and mission. We make lots of small improvements regularly, but here's a note of the main features we're working on next.</p>
              </div>
          </div>
        </section>
        <section>
          <div className="content_sec">
            <div className="roadmap-btn-list-container">
              <div className="btn_wrap roadmap-navigation">
                {taxonomies && taxonomies.map((data, key) => {
                  return (
                    <button key={key} type='button' className={`first ${selectedTaxonomy == key ? 'active' : ''}`} onClick={() => { handleTaxonomyContent(key)}}  >
                      {data.name}
                    </button>
                  )
                })}
              </div>
               
            </div>
          </div>
        </section>
        <section>
          <div className="content_sec">
            <div className="bi_grid">
              <div className="text">
                {taxonomies && taxonomies[selectedTaxonomy] && roadmapData[taxonomies[selectedTaxonomy].slug] && roadmapData[taxonomies[selectedTaxonomy].slug].active && roadmapData[taxonomies[selectedTaxonomy].slug].active.length > 0 && <div className="text-block">
                  <h2>Coming soon</h2>
                  <ol className="roadmap-ordered-list">
                  {roadmapData[taxonomies[selectedTaxonomy].slug].active.map((data, key) => {
                      return <li key={key}>
                        <span dangerouslySetInnerHTML={{__html: data.title.rendered}} />
                        {data.roadmap_quarter ? <span className="roadmap-quarter">{data.roadmap_quarter}</span> : <></>}
                      </li>;
                    })
                  }
                  </ol>
                </div>}
                {taxonomies && taxonomies[selectedTaxonomy] && roadmapData[taxonomies[selectedTaxonomy].slug] && roadmapData[taxonomies[selectedTaxonomy].slug].completed && roadmapData[taxonomies[selectedTaxonomy].slug].completed.length > 0 && <div className="text-block">
                  <h2>Recently Completed</h2>
                  <ul className="roadmap-unordered-list">
                  {roadmapData[taxonomies[selectedTaxonomy].slug].completed.map((data, key) => {
                      return <li key={key} dangerouslySetInnerHTML={{__html: data.title.rendered}} />;
                    })
                  }
                  </ul>
                </div>}
              </div>
              <div className="text">
                {taxonomies && taxonomies[selectedTaxonomy] && roadmapData[taxonomies[selectedTaxonomy].slug] && roadmapData[taxonomies[selectedTaxonomy].slug].notified && roadmapData[taxonomies[selectedTaxonomy].slug].notified.length > 0 && <div className="text-block">
                  <h2>Recent Updates</h2>
                  <ul className="roadmap-updates-list">
                  {roadmapData[taxonomies[selectedTaxonomy].slug].notified.map((data, key) => {
                      //return <li key={key}>{data.title.rendered}</li>;
                      return (
                        <li className={openState[key]? 'open' : ''} key={key}>
                          <h5 onClick={() => {toggleOpen(key)}} id={`${key}featurehead`}>
                            <a className="announcement-title">
                              <img src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwbHVzLWNpcmNsZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXBsdXMtY2lyY2xlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTQ0IDI3NmMwIDYuNi01LjQgMTItMTIgMTJoLTkydjkyYzAgNi42LTUuNCAxMi0xMiAxMmgtNTZjLTYuNiAwLTEyLTUuNC0xMi0xMnYtOTJoLTkyYy02LjYgMC0xMi01LjQtMTItMTJ2LTU2YzAtNi42IDUuNC0xMiAxMi0xMmg5MnYtOTJjMC02LjYgNS40LTEyIDEyLTEyaDU2YzYuNiAwIDEyIDUuNCAxMiAxMnY5Mmg5MmM2LjYgMCAxMiA1LjQgMTIgMTJ2NTZ6Ij48L3BhdGg+PC9zdmc+" className="icons plus-circle" /> 
                              <img src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtaW51cy1jaXJjbGUiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1taW51cy1jaXJjbGUgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4ek0xMjQgMjk2Yy02LjYgMC0xMi01LjQtMTItMTJ2LTU2YzAtNi42IDUuNC0xMiAxMi0xMmgyNjRjNi42IDAgMTIgNS40IDEyIDEydjU2YzAgNi42LTUuNCAxMi0xMiAxMkgxMjR6Ij48L3BhdGg+PC9zdmc+" className="icons minus-circle" /> 
                              <span dangerouslySetInnerHTML={{__html: data.title.rendered}} />
                              <span className="date">{formatDate(data.date)}</span>
                            </a>
                          </h5> 
                          <div className="announcement-content">
                            <p>{cleanTags(data.excerpt.rendered)}</p> 
                            <a onClick={(e) => {
                              e.preventDefault();
                              navigate(`/roadmap/${data.slug}`);
                            }} className="button button_indigo-white more"> 
                            Learn more
                            </a>
                          </div>
                        </li>
                      );
                    })
                  }
                  </ul>
                </div>}
              </div>
            </div>
          </div>
        </section>
        <section className="meet_sec">
          <svg
            className="corner"
            viewBox="0 0 204 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#pixel-top_svg__a)" fill="#02F3A2">
              <path
                opacity="0.3"
                d="M-417.839 206.381v-457.904H40.065v457.904z"
              />
              <path
                opacity="0.4"
                d="M-437.042 165.209v-457.541H80.86v457.541z"
              />
              <path
                opacity="0.5"
                d="M-437.042 124.401V-333.14h558.948v457.541z"
              />
              <path
                opacity="0.6"
                d="M-456.356 83.591v-457.54h619.31V83.59z"
              />
              <path
                opacity="0.7"
                d="M-456.356 42.782v-457.54H204v457.54z"
              />
            </g>
            <defs>
              <clipPath id="pixel-top_svg__a">
                <path
                  fill="#fff"
                  transform="matrix(0 -1 -1 0 204 206.381)"
                  d="M0 0h206.381v204H0z"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="content_sec">
            <div className="content_grid">
              <div className="text_sec">
                <div className="tiny_title_wrap">
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2153_465144)">
                      <path
                        d="M0.737305 2.74998L5.50044 -1.68422e-05L10.2636 2.74998L10.2636 8.24998L5.50044 11L0.737305 8.24998L0.737305 2.74998Z"
                        fill="#09182C"
                      />
                      <path
                        d="M5.51741 -0.00557395L10.2559 2.73019L10.2793 8.23166L5.51024 5.47824L5.51741 -0.00557395Z"
                        fill="#02F3A2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2153_465144">
                        <rect
                          width={11}
                          height={11}
                          fill="white"
                          transform="matrix(1 0 0 -1 0 11)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Get in touch</p>
                </div>
                <h2>Do you have some feedback for us?</h2>
                <p className="para"> If you would like us to consider one of your ideas to make the internet a safer place, please we encourage to let us know your thoughts.</p>
                <LearnMore
                  title="Contact Us"
                  top='20px'
                  boxcolor="green"
                  textcolor="#fff"
                  path="/contact"
                />
              </div>
              <div className="image_wrap">
                {/* <img
                                    alt="image"
                                    src=
                                /> */}
              </div>
            </div>
          </div>
        </section>
  </>);


  //}

}
export default Roadmap;