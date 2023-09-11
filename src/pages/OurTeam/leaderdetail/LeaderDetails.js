import "./leaderdetail.css";
import close from "../../../assets/images/whiteclose.svg";
import { useEffect, useState } from "react";
import bgGrid from "../../../assets/images/bggrid.svg";
import bgGreen from "../../../assets/images/greenhalfelips.svg";
import bgBlue from "../../../assets/images/bluehalfellips.svg";
import immigrate from "../../../assets/images/immigrate.svg";
import cake from "../../../assets/images/cake.svg";
import sport from "../../../assets/images/sports.svg";
import study from "../../../assets/images/study.svg";
import racing from "../../../assets/images/racing.svg";
import haker from "../../../assets/images/diplo.svg";
import military from "../../../assets/images/military.svg";
import technology from "../../../assets/images/technology.svg";
import family from "../../../assets/images/family.svg";
import ring from "../../../assets/images/angagement.svg";
import glob from "../../../assets/images/cityzenship.svg";
import finalist from "../../../assets/images/finalist.svg";
import founded from "../../../assets/images/founded.svg";
import internet from "../../../assets/images/internet.svg";
import page from "../../../assets/images/page.svg";
import cangaroo from "../../../assets/images/cangaroo.svg";
import person from "../../../assets/images/person.svg";
import webpc from "../../../assets/images/webpc.svg";
import user from "../../../assets/images/arowuser.svg";
import opportunity from "../../../assets/images/opportunity.svg"
import netball from "../../../assets/images/netball.svg";
import degree from "../../../assets/images/degree.svg";
import proples from "../../../assets/images/peoples.svg";
import research from "../../../assets/images/research.svg";
import explore from "../../../assets/images/explore.svg";
import team from "../../../assets/images/team.svg";
import manager from "../../../assets/images/manager.svg";
import sharepass from "../../../assets/images/sharepass.svg";
import quantum from "../../../assets/images/quantum.svg";
import silente from "../../../assets/images/silent.svg";

