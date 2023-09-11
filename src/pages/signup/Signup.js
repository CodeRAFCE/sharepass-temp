import React, { useState, useEffect, useCallback } from "react";
import "./../../assets/css/signup.css";
import wwpass from "../../assets/images/wwpass.png";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import frontendConfigApp from "../../assets/js/config";
import { signUp } from "../../services/auth";
import { Tooltip } from 'react-tooltip';
import SweetAlert from 'react-bootstrap-sweetalert';
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

//class Signup extends React.Component
const Signup = () => {

  //render()
  //{
    /**
     * reCaptcha code
     */
  const { executeRecaptcha } = useGoogleReCaptcha(); 
  const [dataForm, setDataForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    nameError: false,
    nameInvalid: false,
    lastNameError: false,
    lastNameInvalid: false,
    emailError: false,
    emailInvalid: false,
    emailAlreadyExists: false,
    passwordError: false,
    passwordInvalid: false,
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
    await executeRecaptcha("signup");
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  function handleSSO(idp){
    window.location.assign(
      frontendConfigApp.app_url + "auth/redirect?idp=" + idp
    );
  }
    
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    const show = document.getElementById('id_show');
    show.style.display = 'none';

    const hide = document.getElementById('id_hide');
    hide.style.display = 'inline';
    
  }

  function togglePasswordHide() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'text' ? 'password' : 'text';
    passwordInput.setAttribute('type', type);
    

    const show = document.getElementById('id_show');
    show.style.display = 'inline';

    const hide = document.getElementById('id_hide');
    hide.style.display = 'none';

    
  }

  // Function to handle the input event
  function handleTextboxInput() {
    var firstTextbox = document.getElementById('email');
    var textboxValue = firstTextbox.value.trim();
    
    var divToToggle = document.getElementById('divShow');
  
    if (textboxValue.length > 0) {
      divToToggle.style.display = 'block';
    } else {
      divToToggle.style.display = 'none';
    }
  } 

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return !(re.test(String(email).toLowerCase()) && email.length <= 100);
  };
  
  const validatePassword = (password) => {
    const re =
      /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
    return !re.test(String(password));
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
      case "password":
        setDataForm((prevForm) => ({
          ...prevForm,
          password: value,
          passwordError: isError,
          passwordInvalid: validatePassword(value),
        }));
        break;
      default:
        break;
    }
  };

  const handleSignup = async () => {
    console.log("Form data", dataForm);
    //Validate inputs
    if(
      dataForm.emailError ||
      dataForm.emailInvalid ||
      dataForm.nameError ||
      dataForm.nameInvalid ||
      dataForm.lastNameError ||
      dataForm.lastNameInvalid ||
      dataForm.passwordError ||
      dataForm.passwordInvalid
    ){
      return;
    }

    setIsLoading(true);

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");

    const { email, lastname, name, password } = dataForm;
    let body = {
      email,
      lastname,
      name,
      password,
    };

    if (token) {
      body.token = token;
    }

    const { error, errorMessage, successMessage } = await signUp(body);

    setError(error);
    setErrorMessage(errorMessage);
    setIsLoading(false);
    setSuccessMessage(successMessage);

    if (successMessage) {
      setDataForm({
        ...dataForm,
        name: "",
        lastname: "",
        email: "",
        password: "",
      });

      
      /*setAlert(
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Signed up successfully!"
          onConfirm={() => {
            history.push("/auth/login");
          }}
          confirmBtnBsStyle="primary"
          confirmBtnText="SIGN IN"
          btnSize=""
        >
          An email has been sent to your inbox. Please, confirm your email
          account prior sign in.
        </ReactBSAlert>
      );*/
    }

    setIsLoading(false);
    setShowAlert(true);
  }
    
  const onConfirm = () => {
    if(error){
      setShowAlert(false);
    } else {
      window.location.assign(frontendConfigApp.app_url + "auth/login?email=" + encodeURIComponent(dataForm.email));
    }
  }

  return(<>
  
        <Helmet>
            <title>Sign up | SharePass</title>
            <meta property="description" content={defaultMetaDescription} />
            <meta property="og:title" content="Sign up | SharePass" />
            <meta property="og:description" content={defaultMetaDescription} />
            <meta property="og:image" content={defaultOgImg} />
        </Helmet>
    <main className="sign-main-content">
      <div className="sign-container">
        <div className="sign-container-bordered">
          <form
            className="sign-container-form"
            aria-label="form"
            method="post"
            target="_self"
            data-qa="form-component"
          >
            <div className="sign-container-title">
              <h1 className="sign-container-title-h3" style={{ color: "#09182C" }}>
                Sign up
              </h1>
              <div className="sign-container-small">
                <a
                  className="signup"
                  style={{color:"blue"}}
                  data-qa="supplementaryFlowLink"
                  href="/signin"
                  target="_parent"
                >
                  <u>I have an account</u>
                </a>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 10 }}>
                <div className="sign-input-placeholder">
                  <div className={`sign-input-suffix-container ${dataForm.emailError || dataForm.emailInvalid ? "input-with-errors": ""}`}>
                    <input
                      data-qa="txtSignupEmail"
                      className="sign-base-input"
                      aria-required="true"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onKeyUp={handleTextboxInput}
                      required
                      id="email"
                      value={dataForm.email}
                      onChange={(e) => validateInput(e)}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
              <div id="divShow" style={{display:'none'}}>
                <div
                  style={{ marginBottom: 10 }}
                >
                  <div className="sign-input-placeholder">
                    <div data-tooltip-id="tooltip-item" className={`sign-input-suffix-container  ${dataForm.passwordError || dataForm.passwordInvalid ? "input-with-errors": ""}`}>
                      <Tooltip  id="tooltip-item" >
                        <ul style={{padding: "10px"}}>
                          <li>Minimun length 8 characters</li>
                          <li>At least 1 lowercase character</li>
                          <li>At least 1 uppercase character</li>
                          <li>At least 1 number</li>
                          <li>At least 1 special character</li>
                        </ul>
                      </Tooltip>
                      <input
                        placeholder="Password"
                        data-qa="txtSignupPassword"
                        className="sign-base-input"
                        aria-required="true"
                        required
                        name="password"
                        type="password"
                        id="password"
                        aria-describedby="password__field_message"
                        aria-autocomplete="list"
                        disabled={isLoading}
                        value={dataForm.password}
                        onChange={(e) => validateInput(e)}
                      />
                      <div className="sign-defaul-suffix-container">
                        <div className="sign-password-suffix-container">
                          <button id="id_show"
                            className="sign-base-unstyled sign-password-icon"
                            type="button"
                            aria-label="Show password"
                            onClick={togglePasswordVisibility}
                          >
                            <svg
                              width={16}
                              height={11}
                              viewBox="0 0 16 11"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M14.9421 5.61977L14.4918 5.4024V5.4024L14.9421 5.61977ZM1.05765 5.61977L1.50793 5.4024L1.50793 5.4024L1.05765 5.61977ZM14.9421 5.38039L15.3924 5.16301L15.3924 5.16301L14.9421 5.38039ZM1.05765 5.38039L0.607377 5.16301L0.607377 5.16301L1.05765 5.38039ZM14.4918 5.4024C11.8689 10.8355 4.1308 10.8355 1.50793 5.4024L0.607378 5.83715C3.59408 12.0239 12.4057 12.0239 15.3924 5.83715L14.4918 5.4024ZM14.4918 5.59776C14.462 5.53605 14.462 5.46411 14.4918 5.4024L15.3924 5.83715C15.4952 5.62419 15.4952 5.37596 15.3924 5.16301L14.4918 5.59776ZM1.50793 5.59776C4.1308 0.164679 11.8689 0.164678 14.4918 5.59776L15.3924 5.16301C12.4057 -1.02374 3.59408 -1.02374 0.607377 5.16301L1.50793 5.59776ZM0.607377 5.16301C0.504572 5.37597 0.504572 5.6242 0.607378 5.83715L1.50793 5.4024C1.53772 5.46411 1.53772 5.53605 1.50793 5.59776L0.607377 5.16301ZM9.99987 5.50008C9.99987 6.60465 9.10444 7.50008 7.99987 7.50008V8.50008C9.65672 8.50008 10.9999 7.15693 10.9999 5.50008H9.99987ZM7.99987 7.50008C6.8953 7.50008 5.99987 6.60465 5.99987 5.50008H4.99987C4.99987 7.15693 6.34302 8.50008 7.99987 8.50008V7.50008ZM5.99987 5.50008C5.99987 4.39551 6.8953 3.50008 7.99987 3.50008V2.50008C6.34302 2.50008 4.99987 3.84322 4.99987 5.50008H5.99987ZM7.99987 3.50008C9.10444 3.50008 9.99987 4.39551 9.99987 5.50008H10.9999C10.9999 3.84322 9.65672 2.50008 7.99987 2.50008V3.50008Z"
                                fill="#6D758D"
                              />
                            </svg>
                            


                          </button>

                          <button id="id_hide" style={{display:'none'}}
                            className="sign-base-unstyled sign-password-icon"
                            type="button"
                            aria-label="Show password"
                            onClick={togglePasswordHide}
                          >
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16"> <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/> <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/> <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/> </svg>


                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: 10, display: 'flex' }}>
                  <div className="sign-input-placeholder" style={{ marginRight: 10 }}>
                    <div className={`sign-input-suffix-container ${dataForm.nameError || dataForm.nameInvalid ? "input-with-errors": ""}`}>
                      <input
                        data-qa="txtSignupFirstName" // Added a unique data-qa attribute for the first name input
                        placeholder="First Name"
                        className="sign-base-input"
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
                  <div className="sign-input-placeholder">
                    <div className={`sign-input-suffix-container ${dataForm.lastNameError || dataForm.lastNameInvalid ? "input-with-errors": ""}`}>
                      <input
                        data-qa="txtSignupLastName" // Added a unique data-qa attribute for the last name input
                        placeholder="Last Name"
                        className="sign-base-input"
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
            </div>
            <div
              
              style={{ marginBottom: 10 }}
            >
              <div
                className="sign-small-text"
                style={{ textAlign: "center" }}
              >
                By signing up, you agree to the{" "}
                <a
                  className=""
                  rel="noopener noreferrer"
                  target="_blank"
                  href="terms-of-service"
                  aria-label=""
                  style={{ color: "rgb(74, 110, 224)" }}
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  className=""
                  rel="noopener noreferrer"
                  target="_blank"
                  href="privacy-policy"
                  aria-label=""
                  style={{ color: "rgb(74, 110, 224)" }}
                >
                  Privacy Policy
                </a>
                
              </div>
            </div>
            <button 
              type="button"
              onClick={handleSignup} 
              data-qa="btnSignupSubmit" 
              className="btn_Submit"
              disabled={isLoading}
            >
              <span>Agree and Sign up</span>
            </button>
            <div style={{ height: 16, flexShrink: 0 }} />
            <div>
              <button
                type="button"
                data-qa="btnGoogleAuth"
                className="sign-base-basic sso"
                onClick={() => handleSSO("Google")}
              >
                <span className="sign-left-icon">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16.0008 8.17753C16.0008 7.51976 15.9463 7.03976 15.8285 6.54199H8.16406V9.51085H12.6629C12.5722 10.2486 12.0824 11.3598 10.994 12.1064L10.9787 12.2058L13.4021 14.0456L13.5699 14.062C15.1119 12.6664 16.0008 10.6131 16.0008 8.17753Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M8.1636 15.9999C10.3676 15.9999 12.218 15.2887 13.5695 14.0621L10.9935 12.1065C10.3042 12.5776 9.37899 12.9065 8.1636 12.9065C6.00489 12.9065 4.17272 11.5109 3.5196 9.58203L3.42386 9.59L0.904047 11.5011L0.871094 11.5909C2.21348 14.2042 4.97084 15.9999 8.1636 15.9999Z"
                        fill="#34A853"
                      />
                      <path
                        d="M3.52021 9.5824C3.34788 9.08463 3.24815 8.55126 3.24815 8.00017C3.24815 7.44903 3.34788 6.91572 3.51115 6.41795L3.50658 6.31193L0.95518 4.37012L0.871703 4.40903C0.31844 5.49349 0.000976562 6.71129 0.000976562 8.00017C0.000976562 9.28906 0.31844 10.5068 0.871703 11.5913L3.52021 9.5824Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M8.16364 3.09331C9.6965 3.09331 10.7305 3.7422 11.3201 4.28446L13.6239 2.08C12.209 0.791114 10.3677 0 8.16364 0C4.97087 0 2.21349 1.79554 0.871094 4.40885L3.51054 6.41777C4.17274 4.48888 6.00492 3.09331 8.16364 3.09331Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="sign-base-text ">
                  Sign up with Google
                </span>
                <span className="sign-right-icon">
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 0.5L6.5 6L1 11.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              
              <button
                type="button"
                data-qa="btnAppleAuth"
                className="sign-base-basic sso"
                onClick={() => handleSSO("SignInWithApple")}
              >
                <span className="sign-left-icon">
                  <svg width={16} height={16} viewBox="0 0 14 15" fill="none">
                    <path
                      d="M12.8926 5.06757C12.824 5.10896 11.1909 5.98231 11.1909 7.91872C11.2679 10.1271 13.2518 10.9015 13.2858 10.9015C13.2518 10.9429 12.9863 11.9565 12.1999 13.0191C11.5758 13.9343 10.883 14.8571 9.83114 14.8571C8.83056 14.8571 8.47137 14.2471 7.31685 14.2471C6.07699 14.2471 5.72618 14.8571 4.7769 14.8571C3.725 14.8571 2.98098 13.8849 2.32285 12.9782C1.46783 11.7916 0.741095 9.92931 0.715439 8.14122C0.698149 7.19371 0.886665 6.26231 1.36521 5.4712C2.04063 4.36674 3.24646 3.61701 4.56329 3.59229C5.57224 3.5595 6.4702 4.25979 7.08595 4.25979C7.67603 4.25979 8.77924 3.59229 10.0275 3.59229C10.5662 3.59282 12.003 3.74922 12.8926 5.06757ZM7.00061 3.40311C6.82102 2.53782 7.31685 1.67253 7.77866 1.12057C8.36875 0.453067 9.30073 0 10.1044 0C10.1557 0.865287 9.83058 1.71391 9.24942 2.33198C8.72793 2.99948 7.82997 3.50199 7.00061 3.40311Z"
                      fill="#0E101A"
                    />
                  </svg>
                </span>
                <span className="sign-base-text ">
                  Sign up with Apple
                </span>
                <span className="sign-right-icon">
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 0.5L6.5 6L1 11.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                data-qa="btnWWPassAuth"
                className="sign-base-basic sso"
                onClick={() => handleSSO("WWPass")}
              >
                <span className="sign-left-icon">
                  <img src={wwpass} />
                </span>
                <span className="sign-base-text ">
                  Sign up with WWPass
                </span>
                <span className="sign-right-icon">
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 0.5L6.5 6L1 11.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div style={{ height: 16, flexShrink: 0 }} />
            <div
              className="sign-small-text"
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
                href=""
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
export default Signup;