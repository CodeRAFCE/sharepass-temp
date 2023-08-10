import "./termsofservice.css";
import { Fragment, useEffect } from "react";
import TermsLanding from "../../components/termslanding/TermsLanding";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <Helmet>
                <title>Terms of service | SharePass</title>
                <meta property="description" content={defaultMetaDescription} />
                <meta property="og:title" content="Terms of service | SharePass" />
                <meta property="og:description" content={defaultMetaDescription} />
                <meta property="og:image" content={defaultOgImg} />
            </Helmet>
            <TermsLanding title="terms of service" />
            <section className="terms">
                <div className="content_sec">
                    <h2>TERMS OF SERVICE</h2>
                    <p>
                        SharePass Pty Ltd (ACN 647 015 601) (<strong>SharePass</strong>) (“we”,
                        “our”, “us”) offers you the ability to send and receive confidential data (
                        <strong>Messages</strong>) through encrypted communication blended in
                        existing communication channels (<strong>Service</strong>).
                    </p>
                    <p>
                        The Service is made available to you in use of our licensed and/or
                        proprietary software applications (<strong>Applications</strong>) through
                        our website{" "}
                        <a href="">
                            <strong>www.sharepass.com</strong>
                        </a>{" "}
                        (<strong>Website</strong>) and a variety of Internet-enabled devices,
                        including smart phones, tablets, personal computers (collectively,{" "}
                        <strong>Devices</strong>).
                    </p>
                    <p>
                        By using the Service, the Applications or Website, you acknowledge that you
                        have read, understood, and agree to be bound by, and abide by, these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        . We may change these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        at our discretion and without notice. We may modify, suspend, or cancel any
                        content of the Website, the Service, the Applications at any time. By
                        continuing to use any of the Website, the Service, and the Applications, you
                        accept the{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        as they apply from time to time.
                    </p>
                    <p>
                        These{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        apply in conjunction with any other terms and conditions that apply
                        including our{" "}
                        <a href="">
                            <strong>Subscription Terms</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Permitted Use Policy</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Privacy Policy</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Cookies Policy</strong>
                        </a>
                        .
                    </p>
                    <p>
                        <strong>&nbsp;</strong>
                    </p>
                    <p>
                        <strong>
                            THE SECTIONS BELOW TITLED “BINDING ARBITRATION” AND “CLASS ACTION WAIVER”
                            CONTAIN A BINDING ARBITRATION AGREEMENT AND CLASS ACTION WAIVER. THEY
                            AFFECT YOUR LEGAL RIGHTS. PLEASE READ THEM.
                        </strong>
                    </p>
                    <p>
                        <strong>Lawful Use</strong>
                    </p>
                    <p>
                        You may only use the Service for lawful purposes in accordance with the{" "}
                        <a href="">
                            <strong>Permitted Use Policy</strong>
                        </a>{" "}
                        and must ensure that your use does not breach any laws that apply to you.
                    </p>
                    <p>
                        <strong>Access</strong>
                    </p>
                    <p>
                        We may terminate or restrict access to the Website, Applications or Service,
                        or any part thereof, at any time without notice. If we do so, these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        will continue to apply, and any use must discontinue or be limited as we
                        require immediately.
                    </p>
                    <p>
                        <strong>Age Restriction</strong>
                    </p>
                    <p>
                        The Service is available for individuals of any age. However, if you are
                        under the age of majority in your jurisdiction (usually 18 years of age),
                        you should review these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        with your parent or guardian to make sure that you and your parent or
                        guardian understand it.&nbsp;If we discover or believe that you are
                        underage, we may suspend your access to the Service and will reinstate your
                        access only upon our confirmation of consent from your parent or guardian.
                    </p>
                    <p>
                        <strong>Registration</strong>
                    </p>
                    <p>
                        Non-registered users of the Service have restricted use and access to
                        limited features of the Service. To use more features of the Service, you
                        must register with us. During the registration process, we will ask you to
                        create an account, which includes a username (<strong>Username</strong>), a
                        password (<strong>Password</strong>), and perhaps certain additional
                        information that will assist in authenticating your identity when you log-in
                        in the future (<strong>Unique Identifiers</strong>). When creating your
                        account, you must provide true, accurate, current, and complete information.
                        Each Username and corresponding Password can be used by only one user. You
                        are solely responsible for the confidentiality and use of your Username,
                        Password, and Unique Identifiers, as well as for any use, misuse, or
                        communications entered through the Service using one or more of them. You
                        agree to inform us promptly of any need to deactivate a Password or Username
                        or change any Unique Identifier. We reserve the right to delete or change
                        your Password, Username or Unique Identifier at any time and for any reason.
                        We will not be liable for any loss or damage caused by any unauthorised use
                        of your account.
                    </p>
                    <p>
                        <strong>Licenses</strong>
                    </p>
                    <p>
                        Subject to your compliance with all the terms and conditions in these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        , SharePass grants to you a personal, non-exclusive, limited, revocable,
                        non-sublicensable, and non-transferable license to:
                    </p>
                    <ul>
                        <li>
                            access, download and install the Applications on your Device(s) solely for
                            the purpose of using the Service;
                        </li>
                        <li>
                            use the Service to send and receive Messages to and from other users of
                            the Service; and
                        </li>
                        <li>
                            use any other features made available through the Service in accordance
                            with the functionality of those features and these{" "}
                            <a href="">
                                <strong>Terms of Service</strong>
                            </a>
                            .
                        </li>
                    </ul>
                    <p>
                        You grant to SharePass a worldwide, non-exclusive, sublicensable and
                        transferable license to use, copy, distribute, create derivative works of,
                        and display the information that you transmit, receive or otherwise provide
                        through the Service, solely in order for us to provide the Service to you
                        and our other users.
                    </p>
                    <p>
                        Our license to you, and your use of the Service, are expressly conditioned
                        on your adherence to the&nbsp;
                        <a href="">
                            <strong>Permitted Use Policy</strong>
                        </a>
                        , and to your acceptance of the&nbsp;
                        <a href="">
                            <strong>Subscription Terms</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Privacy Policy</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Cookies Policy</strong>
                        </a>
                        .
                    </p>
                    <p>
                        <strong>Payments</strong>
                    </p>
                    <p>
                        All SharePass paid Services are subscribed on a service period basis. You
                        choose the service period and the payment method yourself when you sign up
                        for the paid Services.
                    </p>
                    <p>
                        Your Service will automatically be renewed, and your chosen payment method
                        will be charged at the end of each service period, unless you decide to
                        cancel your automatic payments for the Services before the end of the
                        then-current subscription.
                    </p>
                    <p>
                        All prices, including recurring subscription fees, are subject to change.
                        Any changes in pricing will be communicated to you in advance. If you update
                        payment details in your account, the updated information will be regarded as
                        your preferred method for any future payments.
                    </p>
                    <p>
                        In some cases, we or others on our behalf may offer a free trial for our
                        paid Services. The duration of the free trial period and other details will
                        be specified during a sign-up. We determine your free trial eligibility at
                        our sole discretion, and to the extent permitted under applicable law we may
                        limit or withdraw a free trial option at any time without prior notice.
                    </p>
                    <p>
                        You acknowledge and agree that we will automatically charge you for our paid
                        Services at the end of the free trial period on a recurring basis. If you do
                        not want to be charged, you must cancel the paid subscription before the end
                        of the free trial by contacting our support team. If you received a free
                        trial from a third party, you may also cancel the paid subscription through
                        that third party.
                    </p>
                    <p>
                        Only basic payment information is processed through our payment service
                        providers and payment processing partners authorised to provide services in
                        Australia.
                    </p>
                    <p>
                        Any fees charged by SharePass are exclusive of taxes. However, we may
                        calculate and add any taxes and / or additional fees, including, but not
                        limited to sales tax, value added tax and other taxes or fees under laws
                        applicable to you. Such taxes and fees will be calculated according to the
                        billing information provided by you to SharePass at the time of purchase.
                    </p>
                    <p>
                        <strong>Refund and Cancellation Policy</strong>
                    </p>
                    <p>
                        If you wish to claim a refund, you can do so within 14 days following your
                        purchase of our Services.
                    </p>
                    <p>
                        We seek your full satisfaction with our Services. However, we would like to
                        troubleshoot an issue you experience first. There are common service
                        configuration issues that may hinder the Services for you, and we resolve
                        most user issues encountered.
                    </p>
                    <p>
                        Subscriptions purchased via the iTunes/App Store are subject to iTunes/App
                        Store refund policies. This means we cannot grant refunds if you purchased
                        an app through iTunes/App Store – you will have to contact store support in
                        that regard.
                    </p>
                    <p>
                        You have a right to cancel your account at any time. You can cancel a
                        recurring subscription from your [SharePass online account, iTunes/App Store
                        or Google Play Store]. Cancelled accounts will not be refunded for the
                        unused part of the ongoing service period.
                    </p>
                    <p>
                        You can only get a refund for our Services twice. If you buy any of our
                        Services again after that, you will not be granted a refund for any further
                        cancellation. We do not grant refunds for recurring subscription payments if
                        you cancel the Services after the renewal unless applicable law provides
                        otherwise. No refunds will be considered for accounts terminated for
                        violation of these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        . Once the refund is issued to you, you will lose access to the Services.
                    </p>
                    <p>
                        <strong>Intellectual Property</strong>
                    </p>
                    <p>
                        The Service contains material, such as software, text, graphics, images, and
                        other material provided by or on behalf of us (collectively, the{" "}
                        <strong>Content</strong>). The Content (excluding your Messages) presented
                        to you as part of the Service is owned by SharePass or by its licensors and
                        is protected by intellectual property rights under both Australia and
                        foreign laws.
                    </p>
                    <p>
                        Except as expressly permitted under these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        , no right, title, or interest in or to any Content is transferred to you.
                        The trademarks, service marks, logos, product names and company names (the{" "}
                        <strong>Trademarks</strong>) used and displayed on or through the Service
                        are registered and unregistered trademarks or service marks of SharePass
                        and/or its licensors.
                    </p>
                    <p>
                        Nothing on the Service or in these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        shall be construed as granting, by implication, estoppel, or otherwise, any
                        license or right to use the Trademarks, without our prior written permission
                        specific for each such use. All goodwill generated from the use of the
                        Trademarks inures to the benefit of SharePass and its licensors, as
                        applicable.
                    </p>
                    <p>
                        Elements of the Service are protected by trademark, unfair competition, and
                        other state and federal laws and may not be copied or imitated, in whole or
                        in part, by any means.
                    </p>
                    <p>
                        Other than for the purposes of and subject to the conditions prescribed
                        under the&nbsp;<em>Copyright Act 1968</em>&nbsp;(Cth) or any other
                        applicable legislation throughout the world, you may not, in any form or by
                        any means reproduce, display, store in a retrieval system or transmit,
                        print, publish, distribute, commercialise, perform, adapt, or create of
                        derivative work from any design, artwork, information, product or service
                        accessed or acquired from the Service, the Website, Applications or Devices.
                    </p>
                    <p>
                        <strong>Communications with us</strong>
                    </p>
                    <p>
                        With respect to any communications, you send to us, including, but not
                        limited to, feedback, questions, comments, suggestions, and the like, we
                        shall be free to use any ideas, concepts, know-how, or techniques contained
                        in your communications for any purpose whatsoever, including, but not
                        limited to, the development, production, and marketing of products and
                        services that incorporate such information without compensation to you.
                    </p>
                    <p>
                        <strong>No Warranties </strong>
                    </p>
                    <p>
                        You acknowledge that we do not represent or warrant that access to the
                        content and any other data or information provided through the Services will
                        be accurate, complete, uninterrupted, timely or secure or its servers, or
                        the content are or will be secure or free of computer viruses or similar
                        contamination or destructive features.
                    </p>
                    <p>
                        You also acknowledge that the Service may contain bugs, errors, and other
                        problems that could cause the Service to be unavailable or to fail to
                        deliver Messages or otherwise be unreliable. consequently, the Service and
                        the content are provided “as is” and “as available” basis without any
                        warranties of any kind.
                    </p>
                    <p>
                        <strong>External Sites</strong>
                    </p>
                    <p>
                        The Service (or social media websites on which we maintain presences or RSS
                        feeds) may be linked to other websites or applications which we may have no
                        control (<strong>External Sites</strong>). Links to such External Sites e
                        websites are provided for convenience only, and we are not responsible for
                        their use, effect, or content. It should not be construed as any
                        endorsement, approval, recommendation, or preference by us of the owners or
                        operators of the sites, or of any information, products or services referred
                        to on those other websites or applications unless specifically stated. By
                        accessing these third party sites, you agree to any terms of access or use
                        imposed by those sites. We make no representations or warranties about the
                        accuracy of information contained on those websites or applications. We do
                        not provide any warranty, or assume any responsibility regarding the
                        quality, accuracy, source, merchantability, fitness for purpose or any other
                        aspect of the material on those sites, nor do we warrant that material on
                        other sites does not infringe the intellectual property rights of any other
                        person. We exclude all implied conditions and warranties except any implied
                        condition or warranty the exclusion of which would cause this clause to be
                        void. You should take precautions when downloading files from all websites
                        to protect your Devices from viruses and other destructive programs. If you
                        decide to access linked External Sites, you do so at your own risk.
                    </p>
                    <p>
                        <strong>Breach of your intellectual property rights </strong>
                    </p>
                    <p>
                        We respect the intellectual property rights of others, and we expect our
                        users to do the same. We will review all claims of copyright infringement
                        received and remove any Content posted or distributed in violation of
                        applicable copyright laws. If you believe that your work has been copied on
                        or via the Service in a way that constitutes copyright infringement, please
                        provide us with notice.
                    </p>
                    <p>
                        <strong>Disclaimer</strong>
                    </p>
                    <p>
                        You agree that we are not liability in any way for defamation, libel,
                        product disparagement, and other claims arising out of any Messages sent by
                        users of the Service. We are not responsible for any Messages of our users.
                        We neither warrant the accuracy of Messages or exercise any editorial
                        control over Messages, nor do we assume any legal obligation for editorial
                        control of Messages or liability in connection with Messages, including any
                        responsibility or liability for investigating or verifying the accuracy of
                        any Messages. In fact, as noted in our&nbsp;
                        <a href="">
                            <strong>Privacy Policy</strong>
                        </a>
                        , we do not (and cannot) read encrypted Messages.
                    </p>
                    <p>
                        <strong>Limitation of Liability</strong>
                    </p>
                    <p>
                        To the maximum extent permitted by law we exclude all liability for any loss
                        or damage of any kind (including special, indirect or consequential loss and
                        including without limitation loss of revenue , loss of goodwill, downtime
                        costs, loss of profit, loss of or damage to reputation, loss under or in
                        relation to any other contract, loss of data, loss of use of data or loss of
                        anticipated savings or benefits, loss of production, lost opportunity costs,
                        legal costs and expenses (except reasonable legal costs awarded by a court)
                        arising out of or in connection with the Website, Content and the use or
                        performance or services provided or made available through the Services, the
                        Website, the Applications and Devices except to the extent that the loss or
                        damage is directly caused by us fraud or wilful misconduct.
                    </p>
                    <p>
                        Our total aggregate financial liability to you is limited to $12 or your
                        monthly subscription fee (if any) under these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        , whichever is lesser.
                    </p>
                    <p>
                        Nothing in these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        shall affect any non-waivable statutory rights that apply to you.
                    </p>
                    <p>
                        <strong>Indemnification</strong>
                    </p>
                    <p>
                        You agree to defend, indemnify, and hold us and our officers, directors,
                        employees, successors, agents, and assigns harmless from and against any
                        claims, actions, or demands, including, without limitation, reasonable legal
                        and accounting fees, arising, or resulting from your breach of these Term of
                        Service and/or your misuse of the Service. We shall provide notice to you of
                        any such claim, suit, or proceeding. We reserve the right, at your expense,
                        to assume the exclusive defence and control of any matter that is subject to
                        indemnification under this section. In such case, you agree to cooperate
                        with any reasonable requests assisting our defence of such matter.
                    </p>
                    <p>
                        <strong>Termination</strong>
                    </p>
                    <p>
                        We reserve the right, in our sole discretion, to restrict, suspend, or
                        terminate these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        , your access to all or any part of the Service, at any time and for any
                        reason without prior notice or liability. We reserve the right to change,
                        suspend, or discontinue all or any part of the Service at any time without
                        prior notice or liability. You may terminate the{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        by contacting us at<strong>&nbsp;</strong>
                        <a href="legal@sharepass.com">legal@sharepass.com</a>. Upon any termination
                        of the{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        , the licenses granted above shall terminate, and you shall have no right to
                        continue to use the Service.&nbsp;The following provisions shall survive the
                        termination of these{" "}
                        <a href="e">
                            <strong>Terms of Service</strong>
                        </a>
                        :
                    </p>
                    <ul>
                        <li>No warranties;</li>
                        <li>Disclaimer;</li>
                        <li>Licenses;</li>
                        <li>Intellectual Property Rights;</li>
                        <li>Indemnification;</li>
                        <li>Limitation of Liability;</li>
                        <li>Binding Arbitration;</li>
                        <li>Class Action Waiver; and</li>
                        <li>Equitable Relief.</li>
                    </ul>
                    <p>
                        <strong>Consumer Guarantees</strong>
                    </p>
                    <p>
                        To the extent permitted by law, any conditions, warranties, guarantees,
                        rights, remedies, liabilities and other terms implied or conferred by
                        statute, custom or the general law that impose any liability or obligation
                        on us are excluded under these Terms of Use. However, if a supply under
                        these Terms of Use is a supply of goods or services to a consumer within the
                        meaning of the Australian Consumer Law (contained in Schedule 2 to the{" "}
                        <em>Competition and Consumer Act</em> 2010 (Cth)), nothing contained in
                        these Terms of Use excludes, restricts or modifies the application of any
                        provision, the exercise of any right or remedy, or the imposition of any
                        liability under the Australian Consumer Law, provided that, to the extent
                        that the Australian Consumer Law permits us to limit our liability, then our
                        liability is limited to:
                    </p>
                    <ul>
                        <li>
                            in the case of services, the cost of supplying the Services again or
                            payment of the cost of having the Services supplied again; and
                        </li>
                        <li>
                            in the case of software or other goods, the cost of replacing the goods,
                            supplying equivalent goods or having the goods repaired, or payment of the
                            cost of replacing the goods, supplying equivalent goods or having the
                            goods repaired,
                        </li>
                    </ul>
                    <p>
                        and except in the case of a major failure (as that term is defined in the
                        Australian Consumer Law), we can elect as between the remedies set out
                        above.
                    </p>
                    <p>
                        <strong>Binding Arbitration</strong>
                    </p>
                    <p>
                        Any dispute, controversy or claim arising out of, relating to or in
                        connection with these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        , the Content, or the Service (each, a <strong>Dispute</strong>), either
                        party may elect to resolve the dispute finally and exclusively by binding
                        arbitration contract, including any question regarding its existence,
                        validity or termination, shall be resolved by arbitration in accordance with
                        the&nbsp;Australian Centre for International Commercial Arbitration (
                        <strong>ACICA</strong>) Expedited Arbitration Rules. The seat of arbitration
                        shall be Victoria, Australia. The language of the arbitration shall be
                        English. Any election to arbitrate, at any time, shall be final and binding
                        on the other party.
                    </p>
                    <p>
                        This provision shall not preclude parties from seeking provisional remedies
                        in aid of arbitration from a court of appropriate jurisdiction. The
                        arbitration may be conducted in person, through the submission of documents,
                        by phone, or online. If conducted in person, the arbitration shall take
                        place in Victoria, Australia. The parties may litigate in court to compel
                        arbitration, to stay a proceeding pending arbitration, or to confirm,
                        modify, vacate, or enter judgment on the award entered by the arbitrator.
                        The parties shall cooperate in good faith in the voluntary and informal
                        exchange of all non-privileged documents and other information (including
                        electronically stored information) relevant to the Dispute immediately after
                        commencement of the arbitration. Nothing in this Agreement will prevent us
                        from seeking injunctive relief in any court of competent jurisdiction as
                        necessary to protect our proprietary interests.
                    </p>
                    <p>
                        <strong>Class Action Waiver</strong>
                    </p>
                    <p>
                        You agree that any arbitration or proceeding shall be limited to the Dispute
                        between us and you individually. To the full extent permitted by law,
                    </p>
                    <ul>
                        <li>no arbitration or proceeding shall be joined with any other;</li>
                        <li>
                            there is no right or authority for any Dispute to be arbitrated or
                            resolved on a class action-basis or to utilise class action procedures;
                            and
                        </li>
                        <li>
                            there is no right or authority for any Dispute to be brought in a
                            purported representative capacity on behalf of the general public or any
                            other persons.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            YOU AGREE THAT YOU MAY BRING CLAIMS AGAINST US ONLY IN YOUR INDIVIDUAL
                            CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                            REPRESENTATIVE PROCEEDING.
                        </strong>
                    </p>
                    <p>
                        <strong>Equitable Relief</strong>
                    </p>
                    <p>
                        You acknowledge and agree that in the event of a breach or threatened
                        violation of our intellectual property rights and confidential and
                        proprietary information by you, we will suffer irreparable harm and will
                        therefore be entitled to injunctive relief to enforce these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        ,{" "}
                        <a href="">
                            <strong>Permitted Use Policy</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Privacy Policy</strong>
                        </a>
                        and{" "}
                        <a href="">
                            <strong>Cookies Policy</strong>
                        </a>
                        . We may, without waiving any other remedies under the{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        ,{" "}
                        <a href="">
                            <strong>Permitted Use Policy</strong>
                        </a>
                        ,{" "}
                        <a href="">
                            <strong>Privacy Policy</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Cookies Policy</strong>
                        </a>{" "}
                        seek from any court having jurisdiction any interim, equitable, provisional,
                        or injunctive relief that is necessary to protect our rights and property
                        pending the outcome of the arbitration referenced above. You irrevocably and
                        unconditionally submit to the non-exclusive jurisdiction of the courts of
                        Victoria, Australia and any courts which may hear appeals from those courts
                        for purposes of any such action by us.
                    </p>
                    <p>
                        <strong>Severability</strong>
                    </p>
                    <p>
                        If any of these terms or conditions are invalid, illegal or unenforceable,
                        those terms or conditions will be struck out and other provisions which are
                        self-sustaining and capable of separate enforcement to the invalid
                        provision, are and continue to be valid and enforceable in accordance with
                        their terms.
                    </p>
                    <p>
                        <strong>Waiver</strong>
                    </p>
                    <p>
                        The failure, or delay on the part of us in exercising its power or right in
                        relation to your breach of these terms or conditions does not operate as a
                        waiver of that power or right, nor does any single exercise of any power or
                        right preclude any other or further exercise of any power or right.
                    </p>
                    <p>
                        <strong>Entire Agreement</strong>
                    </p>
                    <p>
                        Except as expressly agreed by us and you in writing, these{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>
                        ,{" "}
                        <a href="">
                            <strong>Permitted Use Policy</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Privacy Policy</strong>
                        </a>{" "}
                        and{" "}
                        <a href="">
                            <strong>Cookies Policy</strong>
                        </a>{" "}
                        constitute the entire agreement between you and us with respect to the
                        subject matter, and supersedes all previous or contemporaneous agreements,
                        whether written or oral, between the parties with respect to the subject
                        matter.
                    </p>
                    <p>
                        <strong>Governing Law</strong>
                    </p>
                    <p>
                        The Service is based in Australia. We make no claims concerning whether the
                        Service may be used or are appropriate for use outside of Australia or for
                        your particular industry, company, or intended use. Your access to and use
                        of the Service is solely at your own risk. You are solely responsible for
                        ensuring compliance with the applicable laws of your specific jurisdiction
                        and industry.
                    </p>
                    <p>
                        These{" "}
                        <a href="">
                            <strong>Terms of Service</strong>
                        </a>{" "}
                        are governed by the laws in force in Victoria, Australia without regard to
                        conflict of laws provisions. Subject the binding arbitration provision
                        above, you irrevocably and unconditionally submit to the non-exclusive
                        jurisdiction of the courts of Victoria, Australia and any courts which may
                        hear appeals from those courts.
                    </p>
                    <p>
                        <strong>Miscellaneous </strong>
                    </p>
                    <p>
                        The headings are provided merely for convenience and shall not be given any
                        legal import. &nbsp;This Agreement will inure to the benefit of our
                        successors, assigns, licensees, and sublicensees.
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default TermsOfService;