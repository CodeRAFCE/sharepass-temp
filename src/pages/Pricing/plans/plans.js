import "./plans.css";
import { useState, useEffect } from "react";

const Plans = () => {
    const [status, setStatus] = useState(false);
    const statuchChanger = () => {
        setStatus(!status);
    }
    return (
        <section className="plans">
            <div className="content_sec">
                <div className="switch_line">
                    <p className={!status ? 'active' : ''}>Billed monthly</p>
                    <button type="button" className={status ? 'active' : ''} onClick={statuchChanger}>
                        <span style={{ backgroundColor: status ? '#fff' : '#bbb' }}></span>
                    </button>
                    <p className={status ? 'active' : ''}>Billed yearly <br />
                        (Save up to 10%)</p>
                </div>
                <div className="all_plans">
                    <div className="plan">
                        <div className="text">
                            <h6>Free</h6>
                            <h3 className="capit">Free</h3>
                            <div className="mid_text">
                                <p className="center">Get started at no cost. Enjoy basic features and limited usage, perfect for individuals looking to explore our privacy platform.</p>
                            </div>
                            <p className="mid">'Free' plan includes:</p>
                            <p className="features">Easily send text-only secrets</p>
                            <p className="features">Send up to 5 secrets daily</p>
                            <p className="features">Use pre-defined templates for quick secret creation</p>
                            <p className="features">Organize and categorize secrets with labels</p>
                            <p className="features">Integrate with your applications using API and webhooks</p>
                            <p className="features">Manage secrets on the go with our mobile app and browser extension Personal</p>
                        </div>
                        <button type="button" className="planbtn">Learn More</button>
                    </div>

                    <div className="plan">
                        <div className="text">
                            <h6>Personal</h6>
                            <h3>{status ? "$42.99/year" : "$4/mo"}</h3>
                            <p className="tag">billed {status ? "yearly" : "monthly"}</p>
                            <div className="mid_text">
                                <p className="center">Take control of your personal information, offering enhanced privacy and expanded storage options.</p>
                            </div>
                            <p className="mid">Everything in 'Free' plus:</p>
                            <p className="features">Safely receive secrets from others</p>
                            <p className="features">No limit on the number of secrets you can send or receive</p>
                            <p className="features">Enjoy increased storage capacity of 100 MB</p>
                            <p className="features">Attach and share files securely</p>
                            <p className="features">Monitor and review access logs to track your secrets Business</p>

                        </div>
                        <button type="button" className="planbtn">Learn More</button>
                    </div>

                    <div className="plan">
                        <div className="text">
                            <h6>Business</h6>
                            <h3>{status ? "$74.99/year" : "$7/mo"}</h3>
                            <p className="tag">billed {status ? "yearly" : "monthly"}</p>
                            <div className="mid_text">
                                <p className="center">Empower your small or medium-sized business, featuring secure collaboration tools and centralized data management.</p>
                            </div>
                            <p className="mid">Everything in 'Personal' plus:</p>
                            <p className="features">Each user gets an increased storage capacity of 250 MB</p>
                            <p className="features">Create custom secrets tailored to your specific needs</p>
                            <p className="features">Secure your secrets using security keys</p>
                            <p className="features">Share resources across your organization</p>
                            <p className="features">Manage users and their access within your organization</p>
                            <p className="features">Implement and enforce security policies Enterprise</p>
                        </div>
                        <button type="button" className="planbtn">Learn More</button>
                    </div>

                    <div className="plan lightbg">
                        <div className="text">
                            <h6>Enterprise</h6>
                            <h3 className="capit">Contact us</h3>
                            <div className="mid_text">
                                <p className="center">Provides advanced security measures and dedicated support for larger organisations with complex privacy needs.</p>
                            </div>
                            <p className="mid">Everything in 'Business' plus:</p>
                            <p className="features">Unlimited storage capacity for your secrets and files</p>
                            <p className="features">Custom integrations to meet your specific business needs</p>
                            <p className="features">Customize the SharePass platform with your branding</p>
                            <p className="features">Integrate with your existing Single Sign-On solution for secure user authentication</p>
                            <p className="features">Set up a dedicated instance in your preferred location exclusively for your organization</p>
                        </div>
                        <button type="button" className="planbtn">Learn More</button>
                    </div>

                </div>
                <p className="bottom">Contact our sales team for more information on customized plans, enterprise solutions, and pricing options that meet your organization's unique requirements.</p>
            </div>
        </section>
    )
}

export default Plans;