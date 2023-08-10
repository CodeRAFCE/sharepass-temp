import { useState } from "react";
import "./compareplans.css";
import ToolTip from "./tooltip/ToolTip";
import Check from "./checkmark/Check";

const ComparePlans = () => {

    const [num, setNum] = useState(1);

    const activeNum = (number) => {
        if(number === num){
        setNum(0);
        }else{
            setNum(number);
        }
    }

    return (
        <section className="compare">
            <div className="content_sec border">
                <h2>Compare Plans</h2>
                <div className="titles">
                    <p className="empty"></p>
                    <p className="empty"></p>
                    <p>Free</p>
                    <p>Personal
                        ($4/user/month)</p>
                    <p>Business <span>(coming soon)</span>
                        ($7/user/month)</p>
                    <p>Enterprise <span>(SharePass ONE)</span>
                        (Contact us)</p>
                </div>

                {/* Communication */}

                <div className={`sec_title ${num === 1 ? 'open' : 'close'}`} onClick={() => activeNum(1)}>
                    <p>Communication</p>
                </div>
                <div className={`data_wrap ${num === 1 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Send secrets</p>
                        <ToolTip title="Allows to send secrets to a non-SharePass user." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Send secrets</p>
                        <ToolTip title="Allows to receive secrets from a non-SharePass user." />
                        <p className="center">-</p>
                        <Check />
                        <Check />
                        <Check />
                    </div>
                </div>

                {/* Secret data handling */}

                <div  className={`sec_title ${num === 2 ? 'open' : 'close'}`} onClick={() => activeNum(2)}>
                    <p>Secret data handling</p>
                </div>
                <div className={`data_wrap ${num === 2 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Usage</p>
                        <ToolTip title="Amount of daily SharePass links that can be created to send or receive secrets." />
                        <p className="center">5 secrets/day</p>
                        <p className="center">Unlimited (*)</p>
                        <p className="center">Unlimited (*)</p>
                        <p className="center">Unlimited (*)</p>
                    </div>
                    <div className="data_grid">
                        <p>Storage</p>
                        <ToolTip title="Capacity to store encrypted secrets (including files) in the database." />
                        <p className="center">1 MB</p>
                        <p className="center">100 MB</p>
                        <p className="center">250 Mb</p>
                        <p className="center">Unlimited(* )</p>
                    </div>
                </div>
                {/* Secret types */}
                <div  className={`sec_title ${num === 3 ? 'open' : 'close'}`} onClick={() => activeNum(3)}>
                    <p>Secret types</p>
                </div>
                <div className={`data_wrap ${num === 3 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Text (passwords, messages, JSON, etc)</p>
                        <ToolTip title="Secrets are represented as a collection of characters, words, or sentences." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Files</p>
                        <ToolTip title="Secrets can include various types of data, not limited to text. It can include text data, but also binary data, such as images, audio, video, or any other form of digital information." />
                        <p className="center">-</p>
                        <Check />
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Custom</p>
                        <ToolTip title="It offers flexibility and customization options, similar to a JSON format, making it convenient for users to manage and share their secrets in a human-readable manner." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                        <Check />
                    </div>
                </div>

                {/* Secret security */}
                <div  className={`sec_title ${num === 4 ? 'open' : 'close'}`} onClick={() => activeNum(4)}>
                    <p>Secret security</p>
                </div>
                <div className={`data_wrap ${num === 4 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Send secrets</p>
                        <ToolTip title="Protect your secrets with an additional layer of security by using security keys (also known as hardware tokens)." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Send secrets</p>
                        <ToolTip title="Access logs provide a detailed record of secret activity, allowing you to monitor and review successful or denied access to your secrets for enhanced security and accountability." />
                        <p className="center">-</p>
                        <Check />
                        <Check />
                        <Check />
                    </div>
                </div>

                {/* Productivity */}

                <div  className={`sec_title ${num === 5 ? 'open' : 'close'}`} onClick={() => activeNum(5)}>
                    <p>Productivity</p>
                </div>
                <div className={`data_wrap ${num === 5 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Templates</p>
                        <ToolTip title="Convenient preconfigured security settings that include descriptions and labels for quickly creating secrets." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>

                    <div className="data_grid">
                        <p>Labels</p>
                        <ToolTip title="Descriptive tags or markers that help categorize and organize secrets for easy identification and retrieval." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>

                    <div className="data_grid">
                        <p>API</p>
                        <ToolTip title="Integration tools for developers to incorporate SharePass features into their applications, enabling secure data management and sharing capabilities." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>

                    <div className="data_grid">
                        <p>Webhooks</p>
                        <ToolTip title="Secure and reliable notifications allow developers to automate actions and receive real-time updates from SharePass." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>

                    <div className="data_grid">
                        <p>Custom Integrations</p>
                        <ToolTip title="Customized automating solutions provided and maintained by SharePass developers." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                    </div>

                    <div className="data_grid">
                        <p>Notifications</p>
                        <ToolTip title="Stay informed and connected with real-time mobile push notifications." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>
                </div>

                {/* Management */}


                <div  className={`sec_title ${num === 6 ? 'open' : 'close'}`} onClick={() => activeNum(6)}>
                    <p>Management</p>
                </div>
                <div className={`data_wrap ${num === 6 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Global resources</p>
                        <ToolTip title="Enhance collaboration across your organization by sharing labels, custom secrets, templates, and security keys." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>User management</p>
                        <ToolTip title="Allow administrators to enable and disable user accounts, ensuring user activity control and monitoring." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Security policies</p>
                        <ToolTip title="Allow administrators to define and enforce security policies to ensure data protection and compliance." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                        <Check />
                    </div>

                </div>


                {/* Branding */}

                <div  className={`sec_title ${num === 7 ? 'open' : 'close'}`} onClick={() => activeNum(7)}>
                    <p>Branding</p>
                </div>
                <div className={`data_wrap ${num === 7 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>White labelling</p>
                        <ToolTip title="Personalize SharePass with your brand identity, including your logo and colours." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Custom domain</p>
                        <ToolTip title="Personalize your SharePass experience by using your domain to access and share secrets securely." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                    </div>
                </div>

                {/* Authentication */}
                <div  className={`sec_title ${num === 8 ? 'open' : 'close'}`} onClick={() => activeNum(8)}>
                    <p>Authentication   </p>
                </div>
                <div className={`data_wrap ${num === 8 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>White labelling</p>
                        <ToolTip title="Simplify access to SharePass by integrating your enterprise authentication system, such as OpenID, to provide seamless login and secure authentication for your team members." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                    </div>
                </div>

                {/* Hosting */}


                <div  className={`sec_title ${num === 9 ? 'open' : 'close'}`} onClick={() => activeNum(9)}>
                    <p>Hosting</p>
                </div>
                <div className={`data_wrap ${num === 9 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Private instance</p>
                        <ToolTip title="Provides a dedicated and exclusive environment for higher compliance." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Region selection</p>
                        <ToolTip title=" Allows customers to choose their preferred geographic region for storing and processing their data. This enables organizations to comply with data residency requirements and ensures that their sensitive information remains within the desired jurisdiction." />
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <p className="center">-</p>
                        <Check />
                    </div>
                </div>



                {/* Platform */}
                <div  className={`sec_title ${num === 10 ? 'open' : 'close'}`} onClick={() => activeNum(10)}>
                    <p>Platform</p>
                </div>
                <div className={`data_wrap ${num === 10 ? 'open' : 'close'}`}>
                    <div className="data_grid">
                        <p>Mobile App</p>
                        <ToolTip title="Access and manage your secrets securely on the go with the SharePass mobile app." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Web App</p>
                        <ToolTip title="Experience the power of SharePass through our intuitive web application. Access your secrets, manage settings, and collaborate with others seamlessly from any web browser." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>
                    <div className="data_grid">
                        <p>Chrome extension</p>
                        <ToolTip title="Encrypt and manage your secrets directly from your browser." />
                        <Check />
                        <Check />
                        <Check />
                        <Check />
                    </div>
                </div>



            </div>
        </section>
    )
}
export default ComparePlans;