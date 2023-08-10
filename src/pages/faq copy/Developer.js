import "./developer.css";
import { Fragment, useEffect } from "react";
import TermsLanding from "../../components/termslanding/TermsLanding";

const Developer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <TermsLanding title="Developer" />
            <section>

            </section>
        </Fragment>
    )
}

export default Developer;