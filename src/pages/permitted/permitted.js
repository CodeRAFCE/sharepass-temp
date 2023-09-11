import "./permitted.css";
import { Fragment, useEffect } from "react";
import TermsLanding from "../../components/termslanding/TermsLanding";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import { links } from "../../constants/links";

const Permitted = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
          
            <Helmet>
                <title>Permitted use policy | SharePass</title>
                <meta property="description" content={defaultMetaDescription} />
                <meta property="og:title" content="Permitted use policy | SharePass" />
                <meta property="og:description" content={defaultMetaDescription} />
                <meta property="og:image" content={defaultOgImg} />
            </Helmet>

            <TermsLanding title="Permitted Use Policys" />
            <section className="permitted">
                <div className="content_sec">
                    <h2>PERMITTED USE POLICY</h2>
                    <p>
    This{" "}
    <a href={links[2].path}>
      <strong>Permitted Use Policy</strong>
    </a>{" "}
    supplements the{" "}
    <strong>
      <a  href={links[0].path}>Terms of Service</a>
    </strong>{" "}
    and further defines your rights and obligations when using the
    Service.&nbsp;
  </p>
  <p>
    This{" "}
    <a href={links[2].path}>
      <strong>Permitted Use Policy</strong>
    </a>{" "}
    may be revised from time to time, without any obligation to notify
    you.&nbsp;
  </p>
  <p>
    Your use of Service after changes to this{" "}
    <a href={links[2].path}>
      <strong>Permitted Use Policy</strong>
    </a>{" "}
    are made available through the Service shall constitute your acceptance of
    any new or additional terms.
  </p>
  <p>Please note:</p>
  <ul>
    <li>
      when you obtain information via the Service, we cannot, and do not make
      any attempt to, monitor, verify, warrant, or vouch for the accuracy and
      quality of the information that you may acquire. You must exercise your
      best judgment in relying on information obtained from the Service. We
      cannot monitor or censor the Service and will not attempt to do so. We
      shall not be responsible for injury to you that results from inaccurate,
      unsuitable, offensive, or illegal Messages.
    </li>
    <li>
      when you disseminate information via the Service, we do not review, edit,
      censor, or take responsibility for any information you may create. When
      you place information on the Service, you have the same liability as other
      authors for copyright infringement, defamation, and other harmful speech.
      The information you create is carried over networks and may reach a large
      number of people, your Messages may affect other users and may harm our
      goodwill, business reputation, and operations.&nbsp;
    </li>
  </ul>
  <p>
    <strong>
      THE RESPONSIBILITY FOR AVOIDING THE ACTIVITIES THAT ARE HARMFUL OR VIOLATE
      THIS{" "}
      <a href={links[2].path}>
        <strong>PERMITTED USE POLICY</strong>
      </a>{" "}
      RESTS PRIMARILY WITH YOU. WE DO NOT (AND CANNOT) READ OR MONITOR THE
      CONTENTS OF THE MESSAGES OF OUR USERS TO ENSURE THAT THEY COMPLY WITH THIS{" "}
      <a href={links[2].path}>
        <strong>PERMITTED USE POLICY</strong>
      </a>
      , THE TERMS OF SERVICE OR THE APPLICABLE LAW.&nbsp;
    </strong>
  </p>
  <p>
    You violate the{" "}
    <a href={links[2].path}>
      <strong>Permitted Use Policy</strong>
    </a>{" "}
    and the{" "}
    <strong>
      <a href={links[0].path}>Terms of Service</a>
    </strong>{" "}
    when you engage in or facilitate the following prohibited activities:
  </p>
  <p>
    <strong>Copyright &amp; Intellectual Property Infringements</strong>
  </p>
  <p>
    Using the Service to engage in any activity that infringes or
    misappropriates the intellectual property rights of others, including
    copyrights, trademarks, service marks, trade secrets, patents, or privacy or
    publicity rights held by individuals, corporations, or other entities. We
    will remove or block access to user content upon receipt of a proper notice
    of copyright infringement. It is also our policy to terminate the privileges
    of users who violate copyright laws.
  </p>
  <p>
    <strong>Offensive Materials</strong>
  </p>
  <p>
    Using the Service to view, advertise, transmit, store, post, display, or
    otherwise make available obscene, sexually explicit or pornographic, or
    contains links to other sites that contain or promote obscene, sexually
    explicit, or pornographic material, obscene speech or material. We will
    notify law enforcement agencies when we become aware of the presence of such
    on or being transmitted through the Service.
  </p>
  <p>
    <strong>Racist Material</strong>
  </p>
  <p>
    Using the Service as a means to transmit or post xenophobic, racist,
    abusive, harassing, or hateful.
  </p>
  <p>
    <strong>Defamatory</strong>
  </p>
  <p>
    Using the Service as a means to transmit or post false, defamatory
    inflammatory (<strong>trolling</strong>), inaccurate, threatening, invasive
    of a person’s privacy, defamatory, harassing, abusive, or threatening
    language.
  </p>
  <p>
    <strong>Commercial Messaging &amp; Spamming</strong>
  </p>
  <p>
    Using the Service to send unsolicited bulk and/or commercial messages,
    advertising, the promotion of gambling or the promotion of your own site (
    <strong>spamming</strong>). When a complaint is received, we have the
    discretion to determine from all the evidence whether the recipients were
    from an “opt-in” email list.
  </p>
  <p>
    <strong>Masking</strong>
  </p>
  <p>
    Using the Service to forge or misrepresent message headers, whether in whole
    or in part, to mask the originator of the message.
  </p>
  <p>
    <strong>Hacking&nbsp;</strong>
  </p>
  <p>
    Using the Service to access illegally or without authorisation computers,
    accounts, or networks belonging to another party, or attempting to penetrate
    security measures of another individual’s system (<strong>hacking</strong>).
    Furthermore, any activity that might be used as a precursor to an attempted
    system penetration (i.e., port scan, stealth scan, or other information
    gathering activity).
  </p>
  <p>
    <strong>Distribution of Viruses</strong>
  </p>
  <p>
    Using the Service to distribute information regarding the creation of and
    sending Internet viruses, worms, Trojan horses, pinging, flooding,
    mailbombing, or denial of service attacks.
  </p>
  <p>
    <strong>Export Control Infringements&nbsp;&nbsp;</strong>
  </p>
  <p>
    Using the Service to export encryption software to points outside of
    Australia.&nbsp;
  </p>
  <p>
    <strong>Other Unlawful Uses</strong>
  </p>
  <p>
    Using the Service for any unlawful purpose, including, without limitation,
    advertising, transmitting, or otherwise making available Ponzi schemes,
    pyramid schemes, fraudulently charging credit cards, or pirating content.
  </p>
  <p>
    <strong>Market Research</strong>
  </p>
  <p>
    Using the Service to collect any market research for a competing business.
  </p>
  <p>
    <strong>Interference</strong>
  </p>
  <p>
    Taking any action that imposes or may impose (in our sole discretion) an
    unreasonable or disproportionately large load on our technical
    infrastructure; using automated means, including spiders, robots, crawlers,
    data mining tools, or the like to download or scrape data from the Website,
    except for Internet search engines (e.g., Google) and non-commercial public
    archives (e.g., archive.org) that comply with our robots.txt file; or
    interfering with or attempting to interrupt the proper operation of the
    Service through the use of any virus, device, information collection or
    transmission mechanism, software or routine, or access or attempt to gain
    access to any data, files, or passwords related to the Service through
    hacking, password or data mining, or any other means.
  </p>
  <p>
    <strong>Other Unlawful Activities&nbsp;</strong>
  </p>
  <p>
    Using the Service to engage in activities, whether lawful or unlawful, that
    we determine to be harmful to our users, operations, reputation, goodwill,
    or customer relations.
  </p>
  <p>
    <strong>
      IF WE BECOME AWARE OF ACTIVITIES THAT ARE HARMFUL OR VIOLATE THIS{" "}
      <a href={links[2].path}>
        <strong>PERMITTED USE POLICY</strong>
      </a>{" "}
      OR TERMS OF SERVICE, WE MAY TAKE ANY ACTION AS WE DEEM NECESSARY
      INCLUDING, BUT NOT LIMITED TO, REMOVING INFORMATION, IMPLEMENTING
      SCREENING SOFTWARE DESIGNED TO BLOCK OFFENDING TRANSMISSIONS, DENYING
      ACCESS TO THE WEBSITE OR SERVICE, IN OUR SOLE DISCRETION.
    </strong>
  </p>
  <p>
    For complaints about infringements please contact{" "}
    <a href="mailto:legal@sharepass.com">legal@sharepass.com</a>.
  </p>
                </div>
            </section>
        </Fragment>
    )
}

export default Permitted;