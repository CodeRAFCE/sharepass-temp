import "./cookies.css";
import { Fragment, useEffect } from "react";
import TermsLanding from "../../components/termslanding/TermsLanding";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import { links } from "../../constants/links";

const Cookies = ({cookies, setCookies}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <Helmet>
              <title>Cookies policy | SharePass</title>
              <meta property="description" content={defaultMetaDescription} />
              <meta property="og:title" content="Cookies policy | SharePass" />
              <meta property="og:description" content={defaultMetaDescription} />
              <meta property="og:image" content={defaultOgImg} />
            </Helmet>
            <TermsLanding title="Cookies Policy" />
            <section className="cookies">
            <div className="content_sec">
                <h2>COOKIES POLICY</h2>
                <p>
    The Website uses cookies, pixel tags, Web Beacons, and other web
    technologies such as CAPTCHA’s to improve the website’s performance, to
    enhance your browsing experience and to protect the website against spam
    robots. Certain areas of the website also use cookies to understand more
    about you, so we can offer you more personalised browsing experience. We use
    a simple counter, without storing any information on your device, to count
    the number of visitors who accept or decline our cookies.
  </p>
  <p>
    You can find out more about cookies and how to manage them in the
    information below. You can change your cookie settings and disable some or
    all cookies for the website at any time at&nbsp;
    <a onClick={() => {setCookies(true);}} className="editCookieSettings">
      here
    </a>
    . You can also change your browser settings so that cookies cannot be placed
    on your device.
  </p>
  <p>
    If you have any questions in relation to the cookies we use please&nbsp;
    <a href="mailto:legal@sharepass.com">contact us</a>.
  </p>
  <p>
    <strong>What are Web Beacons?</strong>
  </p>
  <p>
    We may advertise on third-party web sites. As part of our effort to track
    the success of our advertising campaigns, we may at times use a visitor
    identification technology such as “web beacons”, or “action tags”, which
    count visitors who have come to the website after being exposed to a
    SharePass banner or on a third-party site. We do not use this technology to
    access your personal information and it is only used to compile aggregated
    statistics about visitors who come to the website to gauge the effectiveness
    of our ads.
  </p>
  <p>
    <strong>What is a Cookie?</strong>
  </p>
  <p>
    A “cookie” is a technology that allows the website to store tokens of
    information (an “identifier”) in your browser used by the website while you
    are on the website. Cookies are then sent back to the website on each
    subsequent visit, or to another webpage that recognises that cookie. Cookies
    are used in order to make the website work, or to work more efficiently, as
    well as to provide information to the owners of the website.
  </p>
  <p>
    Cookies do lots of different jobs, like letting you navigate between pages
    efficiently, remembering your preferences, and generally improving the user
    experience. Cookies may tell us, for example, whether you have visited the
    website before or whether you are a new visitor. They can also help to
    ensure that adverts you see online are more relevant to you and your
    interests.
  </p>
  <p>
    When landing on this website, you have been given the opportunity to accept
    cookies used on the website, to accept certain categories of cookies and
    decline others, or to decline all cookies. If you have accepted our use of
    some or all cookies, the following information relates to cookies used on
    the website only. Please note that any consent to accept or to decline
    cookies is limited to this website only and not to any other pages, which
    may be hyperlinked to our website. For more information on cookies used by
    those websites, please refer to the specific privacy notice or cookie policy
    on those websites. If you have any questions, please&nbsp;
    <a href="mailto:legal@sharepass.com">contact us</a>.
  </p>
  <p>There are two broad categories of cookies:</p>
  <ul>
    <li>First party cookies served directly by us to your device; and</li>
    <li>
      Third-party cookies, which are served by a third party on our behalf.
    </li>
  </ul>
  <p>
    Cookies can remain on your computer or mobile device for different periods
    of time. Some cookies are “session cookies”, meaning that they exist only
    while your browser is open. These are deleted automatically once you close
    your browser. Other cookies are “permanent cookies”, meaning that they
    survive after your browser is closed. They can be used by the website to
    recognize your computer when you open your browser and browse the Internet
    again.
  </p>
  <p>
    <strong>What types of cookies do we use?</strong>
  </p>
  <p>
    The website uses the cookies that perform four functions, as classified
    below:
  </p>
  <ul>
    <li>
      Essential/strictly necessary cookies, which are essential to the
      functioning of the Website.
    </li>
    <li>
      Performance cookies, which help us measure the website’s performance and
      improve your experience. In using performance cookies we do not store any
      personal data, and only use the information collected through these
      cookies in aggregated and anonymised form;
    </li>
    <li>
      Functionality cookies, which allow us to enhance your experience (for
      example by remembering any settings you may have selected);
    </li>
    <li>
      Advertising/targeting cookies, which we use to track user activity and
      sessions so that we can deliver a more personalised service, and (in the
      case of advertising cookies) which are set by the third parties with whom
      we execute advertising campaigns and allow us to provide advertisements
      relevant to you; and
    </li>
    <li>
      Social media cookies, which allow you to share content on social media
      channels (such as Facebook, LinkedIn and Twitter).
    </li>
  </ul>
  <p>
    In addition, we also utilise cookies on certain pages of the website to
    communicate with third party data suppliers in order to extrapolate your
    digital behaviour. This helps us to understand and target more relevant
    advertising in the future. The information we receive is all aggregate and
    anonymous, but will include statistics such as demographics, online
    behaviour, service or product interests and lifestyle.&nbsp;
  </p>
  <p>
    Targeting and tracking cookies are provided via trusted third-party
    suppliers. Should you require more information regarding our suppliers and
    how these cookies operate please&nbsp;
    <a href="mailto:legal@sharepass.com">contact us</a>.
  </p>
  <p>
    <strong>How to control or delete cookies</strong>
  </p>
  <p>
    You have the right to choose whether or not to accept cookies and we explain
    how you can exercise this right below. However, please note that if you
    choose to refuse cookies you may not be able to use the full functionality
    of the website.
  </p>
  <p>
    You can change your cookie settings for at any time at{" "}
    <a onClick={() => {setCookies(true);}} className="editCookieSettings">
      here
    </a>
    .
  </p>
  <p>
    As an alternative, you can block all cookies by activating the setting on
    your browser that allows you to refuse the setting of all or some cookies.
    However, if you use your browser settings to block all cookies (including
    essential cookies) you may not be able to access all or parts of our
    website.
  </p>
  <p>
    If you accept some or all cookies on the website you still have the option
    of setting your browser to notify you when you receive a cookie, so that you
    may determine whether to accept it or not.
  </p>
  <p>
    <strong>Cookies that have been set in the past</strong>
  </p>
  <p>
    If you have disabled one or more cookies, we may still use information
    collected from cookies prior to your disabled preference being set; however,
    we will stop using the disabled cookie to collect any further
    information.&nbsp;
  </p>
  <p>
    <strong>Changes to this Cookie Policy</strong>
  </p>
  <p>
    We recommend that you check this page from time to time to inform yourself
    of any changes in this Cookie Policy or any of our other policies. We may
    change our Cookie Policy at our discretion and without notice.&nbsp;
  </p>
  <p>
    By visiting the Website, downloading, or updating the Applications, and/or
    otherwise accessing and/or using the Service after we make any such changes
    to this{" "}
    <a href={links[4].path}>
      <strong>Cookies Policy</strong>
    </a>
    , you are deemed to have accepted such changes. Please refer back to this{" "}
    <a href={links[4].path}>
      <strong>Cookies Policy</strong>
    </a>{" "}
    on a regular basis.
  </p>
            </div>
            </section>
        </Fragment>
    )
}

export default Cookies;