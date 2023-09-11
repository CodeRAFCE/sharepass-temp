import "./subscription.css";
import { Fragment, useEffect } from "react";
import TermsLanding from "../../components/termslanding/TermsLanding";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import { links } from "../../constants/links";

const Subscription = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
        <Helmet>
            <title>Subscription terms | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="Subscription terms | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
            <TermsLanding title="Subscription Terms" />
            <section className="subscription">
            <div className="content_sec">
                <h2>SUBSCRIPTION TERMS</h2>
                <p>
    <strong>Offer Terms</strong>
  </p>
  <p>
    All SharePass paid services are subscribed on a service period basis. The
    length of your first subscription term depends on your purchase selection.
    Please note that your chosen offer term may change after the initial
    subscription term (provided in the offer or notified to you separately).
  </p>
  <p>
    If the offer includes a discount off the total price a customer typically
    pays for the initial subscription of the selected term, the discount is
    subject to changes at the end of the initial subscription term.
  </p>
  <p>
    By submitting your payment details, you (i) confirm your acceptance of the
    offer advertised; (ii) accept and agree to these{" "}
    <strong>
      <a href={links[1].path}>Subscription Terms</a>
    </strong>{" "}
    and hereby; and (iii) acknowledge and agree to our&nbsp;
    <strong>
      <a href={links[0].path}>Terms of Service</a>
    </strong>{" "}
    and{" "}
    <strong>
      <a href={links[2].path}>Permitted Use Policy</a>
    </strong>{" "}
    and{" "}
    <strong>
      <a href={links[3].path}>Privacy Policy</a>
    </strong>{" "}
    and{" "}
    <strong>
      <a href={links[4].path}>Cookies Policy</a>
    </strong>
    .
  </p>
  <p>
    <strong>Subscription and Automatic Renewal Terms</strong>
  </p>
  <p>
    After the end of your initial plan, your subscription will be automatically
    renewed, and you will be charged the then-current price of the Service. For
    more information, read our&nbsp;
    <strong>
      <a href={links[0].path}>Terms of Services</a>
    </strong>
    .
  </p>
  <p>
    For monthly plans:&nbsp;your chosen payment method will be charged at least
    7 days before the next period begins unless you decide to cancel your
    automatic payments for the services before the new charge is made.
  </p>
  <p>
    For other plans:&nbsp;your chosen payment method will be charged at least 14
    days before the next period begins unless you decide to cancel your
    automatic payments for the services before the new charge is made.
  </p>
  <p>
    <strong>Price Terms</strong>
  </p>
  <p>
    All prices, including recurring subscription fees, are subject to change.
    Any changes in pricing will be provided in the initial offer or communicated
    to you in advance.
  </p>
  <p>
    <strong>Refund &amp; Cancellations</strong>
  </p>
  <p>
    If you wish to claim a refund, you can do so within 30 days following your
    purchase of our services.
  </p>
  <p>
    You can cancel a recurring subscription at any time from your{" "}
    <strong>
      <a href="">
        SharePass online account
      </a>
    </strong>
    . Cancelled accounts will not be refunded for the unused part of the ongoing
    service period. For further information about the Refund and Cancellation
    Policy, read our&nbsp;
    <strong>
      <a href={links[0].path}>Terms of Services</a>
    </strong>
    .
  </p>
  <p>
    <strong>Taxes and Withholding</strong>
  </p>
  <p>
    You are responsible for all applicable sales, services, value-added, goods
    and services tax (GST), withholding, tariffs, Universal Services Fund (USF)
    fees or any other similar fees as may be applicable in the location in which
    the Services are being provided and similar taxes or fees (collectively,{" "}
    <strong>Taxes and Fees</strong>) imposed by any government entity or
    collecting agency based on the Services, except those Taxes and Fees based
    on our net income, or Taxes and Fees for which you have provided an
    exemption certificate.
  </p>
            </div>
            </section>
        </Fragment>
    )
}

export default Subscription;