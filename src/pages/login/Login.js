import React, {useState} from "react";
import "./../../assets/css/signup.css";
import wwpass from "../../assets/images/wwpass.png";
import frontendConfigApp from "../../assets/js/config";
import SweetAlert from 'react-bootstrap-sweetalert';
import { fetchDomainData } from "../../services/services";
import sharepass from "../../assets/images/SharePass.jpeg";
import Helmet from 'react-helmet';
import {defaultMetaDescription, defaultOgImg} from "../../assets/js/blogConfig";

const Login = () => {
    
  const [dataForm, setDataForm] = useState({
    email: "",
    emailError: false,
    emailInvalid: false,
    disabled: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [enterprise, setEnterprise] = useState({});

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
  
  const onCancel = () => {
    setEnterprise({});
    setShowAlert(false);
  }
  
  async function handleTextboxInput() {
    if(
      dataForm.emailError ||
      dataForm.emailInvalid ||
      dataForm.email.length == 0
    ){
      return;
    }

    setIsLoading(true);

    const domain = dataForm.email.split('@')[1];
  
    const { status, details } = await fetchDomainData(domain);

    setIsLoading(false);
    
    if(status == "Success"){
      /*setEnterprise(details);
      setShowAlert(true);*/
      window.location.assign(
        details.app_url
      );
    }else{
      window.location.assign(
        frontendConfigApp.app_url + "auth/login?email=" + encodeURIComponent(dataForm.email)
      );
    }

  }

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return !(re.test(String(email).toLowerCase()) && email.length <= 100);
  };

  const validateInput = (e) => {
    const { id, value } = e.target;

    const isError = value.length === 0;

    switch (id) {
      case "email":
        setDataForm((prevForm) => ({
          ...prevForm,
          email: value,
          emailError: isError,
          emailInvalid: validateEmail(value),
        }));
        break;
      default:
        break;
    }
  };

  return(<>
  
    <Helmet>
      <title>Sign in | SharePass</title>
      <meta property="description" content={defaultMetaDescription} />
      <meta property="og:title" content="Sign in | SharePass" />
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
              <h1
                className="sign-container-title-h3"
                style={{ color: "rgb(14, 16, 26)" }}
              >
                Sign in
              </h1>
              <div className="sign-container-small">
                <a
                  className=" "
                  style={{color:"blue"}}
                  data-qa="supplementaryFlowLink"
                  href="/signup"
                  target="_parent"
                >
                  <u>I don't have an account</u>
                </a>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 10 }}>
                <div className="sign-input-placeholder">
                  <div className={`sign-input-suffix-container ${dataForm.emailError || dataForm.emailInvalid ? "input-with-errors": ""}`}>
                    <input
                      data-qa="txtSignupEmail"
                      placeholder="Email"
                      className="sign-base-input"
                      aria-required="true"
                      name="email"
                      type="email"
                      id="email"
                      value={dataForm.email}
                      disabled={isLoading}
                      onChange={(e) => validateInput(e)}
                    />
                  </div>
                </div>
              </div>
              <div
                  id="divShow"
                  style={{ marginBottom: "10", display:"none" }}
                >
                  <div className="sign-input-placeholder">
                    <div className="sign-input-suffix-container">
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
                        defaultValue=""
                        aria-autocomplete="list"
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
            </div>
            <div
              style={{ marginBottom: 10, display: "none" }}
            >
              <div className="sign-troubleshoot-link">
                <button
                  className="sign-base-unstyled sign-troubleshoot-link-inner"
                  data-qa="linkForgotPassword"
                  type="button"
                >
                  Can’t sign in?
                </button>
              </div>
            </div>
            <button 
              disabled={isLoading}
              type="button" 
              data-qa="btnSignupSubmit" 
              className="btn_Submit"  
              onClick={handleTextboxInput}
            >
              <span id="btnsignin">Continue</span>
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
                  Sign in with Google
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
                  Sign in with Apple
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
                  Sign in with WWPass
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
              style={{ color: "rgb(109, 117, 141)",display:"none" }}
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
      title={"Sign In"}
      onCancel={onCancel}
      showConfirm={false}
      showCancel={true}
      cancelBtnText="Close"
      cancelBtnBsStyle="btn btn-lg btn-primary"
      //dependencies={[this.state.firstName, this.state.lastName]}
    >
      {(renderProps) => (<>
        <div className="signin-options-container">

          <div 
            onClick={
              () => {
                window.location.assign(
                  frontendConfigApp.app_url + "auth/login?email=" + encodeURIComponent(dataForm.email)
                );
              }
            } 
            className="signin-box first-box"
          >
            <div className="signin-box-image">
              <img src={sharepass} />
            </div>
            <h3>Standard Account</h3>
          </div>
            
          <div 
            onClick={
              () => {
                window.location.assign(
                  enterprise.app_url
                );
              }
            } 
            className="signin-box"
          >
            <div className="signin-box-image">
              <img src={enterprise.logo} />
            </div>
            <h3>Enterprise Account</h3>
          </div>
        </div>
      </>)}
    </SweetAlert>}
  </>)
}

export default Login