const LeaderDetails = ({ closeHandler, info }) => {

    const [infoData, setInfoData] = useState([]);

    const handleClose = () => {
        closeHandler();
    }
    useEffect(() => {
        setInfoData(timeLineData[info.id]);
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, []);


    const timeLineData = [
        // For Yuri Miloslavsky
        [
            {
                id: 0,
                icon: cake,
                year: '1984',
                title: 'Early life',
                desc: 'Born in USSR, Moscow'
            },
            {
                id: 1,
                icon: immigrate,
                year: '1991',
                title: 'Immigrated to Israel',
                desc: 'My family moved to Israel in pursuit of a better life'
            },
            {
                id: 2,
                icon: sport,
                year: '2000',
                title: 'Tennis',
                desc: 'Won reginal Tennis championship'
            },
            {
                id: 3,
                icon: study,
                year: '2003',
                title: 'Technology College',
                desc: 'Graduated with honors from a prestigious tech and science school'
            },
            {
                id: 4,
                icon: racing,
                year: '2009',
                title: 'Racing Instructor',
                desc: 'Instructed safety driving and racing courses in Israel and overseas'
            },
            {
                id: 5,
                icon: haker,
                year: '2008-2009',
                title: 'HackerU Diploma',
                desc: 'Achieved 13 industry IT certifications'
            },
            {
                id: 6,
                icon: military,
                year: '2003-2008',
                title: 'Military Service ',
                desc: 'Served in the IDF Airforce as a security perimeter officer'
            },
            {
                id: 7,
                icon: technology,
                year: '2009',
                title: 'Eltel Technologistics',
                desc: 'Strategic advisor in tactical exercises and operations in defence industry'
            },
            {
                id: 8,
                icon: immigrate,
                year: 'December, 2009',
                title: 'Immigrated to Australia, Melbourne',
                desc: 'Moved to Australia to study, travel and explore career opportunities'
            },
            {
                id: 9,
                icon: study,
                year: '2010-2013',
                title: 'RMIT Melbourne',
                desc: "Graduated with honors from RMIT with a Bachelor's degree in Information Technology - System Administration"
            },
            {
                id: 10,
                icon: family,
                year: 'July 2016',
                title: 'Family expansion',
                desc: 'My son was born'
            },
            {
                id: 11,
                icon: ring,
                year: 'September 2013',
                title: 'Family',
                desc: 'Married Natali'
            },
            {
                id: 12,
                icon: founded,
                year: 'April 2012',
                title: 'Founded YMtech',
                desc: 'Founded YMtech to deliver MSP comprehensive IT services B2B and B2C'
            },
            {
                id: 13,
                icon: family,
                year: 'October 2019',
                title: 'Family expansion',
                desc: 'My daughter was born'
            },
            {
                id: 14,
                icon: glob,
                year: '2020',
                title: 'Australian Citizenship',
                desc: 'Became Australian citizen'
            },
            {
                id: 15,
                icon: immigrate,
                year: '2020',
                title: 'Moved to Gold Coast',
                desc: 'Moved to Gold Coast to expand the business and get more sun'
            },
            {
                id: 16,
                icon: founded,
                year: '2022',
                title: 'Finalist',
                desc: ' Finalist in Young Entrepreneur Awards 2022 Melbourne'
            },
            {
                id: 17,
                icon: family,
                year: '2021',
                title: 'Co-Founded SharePass',
                desc: 'Co-Founded SharePass, a cybersecurity startup'
            },
        ],
        // For Mauro Osorio
        [
            {
                id: 0,
                icon: cake,
                year: "June 1987",
                title: 'Early Life',
                desc: 'Born in June (Santa Fe, Argentina)'
            },
            {
                id: 1,
                icon: internet,
                year: "1997",
                title: 'Online Internet CourseOnline Internet Course',
                desc: '2nd youngest graduated student about Internet of the country'
            },
            {
                id: 2,
                icon: sport,
                year: '1997',
                title: 'Chess Club Champion',
                desc: 'Children chess club champion (under 10)'
            },
            {
                id: 3,
                icon: internet,
                year: '2000-2003',
                title: 'Computer Courses',
                desc: 'Took several computer courses from the age of 12 to 15'
            },
            {
                id: 4,
                icon: page,
                year: "2004-2005",
                title: 'CCNA',
                desc: 'Cisco Certified Network Associate course completed'
            },
            {
                id: 5,
                icon: study,
                year: '2004',
                title: 'High School Graduation',
                desc: 'Diploma on Business Management'
            },
            {
                id: 6,
                icon: sport,
                year: "2002",
                title: 'Race Walk Champion',
                desc: 'Provincial race walk champion (under 16)'
            },
            {
                id: 7,
                icon: study,
                year: '2005-2014',
                title: 'University Graduation',
                desc: 'System Analyst bachelor degree from one of the top universities of the country'
            },
            {
                id: 8,
                icon: founded,
                year: '2011- 2014',
                title: 'Network Administrator',
                desc: 'Government employment in the education sector'
            },
            {
                id: 9,
                icon: immigrate,
                year: '2014',
                title: 'Arrived to Australia',
                desc: 'Arrived to Sydney in December 2014 for the first time'
            },
            {
                id: 10,
                icon: glob,
                year: '2022',
                title: 'Australian Citizen',
                desc: 'Became Australian citizen in August 2022'
            },
            {
                id: 11,
                icon: founded,
                year: '2021',
                title: 'Co-Founded SharePass',
                desc: 'Co-founded SharePass making confidential data transfer an easy task'
            },
            {
                id: 12,
                icon: cangaroo,
                year: '2015',
                title: 'Australian Employment',
                desc: 'Joined YMtech team providing IT support to home and business users'
            },
            {
                id: 13,
                icon: ring,
                year: '2023',
                title: 'Marriage',
                desc: 'Married after 6 years of relationship'
            },

        ],
        // For Luciano Vitetti
        [
            {
                id: 0,
                icon: cake,
                year: '1988',
                title: 'Born',
                desc: 'Born in Santa Fe, Argentina'
            },
            {
                id: 1,
                icon: person,
                year: '1998',
                title: 'Enter the Scouts',
                desc: 'Became part of the Scouts Association'
            },
            {
                id: 2,
                icon: study,
                year: ' 2005',
                title: 'Graduated from school',
                desc: 'Graduated with biological sciences degree'
            },
            {
                id: 3,
                icon: study,
                year: '2006-2010',
                title: 'University - UTN',
                desc: 'Studied Information systems engineering'
            },
            {
                id: 4,
                icon: sport,
                year: '2014',
                title: 'UNL Chess Champion',
                desc: 'University UNL Chess Champion'
            },
            {
                id: 5,
                icon: webpc,
                year: '2010',
                title: 'JR Web Developer',
                desc: 'First paid job in the software industry'
            },
            {
                id: 6,
                icon: internet,
                year: '2009',
                title: 'Development Courses',
                desc: 'Applied Design and Programming of Web Pages'
            },
            {
                id: 7,
                icon: page,
                year: '2014-2015',
                title: 'CCNA 1 & 2',
                desc: 'Cisco Routing and Switching'
            },
            {
                id: 8,
                icon: technology,
                year: '2015- 2016',
                title: 'Internship in Govt',
                desc: 'Incorporating new features into public healthcare software'
            },
            {
                id: 9,
                icon: technology,
                year: '2016- 2017',
                title: 'SSR Developer',
                desc: 'New role in software company as SSR developer'
            },
            {
                id: 10,
                icon: founded,
                year: '2021',
                title: 'Co-founded SharePass',
                desc: 'To enhance information privacy & security'
            },
            {
                id: 11,
                icon: technology,
                year: '2020',
                title: 'Remote work',
                desc: 'Started to work for YM tech as Sr Full stack developer'
            },
            {
                id: 12,
                icon: immigrate,
                year: '2017- 2020',
                title: 'Fintech industry',
                desc: 'Moved to Rosario with my fiancee and started to work in fintech'
            },

        ],

        //For Natali Miloslavsky
        [
            {
                id: 0,
                icon: cake,
                year: '1985',
                title: 'Born',
                desc: 'Born in Ukraine'
            },
            {
                id: 1,
                icon: immigrate,
                year: '1990',
                title: 'Immigration',
                desc: 'Me and my family moved to Israel'
            },
            {
                id: 2,
                icon: study,
                year: '2003',
                title: 'Air Force College',
                desc: 'Graduated with honors from a tech and science school'
            },
            {
                id: 3,
                icon: military,
                year: '2006',
                title: 'Military Service',
                desc: 'Served in the IDF Airforce'
            },
            {
                id: 4,
                icon: ring,
                year: '2013',
                title: 'Family',
                desc: 'Married'
            },
            {
                id: 5,
                icon: technology,
                year: '2013',
                title: 'Ministry of Interior',
                desc: 'Border control administration'
            },
            {
                id: 6,
                icon: study,
                year: '2009',
                title: 'Academic College',
                desc: 'Bachelor in Criminology'
            },
            {
                id: 7,
                icon: immigrate,
                year: '2014',
                title: 'Immigration',
                desc: 'Moved to Australia, Melbourne'
            },
            {
                id: 8,
                icon: family,
                year: 2016,
                title: 'Family Expansion',
                desc: 'My son was born'
            },
            {
                id: 9,
                icon: technology,
                year: '2016',
                title: 'YMtech IT Services',
                desc: 'Working in YMtech as IT Support'
            },
            {
                id: 10,
                icon: immigrate,
                year: ' 2020',
                title: 'Moved to Gold Coast',
                desc: ''
            },
            {
                id: 11,
                icon: family,
                year: '2019',
                title: 'Family expansion',
                desc: 'My daughter was born'
            },
            {
                id: 12,
                icon: glob,
                year: ' 2019',
                title: 'Australian Citizenship',
                desc: 'Became Australian citizen'
            },
            {
                id: 13,
                icon: user,
                year: "2021",
                title: 'SharePass',
                desc: 'Joined SharePass leadership as user experience manager'
            }
        ],

        //For Carlos Zaburlin
        [
            {
                id: 0,
                icon: cake,
                year: '1988',
                title: 'Born',
                desc: 'Born in Villaguay - Entre Ríos, Argentina'
            },
            {
                id: 1,
                icon: internet,
                year: '2002',
                title: 'Computer Course',
                desc: 'I made the decision to venture into the fascinating world of computer science'
            },
            {
                id: 2,
                icon: opportunity,
                year: ' 2003',
                title: 'Debut',
                desc: 'I had the incredible opportunity to participate in an inter-federation golf tournament'
            },
            {
                id: 3,
                icon: sport,
                year: '2005',
                title: 'Golf tournament',
                desc: 'I am incredibly proud to have emerged as the victor in a prosigious golf tournament held in my country'
            },
            {
                id: 4,
                icon: internet,
                year: '2012',
                title: 'Not Recognized',
                desc: 'I embarked on an exciting journey of learning web programming by enrolling in various online courses'
            },
            {
                id: 5,
                icon: study,
                year: '2006- 2012',
                title: 'University Graduation',
                desc: 'Applied Informatic Analyst at UNL Argentina University'
            },
            {
                id: 6,
                icon: study,
                year: '2006',
                title: 'High School Graduation',
                desc: ''
            },
            {
                id: 7,
                icon: technology,
                year: '2013- 2016',
                title: 'My FIrst Job',
                desc: 'This significant milestone represents the culmination of my efforts and dedication to honing my skills in web development.'
            },
            {
                id: 8,
                icon: internet,
                year: '2016',
                title: 'Always Learning',
                desc: "In today's rapidly evolving world, it has become increasingly evident that success is not solely determined by technical expertise. While technical skills are undoubtedly crucial, the importance of soft skills cannot be overlooked."
            },
            {
                id: 9,
                icon: internet,
                year: '2017',
                title: 'Frontend Courses',
                desc: 'A specific courses before start to work for a international company'
            },
            {
                id: 10,
                icon: technology,
                year: '2021',
                title: 'SharePass',
                desc: ''
            },
            {
                id: 11,
                icon: technology,
                year: '2017- 2021',
                title: "My First Remote Job as a Frontend & Mobile developer",
                desc: "CLARO is a Mexican company part of América Móvil, a Mexican telecom group"
            },

        ],

          // For Marc Castejon
          [
            {
                id: 0,
                icon: cake,
                year: ' 1977',
                title: 'Born',
                desc: 'Marc was born in Brighton, UK the youngest of three children.'
            },
            {
                id: 1,
                icon: immigrate,
                year: '1979',
                title: 'Moved to France',
                desc: "Marc's family moved to France to follow his Dad's work"
            },
            {
                id: 2,
                icon: study,
                year: '1995-2000',
                title: 'Graduated',
                desc: 'Marc graduated with a Master degree in software development and network systems.'
            },

            {
                id: 3,
                icon: technology,
                year: '2001',
                title: 'Software Engineer',
                desc: 'Software Engineer for Activia Networks in the south of France.'
            },
            {
                id: 4,
                icon: explore,
                year: '2007',
                title: 'Executive Director',
                desc: "Marc's first daughter is born in Montreal, QC Canada"
            },
            {
                id: 5,
                icon: family,
                year: '2007',
                title: 'Family expansion',
                desc: "Marc's first daughter is born in Montreal, QC Canada"
            },
            {
                id: 6,
                icon: team,
                year: '2003',
                title: 'Team Leader',
                desc: "Marc become team leader for Activia Networks in Montreal, Canada."
            },
            {
                id: 7,
                icon: family,
                year: '2008',
                title: 'Family Expansion',
                desc: "Marc's son is born in San Francisco, USA"
            },
            {
                id: 8,
                icon: family,
                year: '210',
                title: 'Family Expansion',
                desc: "Marc's second daughter is born in San Francisco, USA"
            },
            {
                id: 9,
                icon:manager,
                year: '2010',
                title: 'Business Manager',
                desc: "Marc moves to Luxembourg with his family to run the first EU business unit for Stratacache."
            },
            {
                id: 10,
                icon: sharepass,
                year: '2023',
                title: 'SharePass',
                desc: 'Silent Breach becomes major investor, CISO and cyber security service provider for SharePass'
            },
            {
                id: 11,
                icon:quantum,
                year: '2019',
                title: 'Quantum Armor',
                desc: 'Silent Breach launches its first SaaS product, Quantum Armor, a continuous monitoring platform for businesses. '
            },
            {
                id: 12,
                icon:silente,
                year: '2015',
                title: 'Silent Breach',
                desc: 'Marc founds Silent Breach, a cyber security company based in Florida, USA'
            },
        ],

        //For Navoda Bandara
        /*[
            {
                id: 0,
                icon: cake,
                year: ' 1995',
                title: 'Early life',
                desc: 'Born in December'
            },
            {
                id: 1,
                icon: internet,
                year: '2007',
                title: 'First IT Interaction',
                desc: "Created my first WordPress blog. Completed course of MS Office 2003"
            },
            {
                id: 2,
                icon: sport,
                year: '2008-2010',
                title: 'Dancing',
                desc: 'Won all island Dancing competition, 3 years in a row'
            },
            {
                id: 3,
                icon: netball,
                year: '2010',
                title: 'Netball Championship',
                desc: "Won school level Netball championship 2010."
            },
            {
                id: 4,
                icon: study,
                year: '2016-2017',
                title: 'Learning and Changing directions',
                desc: 'Learning and Changing directions'
            },
            {
                id: 5,
                icon: degree,
                year: '2014 - 2016',
                title: 'Learning',
                desc: 'Studied Bio Science and took medical collage exams'
            },
            {
                id: 6,
                icon: study,
                year: '2016 - 2017',
                title: 'High School',
                desc: 'Graduated from High school.'
            },
            {
                id: 7,
                icon: person,
                year: '2017-2019',
                title: 'Diploma',
                desc: 'Completed Diploma in Information Technology SLIIT - Sri Lanka'
            },
            {
                id: 8,
                icon: proples,
                year: '2017 - 2018',
                title: ' Represented Student Committee',
                desc: 'Member of Student Committee'
            },
            {
                id: 9,
                icon: technology,
                year: '2018',
                title: 'Help-Desk Support',
                desc: 'Started my first job as a Help-Desk support at PayMaster Group.'
            },
            {
                id: 10,
                icon: study,
                year: '2019-2022',
                title: 'Graduation',
                desc: 'Bachelor of IT major in Application Development with Distinction from Central Queensland University'
            },
            {
                id: 11,
                icon: research,
                year: '2019',
                title: 'Research Assistance',
                desc: 'Worked as a part time Research Assistance while studying'
            },
            {
                id: 12,
                icon: immigrate,
                year: '2019',
                title: 'Arrived to Australia',
                desc: ''
            },
            {
                id: 13,
                icon: technology,
                year: '2021',
                title: 'Internship',
                desc: 'Worked as a Intern Web developer at Brimbank City Council - Sunshine, VIC'
            },
            {
                id: 14,
                icon: degree,
                year: '2022',
                title: 'Learning & Seeking',
                desc: 'Completed many certification courses to learn new skills & be recognized in IT industry'
            },
            {
                id: 15,
                icon: webpc,
                year: '2023',
                title: 'Remote work',
                desc: 'Started a new role as a IT Help Desk Support at YMtech.'
            },
            {
                id: 16,
                icon: explore,
                year: 'Current',
                title: 'Explore more',
                desc: 'Learning new skills is a never ending journey. Learning new soft/Technical skills every day to sharpen my knowledge while providing a positive contribution to the company'
            },
        ],*/
      
    ]

    return (
        <section className="popup_overlay">
            <button type="button" onClick={handleClose}>
                <img src={close} alt="close" />
            </button>
            {/* for width > 750px */}
            <div className="info_wrap">
                <div className="top">
                    <div className="text">
                        <h2>{info.name}</h2>
                        <p>{info.post}</p>
                    </div>
                    <div className="img_wrap">
                        <img src={bgGrid} alt="bg" className="bg" />
                        <img src={info.profile} alt="profile" className="profile" />
                    </div>
                    <div className="trigrid">
                        {
                            infoData ?
                                <div className="info_card no_top left">
                                    <div className="dot"></div>
                                    <div className="icon_wrap">
                                        <img src={infoData[0]?.icon} alt="icon" />
                                    </div>
                                    <p className="year">{infoData[0]?.year}</p>
                                    <p className="title">{infoData[0]?.title}</p>
                                    <p className="desc">{infoData[0]?.desc}</p>
                                </div> : ''
                        }
                    </div>
                </div>
                <div className="trigrid">
                    {
                        infoData ? infoData.slice(1).map((info, j) => {
                            return (
                                <div className={`info_card  ${j % 3 === 0 && j % 2 != 0 ? 'left' : ''} ${j % 6 === 2 ? 'right' : ''}`}>
                                    <div className="dot"></div>
                                    {/* <h3>{j}</h3> */}
                                    <div className="icon_wrap">
                                        <img src={info.icon} alt="icon" />
                                    </div>
                                    <p className="year">{info.year}</p>
                                    <p className="title">{info.title}</p>
                                    <p className="desc">{info.desc}</p>
                                </div>
                            )
                        }) : <p>Sorry! Data Is Not Available</p>
                    }

                    {infoData && infoData.slice(1).length % 3 === 1 &&
                        <>
                            <div className="info_card">
                                <div className="dot"></div>
                            </div>
                            <div className="info_card">
                                <div className="dot"></div>
                            </div>
                        </>
                    }
                    {infoData && infoData.slice(1).length % 3 === 2 &&
                        <>
                            <div className="info_card">
                                <div className="dot"></div>
                            </div>
                        </>
                    }

                </div>
            </div>
            {/* for width < 750px */}
            <div className="tab_view">
                <div className="closer" onClick={handleClose}>
                    <div className="a"></div>
                    <div className="b"></div>
                </div>
                <div className="profile">
                    <img src={bgGrid} className="grid" alt="bg" />
                    <img src={info.profile} className="profilepic" />
                    <h3>{info.name}</h3>
                    <p>{info.post}</p>
                </div>
                <div className="time_line">
                    {infoData ? infoData.map((info, j) => {
                        return (
                            <div className="card">
                                <img src={bgGrid} className={`bg ${[1, 7, 15, 19].includes(j) ? 'left_grid' : ''}`} alt="bg" />
                                <img src={bgGrid} className={`bg ${[3, 9, 23].includes(j) ? 'right_grid' : ''}`} alt="bg" />
                                <img src={bgGreen} className={`bg ${[5, 11, 21].includes(j) ? 'right' : ''}`} alt="bg" />
                                <img src={bgBlue} className={`bg ${[13, 11, 17].includes(j) ? 'left' : ''}`} alt="bg" />
                                <img src={info.icon} />
                                <p className="year">{info.year}</p>
                                <p className="title">{info.title}</p>
                                <p className="para">{info.desc}</p>
                                <div className="line" style={{ display: infoData.length === (j + 1) ? 'none' : '' }} >
                                    <div className="dot"></div>
                                </div>
                            </div>
                        )
                    }) : <p>Sorry! Data is not available.</p>

                    }
                </div>
                <div className="bottom_img">
                    <img src={bgGrid} alt="grid" />
                </div>
            </div>
        </section>
    )
}

export default LeaderDetails;