import React, { useState, useEffect, useCallback } from "react";
import "./../../assets/css/contact.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import TinyTitle from "../../components/tinytitle/TinyTitle";
import SweetAlert from 'react-bootstrap-sweetalert';
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";
import {apiUrl} from "../../assets/js/blogConfig";
import newsletterImg from "../../assets/images/newsletters.jpg"
import whitepaperImg from "../../assets/images/whitepaper.jpg";
import { validatePhoneNumber } from "../../services/utils";

//class Signup extends React.Component
const Whitepaper = () => {

  
  const { executeRecaptcha } = useGoogleReCaptcha(); 
  const [dataForm, setDataForm] = useState({
    name: "",
    lastname: "",
    email: "",
    company: "",
    nameError: false,
    nameInvalid: false,
    lastNameError: false,
    lastNameInvalid: false,
    emailError: false,
    emailInvalid: false,
    emailAlreadyExists: false,
    companyError: false,
    companyInvalid: false,
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
    await executeRecaptcha("whitepaper");
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
      dataForm.emailError ||
      dataForm.emailInvalid ||
      dataForm.nameError ||
      dataForm.nameInvalid ||
      dataForm.lastNameError ||
      dataForm.lastNameInvalid ||
      dataForm.companyError ||
      dataForm.companyInvalid 
    ){
      return;
    }

    setIsLoading(true);

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("whitepaper");

    const { email, lastname, name, company } = dataForm;
    let body = {
      email,
      lastname,
      name,
      company
    };

    if (token) {
      body.token = token;
    }

    try {
      const response = await fetch(`${apiUrl}wp-json/custom-subscriber/v1/add-subscriber`, {
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
          company: ""
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

  const fillTheForm = () => {
    const section = document.getElementById('partnerForm');
    section.scrollIntoView({ behavior: 'smooth' });
    const offset = 100;
    const topOffset = section.offsetTop - offset;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }

  return(<>
  
        <Helmet>
            <title>Whitepaper | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="Whitepaper | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
        <section className="about_landing">
            <div className='content_sec'>
                <div className="text_wraper">
                    <TinyTitle title="Know more about us" />
                    <h1>Whitepaper</h1>
                    <p className="para">Discover invaluable insights within SharePass's Whitepaper. Dive into a world of pioneering technologies, trends, and expert viewpoints. Uncover the future of software solutions through our comprehensive collection of thought-provoking documents.</p>
                </div>
            </div>
        </section>
        <section className="features_sec">
          <div className="content_sec">
            <div className="flap bi-block-image-text" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
              <div className='text_wrap pr first-block-enterprise'>
                <div className="text_wraper">
                  <TinyTitle title="Stay up to date" />
                  <h2>Receive cybersecurity industry updates</h2>
                </div>
                <p>
                Stay informed and ahead in the cybersecurity landscape by subscribing to our newsletter. Get the latest insights, trends, and best practices to enhance your security strategies and protect your digital assets effectively.
                </p>
                <div className="video_wrap_mobile">
                  <img src={newsletterImg} />
                </div>
                <button type='button' className="second" onClick={fillTheForm} >
                  Fill the form
                </button>
              </div>
              <div className="video_wrap">
                <img src={newsletterImg} />
              </div>
            </div>
            <div className="flap bi-block-image-text" style={{opacity: 1, transition: "all 1.5s ease-in-out"}}>
              <div className="video_wrap">
                <img src={whitepaperImg} />
              </div>
              <div className='text_wrap pr first-block-enterprise'>
                <div className="text_wraper">
                  <TinyTitle title="Know more" />
                  <h2>Understand the logic behind SharePass</h2>
                </div>
                <p>
                Unlock the logic driving SharePass's cutting-edge solutions. Delve into our innovative approach, which melds advanced technology with strategic insights to fortify your digital defenses. Gain a deeper understanding of our comprehensive offerings and empower your organization to navigate the complex realm of cybersecurity with confidence.
                </p>
                <div className="video_wrap_mobile">
                  <img src={whitepaperImg} />
                </div>
                <button type='button' className="second" onClick={fillTheForm} >
                  Fill the form
                </button>
              </div>
            </div>
            
          </div>
        </section>
        <main className="contact-main-content">
          <div className="contact-container">
            <div className="contact-container-bordered" id="partnerForm">
              <TinyTitle title="Receive our whitepaper and newsletters" />
              <h2>Fill our subscription form</h2>
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
                    dataForm.email.length == 0 ||
                    dataForm.name.length == 0 ||
                    dataForm.lastname.length == 0 ||
                    dataForm.company.length == 0

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
export default Whitepaper;