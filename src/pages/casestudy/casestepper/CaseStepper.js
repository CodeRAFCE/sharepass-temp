import "./casestepper.css";
import { useEffect, useState, Fragment, useRef } from "react";
// import { InView } from 'react-intersection-observer';
import TinyTitle from "../../../components/tinytitle/TinyTitle";
import challengeA from "../../../assets/images/challengea.svg";
import challengeB from "../../../assets/images/challengeb.svg";
import challengeC from "../../../assets/images/challengec.svg";
import resultA from "../../../assets/images/resulta.svg";
import resultB from "../../../assets/images/resultb.svg";
import resultC from "../../../assets/images/resultc.svg";


export const CaseStepper = ({ id }) => {
    const [activeNum, setActiveNum] = useState(1);

    const challengeData = [
        {
            id: 0,
            para: 'As a global leader in cybersecurity, Silent Breach operates at the cutting edge of security best practices and performance. To succeed in this rapidly changing field, they require maximum speed, durability, and flexibility to meet operational demands.',
            detail: [
                {
                    id: 11,
                    img: challengeA,
                    title: 'Insecure Channels',
                    desc: 'Silent Breach routinely provides highly sensitive information to clients, partners, and employees. The existing secure communications solutions have proven too bulky, complicated, or expensive.'
                },
                {
                    id: 12,
                    img: challengeB,
                    title: 'Manual Data Management',
                    desc: 'Silent Breach maintains a strict policy of deleting all sensitive data within 90 days of project completion. With information spread across numerous channels, this has proven to be a hassle to manage and ensure.'
                },
                {
                    id: 13,
                    img: challengeC,
                    title: 'Lack of Visibility',
                    desc: 'Silent Breach is committed to the highest confidentiality policies, including a zero-trust framework and need-to-know data clearances. A toolset is needed to enable and enforce these initiatives.'
                },

            ]
        },
        {
            id: 1,
            para: 'As “Leader of the pack”, Schur has flourished by proactively seeking out and integrating the latest advancements in technology, operations, and sustainability. Schur International is eager to address systemic cybersecurity risks across their organization.',
            detail: [
                {
                    id: 11,
                    img: challengeA,
                    title: 'Expanding Footprint',
                    desc: 'With hundreds of employees and thousands of customers around the world, Schur was engaged in an uphill battle against rapid digital footprint growth. Each day, sensitive data is generated forcing them to shoulder increasingly higher costs and risks.'
                },
                {
                    id: 12,
                    img: challengeB,
                    title: 'IT Sprawl',
                    desc: 'As a global organization with a dozen subsidiaries, Schur is forced to juggle various tech stacks. Unfortunately, this makes data standardization a challenge. Schur needed a method to communicate across the organization which was seamless, secure, and platform-agnostic.'
                },
                {
                    id: 13,
                    img: challengeC,
                    title: 'Rising Threats',
                    desc: 'Globally, cyber threats ranging from ransomware to identity theft are on the rise. Schur has always been committed to ensuring that customers and employees are protected by the highest security standards available.'
                },

            ]
        },
        {
            id: 3,
            para: 'As “Leader of the pack”, Schur has flourished by proactively seeking out and integrating the latest advancements in technology, operations, and sustainability. Schur International is eager to address systemic cybersecurity risks across their organization.',
            detail: [
                {
                    id: 11,
                    img: challengeA,
                    title: 'Expanding Footprint',
                    desc: 'With hundreds of employees and thousands of customers around the world, Schur was engaged in an uphill battle against rapid digital footprint growth. Each day, sensitive data is generated forcing them to shoulder increasingly higher costs and risks.'
                },
                {
                    id: 12,
                    img: challengeB,
                    title: 'IT Sprawl',
                    desc: 'As a global organization with a dozen subsidiaries, Schur is forced to juggle various tech stacks. Unfortunately, this makes data standardization a challenge. Schur needed a method to communicate across the organization which was seamless, secure, and platform-agnostic.'
                },
                {
                    id: 13,
                    img: challengeC,
                    title: 'Rising Threats',
                    desc: 'Globally, cyber threats ranging from ransomware to identity theft are on the rise. Schur has always been committed to ensuring that customers and employees are protected by the highest security standards available.'
                },

            ]
        }
    ];

    const solutionData = [
        {
            id: 1,
            para: 'Silent Breach chose SharePass as their strategic security partner, leveraging the following solutions:',
            detail: [
                {
                    id: 14,
                    text: 'SharePass makes secure E2EE data sharing effortless and reliable. Using the browser extension, Silent Breach integrated encryption directly into their existing communication channels.'
                },
                {
                    id: 15,
                    text: 'Silent Breach can now tap into a suite of data permissions that enable precision encryption onthe-go. Depending on the data in question, Silent Breach can choose to limit access to a set of IP addresses, time window, PIN holders, and more.'
                },
                {
                    id: 16,
                    text: 'With SharePass’s Yubikey support, Silent Breach is able to verify the recipients’ identity before any confidential communication or data transfer.'
                },
                {
                    id: 17,
                    text: 'With the SharePass portal, users maintain perpetual control over their data and gain full visibility into when/how that data is being accessed. Deleting data is now as simple as clicking a button and is fully managed in a single secure repository.'
                },
            ]
        },
        {
            id: 2,
            para: 'Schur chose SharePass as their strategic security partner, leveraging the following solutions',
            detail: [
                {
                    id: 24,
                    text: 'SharePass makes secure E2EE data sharing effortless and reliable. Leveraging our API, Schur integrated encryption directly into their existing communication channels.'
                },
                {
                    id: 25,
                    text: 'Schur can now tap into a suite of data permissions that enable precision encryption on-the-go. SharePass encryption doesn’t require any installation or account, enabling Schur to communicate safely with external partners.'
                },
                {
                    id: 26,
                    text: 'Depending on the data type, Schur can limit access to a set of IP addresses, a time window,PIN holders, Security keys and more.'
                },
                {
                    id: 27,
                    text: 'The SharePass multi-tenant portal provides data oversight and management of when/how that data is being accessed. Data wiping is performed at the click of a button or set to occur automatically.'
                },
            ],
        },
        {
            id: 3,
            para: 'Natan chose SharePass as their strategic security partner, leveraging the following solutions',
            detail: [
                {
                    id: 34,
                    text: 'SharePass makes secure E2EE data sharing effortless and reliable. Leveraging our API, Schur integrated encryption directly into their existing communication channels.'
                },
                {
                    id: 35,
                    text: 'Schur can now tap into a suite of data permissions that enable precision encryption on-the-go. SharePass encryption doesn’t require any installation or account, enabling Schur to communicate safely with external partners.'
                },
                {
                    id: 36,
                    text: 'Depending on the data type, Schur can limit access to a set of IP addresses, a time window,PIN holders, Security keys and more.'
                },
                {
                    id: 37,
                    text: 'The SharePass multi-tenant portal provides data oversight and management of when/how that data is being accessed. Data wiping is performed at the click of a button or set to occur automatically.'
                },
            ],
        }
    ];

    const ResultData = [
        {
            id: 0,
            para: 'After 1 year, Silent Breach has achieved the following results:',
            detail: [
                {
                    id: 18,
                    img: resultA,
                    title: "Reduced the average customer onboarding time from 1 week to 1 day",
                    desc: 'In the past, Silent Breach would spend a week introducing clients to an unfamiliar communication process. Now, the client’s preferred communication channels are instantly upgraded to meet the highest security standards',
                },
                {
                    id: 19,
                    img: resultB,
                    title: 'Saved 400 hours',
                    desc: 'With all their sensitive data now managed on a central dashboard, Silent Breach has been able to completely transform their data management procedures. Now, data is scheduled to automatically self-delete, freeing up valuable time now spent growing their business. Furthermore, SharePass’s innovative Mutual Human Authentication capabilities enable expired data to be reenabled upon request, saving time while upholding privacy and security'
                },
                {
                    id: 10,
                    img: resultC,
                    title: 'Saved $60,000',
                    desc: 'By consolidating several activities into a single solution, Silent Breach was able to reduce their total software licensing volume by $60,000 per year.'
                },
            ]
        },
        {
            id: 1,
            para: 'After 90 days, Schur has:',
            detail: [
                {
                    id: 18,
                    img: resultA,
                    title: "Reduced the digital footprint of their sensitive information by 30%",
                    desc: 'After introducing SharePass’s auto-wiping functionality, Schur experienced a marked decrease in the size and sensitivity of their digital footprint. Now, when potentially confidential information is shared, it is pre-configured with a time-to-live, whereupon it automatically self-destructs. This translates into lower storage costs and boosted efficiency.',
                },
                {
                    id: 19,
                    img: resultB,
                    title: 'Introduced secure communication as a new normal',
                    desc: 'In the past, Schur struggled with organization-wide adoption of security products. Now, employees, customers, and partners have responded enthusiastically to a single-click function which makes their jobs easier, not harder. Whether typing an email, sending a text, or transferring a file, users can access SharePass security wherever they need it.'
                },
                {
                    id: 10,
                    img: resultC,
                    title: 'Boosted the security preparedness and response capabilities',
                    desc: 'After several competitors experienced security breaches, Schur was eager to improve their overall security posture and proactively defend against future attacks. SharePass enabled them to reduce their exposure by substituting clear-text data for expirable links. Now, even in the event of an attack, sensitive data remains protected and fully manageable from within the SharePass portal'
                }
            ]
        },
        {
            id: 2,
            para: 'After 1 year, Silent Breach has achieved the following results:',
            detail: [
                {
                    id: 18,
                    img: resultA,
                    title: "Reduced the average customer onboarding time from 1 week to 1 day",
                    desc: 'In the past, Silent Breach would spend a week introducing clients to an unfamiliar communication process. Now, the client’s preferred communication channels are instantly upgraded to meet the highest security standards',
                },
                {
                    id: 19,
                    img: resultB,
                    title: 'Saved 400 hours',
                    desc: 'With all their sensitive data now managed on a central dashboard, Silent Breach has been able to completely transform their data management procedures. Now, data is scheduled to automatically self-delete, freeing up valuable time now spent growing their business. Furthermore, SharePass’s innovative Mutual Human Authentication capabilities enable expired data to be reenabled upon request, saving time while upholding privacy and security'
                },
                {
                    id: 10,
                    img: resultC,
                    title: 'Saved $60,000',
                    desc: 'By consolidating several activities into a single solution, Silent Breach was able to reduce their total software licensing volume by $60,000 per year.'
                },
            ]
        },
    ];


    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null)
    ];


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    if (entry.target.id === 'challenge') {
                        setActiveNum(1);
                    }else if (entry.target.id === 'solution') {
                        setActiveNum(2);
                    }else if (entry.target.id === 'result') {
                        setActiveNum(3);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        sectionRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);




    const goTo = (sec, num) => {
        setActiveNum(num);
        const section = document.getElementById(sec);
        section.scrollIntoView({ behavior: 'smooth' });
        const offset = 100;
        const topOffset = 920 + section.offsetTop - offset;
        console.log(section.offsetTop);
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
    return (
        <section className="case_step">
            <div className="content_sec">
                <div className="flex_box">
                    <div className="box">
                        <TinyTitle title="IN THIS CASE STUDY" textcolor="#fff" />
                        <div className="steps">
                            <p className="step_text"
                                style={{ color: activeNum === 1 ? " #02f3a2" : "#fff" }}
                                onClick={() => { goTo("challenge", 1) }}>The challenge</p>
                            <p className="step_text"
                                style={{ color: activeNum === 2 ? " #02f3a2" : "#fff" }}
                                onClick={() => { goTo("solution", 2) }}>The solution</p>
                            <p className="step_text"
                                style={{ color: activeNum === 3 ? " #02f3a2" : "#fff" }}
                                onClick={() => { goTo("result", 3) }}>The result - after one year</p>
                        </div>
                        <button type="button" className="learnbtn">Learn more</button>
                    </div>
                    <div className="text_wrap">
                        {/* Challenge */}
                        <div className="challenge" id="challenge" ref={sectionRefs[0]}>
                            <h2>THE CHALLENGE</h2>
                            <p className="para">{challengeData[id].para}</p>
                            {
                                challengeData[id]?.detail.map((ele) => {
                                    return (
                                        <Fragment key={ele.id}>
                                            <div className="sub_title">
                                                <img src={ele.img} alt="icon" />
                                                <h3>{ele.title}</h3>
                                            </div>
                                            <p>{ele.desc}</p>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                        {/* Solution */}
                        <div className="solution" id="solution" ref={sectionRefs[1]}>
                            <h2>THE SOLUTION</h2>
                            <p>{solutionData[id].para}</p>
                            {
                                solutionData[id].detail.map(ele => {
                                    return (
                                        <p key={ele.id}>{ele.text}</p>
                                    )
                                })
                            }
                        </div>
                        {/* Result */}
                        <div className="result" id="result" ref={sectionRefs[2]}>
                            <h2>THE RESULT</h2>
                            <p>{ResultData[id].para}</p>


                            {
                                ResultData[id].detail.map((ele) => {
                                    return (
                                        <Fragment key={ele.id}>
                                            <div className="block">
                                                <img src={ele.img} alt="icon" />
                                                <h3>{ele.title}</h3>
                                                <p className="para">{ele.desc}</p>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStepper;