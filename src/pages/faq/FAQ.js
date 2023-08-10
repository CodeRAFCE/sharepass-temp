import "./faq.css";
import { Fragment, useEffect } from "react";
import TermsLanding from "../../components/termslanding/TermsLanding";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
          <Helmet>
            <title>FAQ | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="FAQ | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
          </Helmet>
            <TermsLanding title="FAQ" />
            <section className="faq">
                <div className="content_sec">
                    <h2>FAQ</h2>

                    <h3>Q: What is SharePass?</h3>
  <p>
    SharePass resolves the problem of sharing sensitive data (passwords, tokens,
    private keys, PINs, secret messages, QRs, etc) with 3rd party entites.
  </p>
  <h3>Q: Why should I use SharePass?</h3>
  <p>
    Sender and receiver do not need to install any 3rd party application.
    Additionally, secret messages are sent encrypted and can be automatically
    destroyed once it is delivered to the recipient.
  </p>
  <h3>Q: Is SharePass secure?</h3>
  <p>
    Yes. The secret messages are saved encrypted (256 bits AES) and only a
    person who has the link (and special permissions if requested by sender)
    will be able to see it. Registered and enterprise users will have the
    ability to choose which encryption algorithm to use.
  </p>
  <h3>Q: Would SharePass know my secrets?</h3>
  <p>
    No. That is one of the key strengths about SharePass. We value our
    customer's privacy. SharePass will only save the encrypted secret message
    and won't save the key needed to decrypt the messages, instead, the key will
    be delivered included with the link together with the secret message id to
    the recipient.
  </p>
  <h3>Q: What happens if I open the link by mistake or lost it?</h3>
  <p>
    If you open the link by mistake or lost it, you will need to generate a new
    one.
  </p>
  <h3>Q: Is it free?</h3>
  <p>
    We offer a limited version for free, this version will allow sharing
    passwords and messages only. With the free version you can share upto 5
    secrets a day. Each secret is limited to 1000 bytes.
  </p>
  <h3>Q: Is it possible to integrate SharePass with other applications?</h3>
  <p>
    Totally. SharePass is built with an open API that you can use to integrate
    it to your platform or application. SharePass will also allow some plans for
    registered users to use webhooks and to get notifications when a secret has
    been viewed.
  </p>

                </div>
            </section>
        </Fragment>
    )
}

export default FAQ;