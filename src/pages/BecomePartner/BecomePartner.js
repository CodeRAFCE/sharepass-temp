import React, { useState, useEffect, useCallback } from "react";
import "./../../assets/css/contact.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import TinyTitle from "../../components/tinytitle/TinyTitle";
import SweetAlert from 'react-bootstrap-sweetalert';
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import {apiUrl} from "../../assets/js/blogConfig";
import moreCustomers from "../../assets/images/more-customers.jpg"
import enhanceCompetitivity from "../../assets/images/enhance-competitivity.jpg";
import associatesImg from "../../assets/images/associates-not-transactions.jpg"
import { validatePhoneNumber } from "../../services/utils";

//class Signup extends React.Component
const BecomePartner = () => {

  
  const { executeRecaptcha } = useGoogleReCaptcha(); 
  const [dataForm, setDataForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    company: "",
    country: "",
    countryError: false,
    countryInvalid: false,
    phone: "",
    phoneError: false,
    phoneInvalid: false,
    companySize: "",
    companySizeError: false,
    companySizeInvalid: false,
    companyType: "",
    companyTypeError: false,
    companyTypeInvalid: false,
    message: "",
    nameError: false,
    nameInvalid: false,
    lastNameError: false,
    lastNameInvalid: false,
    emailError: false,
    emailInvalid: false,
    emailAlreadyExists: false,
    companyError: false,
    companyInvalid: false,
    messageError: false,
    messageInvalid: false,
    disabled: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    // ???
    await executeRecaptcha("becomepartner");
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    window.scrollTo(0, 0);
    handleReCaptchaVerify();
  }, []);
  
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return !(re.test(String(email).toLowerCase()) && email.length <= 100);
  };
  
  const validateNameLastname = (string) => {
    return !(string.length <= 50);
  };

  const validateInput = (e) => {
    const { id, value } = e.target;

    const isError = value.length === 0;

    switch (id) {
      case "firstName":
        setDataForm((prevForm) => ({
          ...prevForm,
          name: value,
          nameError: isError,
          nameInvalid: validateNameLastname(value),
          disabled: false,
        }));
        break;
      case "lastName":
        setDataForm((prevForm) => ({
          ...prevForm,
          lastname: value,
          lastNameError: isError,
          lastNameInvalid: validateNameLastname(value),
        }));
        break;
      case "email":
        setDataForm((prevForm) => ({
          ...prevForm,
          email: value,
          emailError: isError,
          emailInvalid: validateEmail(value),
        }));
        break;
      case "company":
        setDataForm((prevForm) => ({
          ...prevForm,
          company: value,
          companyError: isError,
          companyInvalid: value.length > 100,
        }));
        break;
      case "message":
        setDataForm((prevForm) => ({
          ...prevForm,
          message: value,
          messageError: isError,
          messageInvalid: value.length > 1000,
        }));
        break;
      case "phone":
        setDataForm((prevForm) => ({
          ...prevForm,
          phone: value,
          phoneError: isError,
          phoneInvalid: !validatePhoneNumber(value),
        }));
        break;
      case "country":
          setDataForm((prevForm) => ({
            ...prevForm,
            country: value,
            countryError: isError,
            countryInvalid: value.length > 100,
          }));
          break;
      case "companyType":
          setDataForm((prevForm) => ({
            ...prevForm,
            companyType: value,
            companyTypeError: isError,
            companyTypeInvalid: value.length > 100,
          }));
          break;
      case "companySize":
          setDataForm((prevForm) => ({
            ...prevForm,
            companySize: value,
            companySizeError: isError,
            companySizeInvalid: value.length > 100,
          }));
          break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    console.log("Form data", dataForm);
    
    //Validate inputs
    if(
      dataForm.countryError ||
      dataForm.countryInvalid ||
      dataForm.companySizeError ||
      dataForm.companySizeInvalid ||      
      dataForm.companyTypeError ||
      dataForm.companyTypeInvalid ||
      dataForm.phoneError ||
      dataForm.phoneInvalid ||
      dataForm.emailError ||
      dataForm.emailInvalid ||
      dataForm.nameError ||
      dataForm.nameInvalid ||
      dataForm.lastNameError ||
      dataForm.lastNameInvalid ||
      dataForm.companyError ||
      dataForm.companyInvalid ||
      dataForm.messageError ||
      dataForm.messageInvalid
    ){
      return;
    }

    setIsLoading(true);

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("becomepartner");

    const { email, lastname, name, company, message, country, companySize, phone, companyType } = dataForm;
    let body = {
      email,
      lastname,
      name,
      message,
      company,
      country,
      companySize,
      companyType,
      phone
    };

    if (token) {
      body.token = token;
    }

    try {
      const response = await fetch(`${apiUrl}wp-json/custom-partnership/v1/add-partnership`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log("RESPONSE", response);
      let responseBody = await response.json();
      console.log("RESPONSE BODY", responseBody);
      if(response.status != 200) {
        setError(true);
        setErrorMessage(responseBody.message);
      }else{
        setError(false);
        setSuccessMessage(responseBody.message);
      
        setDataForm({
          ...dataForm,
          name: "",
          lastname: "",
          email: "",
          company: "",
          message: "",
          phone: "",
          country: "",
          companySize: "",
          companyType: ""
        });
      }

    } catch (error) {
      // Handle error here
      console.error('Error:', error);
    }

    setIsLoading(false);
    setShowAlert(true);
  }
    
  const onConfirm = () => {

      setShowAlert(false);
    
  }

  const companyTypes = [
    "Service Provider (MSP/MSSP)",
    "Value Added Reseller",
    "Insurance Provider",
    "Distributor",
    "Technology Partner",
    "Other"
  ];

  const companySizes = [
    '0-20',
    '20-100',
    '100-500',
    '500-1,000',
    '1,000-5,000',
    '+5,000'
  ];

  const fillTheForm = () => {
    const section = document.getElementById('partnerForm');
    section.scrollIntoView({ behavior: 'smooth' });
    const offset = 100;
    const topOffset = section.offsetTop - offset;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }

  return(<>
  
        <Helmet>
            <title>Become a partner | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="Become a partner | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
        <section className="about_landing">
            <div className='content_sec'>
                <div className="text_wraper">
                    <TinyTitle title="Lets work together" />
                    <h1>Become a Partner</h1>
                    <p className="para">Join forces with SharePass as a Partner and strengthen the global cybersecurity fabric. As a like-minded entity, you'll contribute to a collective effort to fortify digital defenses, share insights, and promote cutting-edge solutions. Collaborate with us to shape a safer digital future and make your mark in the cybersecurity arena.</p>
                </div>
            </div>
        </section>
        <section className="features_sec">
          <div className="content_sec">
            <div className="flap bi-block-image-text" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
              <div className='text_wrap pr first-block-enterprise'>
                <div className="text_wraper">
                  <TinyTitle title="Expand your network" />
                  <h2>Broaden your clientele</h2>
                </div>
                <p>
                  Elevate your business by incorporating SharePass's extensive cybersecurity solutions into your offerings. This not only enhances your service portfolio but also opens doors to a burgeoning market of enterprises seeking top-notch protection. Together, we can extend your reach and engage a wider audience in search of robust cybersecurity solutions.
                </p>
                <div className="video_wrap_mobile">
                  <img src={moreCustomers} />
                </div>
                <button type='button' className="second" onClick={fillTheForm} >
                  Fill the form
                </button>
              </div>
              <div className="video_wrap">
                <img src={moreCustomers} />
              </div>
            </div>
            <div className="flap bi-block-image-text" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
              <div className="video_wrap">
                <img src={enhanceCompetitivity} />
              </div>
              <div className='text_wrap pr first-block-enterprise'>
                <div className="text_wraper">
                  <TinyTitle title="Be more competitive" />
                  <h2>Amplify your competitive advantage</h2>
                </div>
                <p>
                Combine the capabilities of your solutions with SharePass's all-encompassing platform. In a constantly changing cybersecurity landscape, distinguishing yourself becomes seamless as we unite our efforts. Join hands to provide unmatched security solutions and surpass the competition.
                </p>
                <div className="video_wrap_mobile">
                  <img src={enhanceCompetitivity} />
                </div>
                <button type='button' className="second" onClick={fillTheForm} >
                  Fill the form
                </button>
              </div>
            </div>
            <div className="flap bi-block-image-text" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
              <div className='text_wrap pr first-block-enterprise'>
                <div className="text_wraper">
                  <TinyTitle title="Alliances, not transactions" />
                  <h2>Build strong business relationships</h2>
                </div>
                <p>
                  At SharePass, we prioritize collaborative growth over mere transactional ties. Aligning with us means becoming an integral part of a community that provides unwavering support for you to shine as a prominent player in the cybersecurity market.
                </p>
                <div className="video_wrap_mobile">
                  <img src={associatesImg} />
                </div>
                <button type='button' className="second" onClick={fillTheForm} >
                  Fill the form
                </button>
              </div>
              <div className="video_wrap">
                <img src={associatesImg} />
              </div>
            </div>
          </div>
        </section>
        <main className="contact-main-content">
          <div className="contact-container">
            <div className="contact-container-bordered" id="partnerForm">
              <TinyTitle title="Get started" />
              <h2>Fill our partnership form</h2>
              <form
                className="contact-container-form"
                aria-label="form"
                method="post"
                target="_self"
                data-qa="form-component"
              >
                <div>
                  <div>
                    <div style={{ marginBottom: 10, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                      <div className="contact-input-placeholder" style={{ marginRight: 10 }}>
                        <div className={`contact-input-suffix-container ${dataForm.nameError || dataForm.nameInvalid ? "input-with-errors": ""}`}>
                          <input
                            data-qa="txtContactFirstName" // Added a unique data-qa attribute for the first name input
                            placeholder="First Name"
                            className="contact-base-input"
                            aria-required="true"
                            name="firstName" // Changed the name attribute to "firstName"
                            required
                            id="firstName" // Changed the id attribute to "firstName"
                            aria-describedby="name__field_message"
                            value={dataForm.name}
                            onChange={(e) => validateInput(e)}
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                      <div className="contact-input-placeholder">
                        <div className={`contact-input-suffix-container ${dataForm.lastNameError || dataForm.lastNameInvalid ? "input-with-errors": ""}`}>
                          <input
                            data-qa="txtContactLastName" // Added a unique data-qa attribute for the last name input
                            placeholder="Last Name"
                            className="contact-base-input"
                            aria-required="true"
                            name="lastName" // Changed the name attribute to "lastName"
                            required
                            id="lastName" // Changed the id attribute to "lastName"
                            aria-describedby="name__field_message"
                            value={dataForm.lastname}
                            onChange={(e) => validateInput(e)}
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 10, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <div className="contact-input-placeholder" style={{ marginRight: 10 }}>
                      <div className={`contact-input-suffix-container ${dataForm.emailError || dataForm.emailInvalid ? "input-with-errors": ""}`}>
                        <input
                          data-qa="txtContactEmail"
                          className="contact-base-input"
                          aria-required="true"
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                          id="email"
                          value={dataForm.email}
                          onChange={(e) => validateInput(e)}
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="contact-input-placeholder">
                      <div className={`contact-input-suffix-container ${dataForm.phoneError || dataForm.phoneInvalid ? "input-with-errors": ""}`}>
                        <input
                          data-qa="txtContactPhone"
                          className="contact-base-input"
                          aria-required="true"
                          name="phone"
                          placeholder="Phone"
                          type="tel"
                          required
                          id="phone"
                          value={dataForm.phone}
                          onChange={(e) => validateInput(e)}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 10, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <div className="contact-input-placeholder" style={{ marginRight: 10 }}>
                      <div className={`contact-input-suffix-container ${dataForm.companyError || dataForm.companyInvalid ? "input-with-errors": ""}`}>
                        <input
                          data-qa="txtContactCompany"
                          className="contact-base-input"
                          aria-required="true"
                          name="company"
                          placeholder="Company"
                          type="text"
                          required
                          id="company"
                          value={dataForm.company}
                          onChange={(e) => validateInput(e)}
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="contact-input-placeholder">
                      <div className={`contact-input-suffix-container ${dataForm.countryError || dataForm.countryInvalid ? "input-with-errors": ""}`}>
                        <input
                          data-qa="txtCountryRegion"
                          className="contact-base-input"
                          aria-required="true"
                          name="country"
                          placeholder="Country/Region"
                          type="text"
                          required
                          id="country"
                          value={dataForm.country}
                          onChange={(e) => validateInput(e)}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>                  

                  <div style={{ marginBottom: 10, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    <div className="contact-input-placeholder" style={{ marginRight: 10 }}>
                      <div className={`contact-input-suffix-container ${dataForm.companyTypeError || dataForm.companyTypeInvalid ? "input-with-errors": ""}`}>
                        <select
                          data-qa="txtContactCompanyType"
                          className="contact-base-input"
                          aria-required="true"
                          name="companyType"
                          required
                          id="companyType"
                          onChange={(e) => validateInput(e)}
                          disabled={isLoading}
                          value={dataForm.companyType ? dataForm.companyType : ''}
                        >
                          <option value="">Company Type</option>
                          {companyTypes.map((item) => {
                            return <option key={item} value={item} >{item}</option>;
                          })}
                          
                        </select>
                      </div>
                    </div>

                    <div className="contact-input-placeholder">
                      <div className={`contact-input-suffix-container ${dataForm.companySizeError || dataForm.companySizeInvalid ? "input-with-errors": ""}`}>
                        <select
                          data-qa="txtContactCompanySize"
                          className="contact-base-input"
                          aria-required="true"
                          name="companySize"
                          required
                          id="companySize"
                          onChange={(e) => validateInput(e)}
                          disabled={isLoading}
                          value={dataForm.companySize ? dataForm.companySize : ''}
                        >
                          <option value="">Company Size</option>
                          {companySizes.map((item) => {
                            return <option key={item} value={item} >{item}</option>;
                          })}
                          
                        </select>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 10 }}>
                    <div className="contact-input-placeholder">
                      <div className={`contact-input-suffix-container contact-input-is-textarea ${dataForm.messageError || dataForm.messageInvalid ? "input-with-errors": ""}`}>
                        <textarea
                          data-qa="txtContactMessage"
                          className="contact-base-input"
                          aria-required="true"
                          name="message"
                          rows={4}
                          required
                          id="message"
                          value={dataForm.message}
                          onChange={(e) => validateInput(e)}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  type="button"
                  onClick={handleSubmit} 
                  data-qa="btnSignupSubmit" 
                  className="btn_Submit"
                  disabled={
                    isLoading ||
                    dataForm.emailError ||
                    dataForm.emailInvalid ||
                    dataForm.nameError ||
                    dataForm.nameInvalid ||
                    dataForm.lastNameError ||
                    dataForm.lastNameInvalid ||
                    dataForm.companyError ||
                    dataForm.companyInvalid ||
                    dataForm.messageError ||
                    dataForm.messageInvalid ||
                    dataForm.email.length == 0 ||
                    dataForm.name.length == 0 ||
                    dataForm.lastname.length == 0 ||
                    dataForm.company.length == 0 ||
                    dataForm.message.length == 0 ||
                    dataForm.phone.length == 0 ||
                    dataForm.companySize.length == 0 ||
                    dataForm.country.length == 0   ||
                    dataForm.companyType.length == 0 ||
                    dataForm.phoneError ||
                    dataForm.phoneInvalid ||
                    dataForm.countryError ||
                    dataForm.countryInvalid ||
                    dataForm.companySizeError ||
                    dataForm.companySizeInvalid ||
                    dataForm.companyTypeError ||
                    dataForm.companyTypeInvalid

                  }
                >
                  <span>Send</span>
                </button>
                <div style={{ height: 16, flexShrink: 0 }} />
                
                <div style={{ height: 16, flexShrink: 0 }} />
                <div
                  className="contact-small-text"
                  style={{ color: "rgb(109, 117, 141)" }}
                >
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    className=""
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://policies.google.com/privacy"
                    aria-label="Google Privacy Policy"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    className=""
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.google.com/intl/en/policies/terms/"
                    aria-label="Google Terms of Service"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </div>
                <div style={{ height: 12, flexShrink: 0 }} />
              </form>
            </div>
          </div>
        </main>
        {showAlert && <SweetAlert
          title={error? "Error" : "Success"}
          onConfirm={onConfirm}
          //dependencies={[this.state.firstName, this.state.lastName]}
        >
          {(renderProps) => (<>
            <div>
              {error? 
                <svg width="25%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.793-4.207a1 1 0 0 1 1.414 0L12 10.586l2.793-2.793a1 1 0 1 1 1.414 1.414L13.414 12l2.793 2.793a1 1 0 0 1-1.414 1.414L12 13.414l-2.793 2.793a1 1 0 0 1-1.414-1.414L10.586 12 7.793 9.207a1 1 0 0 1 0-1.414z" 
                    fill="#fd5d93"
                  />
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" width="25%" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16"> 
                  <path color="#4ffbaa" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> 
                  <path color="#4ffbaa" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> 
                </svg>
              }
            </div>
            <div>{error? errorMessage: successMessage}</div>
            </>)}
        </SweetAlert>}
  </>);


  //}

}
export default BecomePartner;