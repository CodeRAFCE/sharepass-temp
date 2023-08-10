import "./allcontent.css";
import { Fragment, useState, useEffect } from "react";
import arrow from "../../../assets/images/arrow.svg";
import BlockCard from "../resourcesstepper/blockcard/BlockCard";
import LearnMore from "../../../components/learnmore/LearnMore";
import axios from "axios";
import {apiBaseUrl} from "../../../assets/js/blogConfig";

const AllContent = () => {

    const [activeTab, setActiveTab] = useState("All");
    const [tabsData, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [tab, setTab] = useState([]);
    const [ddStatus, setDdStatus] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const ddHandler = (event) => {
        event.stopPropagation();
        setDdStatus(!ddStatus);
    }



    const tabs = async () => {
        const res = await axios.get(`${apiBaseUrl}categories`)
            .then((response) => {
                setTab(response.data.data);
            }).catch((error) => {
                console.log(error)
            })

    }

    const tabsdatas = async () => {
        const res = await axios.get(`${apiBaseUrl}posts?sticky=false&_embed=wp:term`)
            .then((response) => {
                setData(response.data.data);
            }).catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        //tabs();
        //tabsdatas();
    }, []);




    const tabClickHandler = (tabName) => {
        setActiveTab(tabName);
        setSelectedCategory(tabName);
        if (tabName === 'All') {
            setFilteredData(tabsData);
        } else {
            let filteredData = tabsData.filter(ele => ele.subcategory == tabName);
            console.log(tabName, filteredData)
            setFilteredData(filteredData);
        }
    }

    useEffect(() => {
        setFilteredData(tabsData);
    }, []);

    const fullPageClick = (event) => {
        setDdStatus(false);
    }

    return (
        <section className="allcontent" onClick={fullPageClick}>
            <div className="content_sec">
                <h2>All content</h2>
                {/* for width > 950px */}
                <div className="tab_wrap">
                    <Fragment>
                        <button type='button' className={activeTab === 'All' ? 'active' : ''} onClick={() => tabClickHandler('All')}>All</button>
                    </Fragment>
                    {tab.map((tab) => {
                        return (
                            <Fragment key={tab.id}>
                                <button type='button' className={activeTab === tab.name ? 'active' : ''} onClick={() => tabClickHandler(tab.name)}>{tab.name}</button>
                            </Fragment>
                        )
                    })}
                </div>
                {/* for width <= 950px */}
                <div className="dropdown_wrap" onClick={ddHandler}>
                    <p>{activeTab}</p>
                    <img src={arrow} alt="arrow" className={`${ddStatus ? 'open' : ''}`} />
                    <div className={`option_list ${ddStatus ? 'open' : 'close'}`}>
                    <button type='button' className={activeTab === "All" ? 'active' : ''} onClick={() => tabClickHandler("All")}>All</button>
                        {tab.map((tab) => {
                            return (
                                <Fragment key={tab.id}>
                                    <button type='button' className={activeTab === tab.name ? 'active' : ''} onClick={() => tabClickHandler(tab.name)}>{tab.name}</button>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>

                <div className="content_grid">
                                     {selectedCategory ? (
                        filteredData.map((info, k) => (
                            <BlockCard title={info.blog_title} id={info._id} subcategory={info.subcategory} date={info.date} key={k} />
                        ))
                    ) : (
                        tabsData.map((info, k) => (
                            <BlockCard title={info.blog_title} id={info._id} subcategory={info.subcategory} date={info.date} key={100/k} />
                        ))
                    )}


                </div>
            </div>
        </section>
    )
}

export default AllContent;