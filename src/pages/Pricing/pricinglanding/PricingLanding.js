import "./pricinglanding.css"
import TinyTitle from "../../../components/tinytitle/TinyTitle";

const PricingLanding = () => {
    return (
        <section className="price_landing">
            <div className="content_sec">
                <div className="bigrid">
                    <div className="text_side">
                        <TinyTitle title="pricing" textcolor="#fff" />
                        <h1>Our Pricing</h1>
                        <p>Find the right plan for you and your team with SharePass. Get started today and take control of your data security.</p>
                    </div>
                </div>               
            </div>
        </section>
    )
}

export default PricingLanding;