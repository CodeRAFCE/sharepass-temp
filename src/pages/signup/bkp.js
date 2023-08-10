import classnames from "classnames";
import { useCallback, useEffect, useState } from "react";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { signUp } from "../../services/auth";
import {
  validateEmail,
  validateNameLastname,
  validatePassword,
} from "../../utils";
import { terms } from "../../variables/terms";
import { CustomModal } from "../components/CustomModal";

const Register = () => {
  useEffect(() => {
    document.body.classList.toggle("register-page");
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  });

  /* Handle  focus & blur of inputs*/
  const [state, setState] = useState({});

  /* Handle rutes */
  const history = useHistory();
  const handleSignIn = (e) => {
    e.preventDefault();
    history.push("/auth/login");
  };

  /* Handle modal */
  const [modalClassic, setModalClassic] = useState(false);
  const toggleModalClassic = () => {
    setModalClassic(!modalClassic);
  };

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

  const [check, setCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [alert, setAlert] = useState();

  /**
   * reCaptcha code
   */
  const { executeRecaptcha } = useGoogleReCaptcha();

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

  const handleSubmit = async () => {
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
        ...state,
        name: "",
        lastname: "",
        email: "",
        password: "",
      });

      setAlert(
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
      );
    }
  };

  return (
    <>
      {alert}
      <div className="content">
        <Container>
          <Row className={`${modalClassic ? "register-dark" : ""} `}>
            <Col className="ml-auto mr-auto" md="7">
              <Card className="card-register card-white">
                <CardHeader
                  className={`card-header-sp ${
                    localStorage.getItem("isMobile")
                      ? "card-header-sp-mobile"
                      : ""
                  }`}
                >
                  <img
                    alt="..."
                    src={require("../../assets/img/sp.png").default}
                  />
                </CardHeader>
                <CardBody className="pBotttom0">
                  <Form className="form">
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.nameFocus,
                        "has-danger":
                          dataForm.nameError || dataForm.nameInvalid,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="First name"
                        type="text"
                        onFocus={(e) => setState({ ...state, nameFocus: true })}
                        onBlur={(e) => setState({ ...state, nameFocus: false })}
                        value={dataForm.name}
                        onChange={(e) => validateInput(e)}
                        id="firstName"
                      />
                    </InputGroup>
                    {dataForm.nameError && <p>This field is required</p>}
                    {!dataForm.nameError && dataForm.nameInvalid && (
                      <p>50 characters allowed</p>
                    )}
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.lastNameFocus,
                        "has-danger":
                          dataForm.lastNameError || dataForm.lastNameInvalid,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Last name"
                        type="text"
                        onFocus={() =>
                          setState({ ...state, lastNameFocus: true })
                        }
                        onBlur={() =>
                          setState({ ...state, lastNameFocus: false })
                        }
                        value={dataForm.lastname}
                        onChange={(e) => validateInput(e)}
                        id="lastName"
                      />
                    </InputGroup>
                    {dataForm.lastNameError && <p>This field is required</p>}
                    {!dataForm.lastNameError && dataForm.lastNameInvalid && (
                      <p>50 characters allowed</p>
                    )}
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.emailFocus,
                        "has-danger":
                          dataForm.emailError || dataForm.emailInvalid,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={(e) =>
                          setState({ ...state, emailFocus: true })
                        }
                        onBlur={(e) =>
                          setState({ ...state, emailFocus: false })
                        }
                        value={dataForm.email}
                        onChange={(e) => validateInput(e)}
                        id="email"
                      />
                    </InputGroup>
                    {dataForm.emailError && <p>This field is required</p>}
                    {!dataForm.emailError && dataForm.emailInvalid && (
                      <p>Please, enter a valid email.</p>
                    )}
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.passFocus,
                        "has-danger": dataForm.passwordError,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={(e) => setState({ ...state, passFocus: true })}
                        onBlur={(e) => setState({ ...state, passFocus: false })}
                        value={dataForm.password}
                        onChange={(e) => validateInput(e)}
                        id="password"
                      />
                    </InputGroup>
                    {dataForm.passwordError && <p>This field is required</p>}
                    {!dataForm.passwordError && dataForm.passwordInvalid && (
                      <div>
                        <p className="bottom10">
                          Please, enter a valid password.
                        </p>
                        <p className="bottom10 font-primary">
                          Minimum 8 characters, must contain 1 number, 1
                          lowercase, 1 uppercase and 1 symbol (!@#$&*).
                        </p>
                      </div>
                    )}
                    {!localStorage.getItem("isMobile") && (
                      <FormGroup className="center-sp">
                        <Label>
                          <Input
                            type="checkbox"
                            value={check}
                            onChange={() => setCheck(!check)}
                          />
                          <span className="form-check-sign" />I agree to the{" "}
                          <a
                            className="terms-conditions"
                            href="https://sharepass.com/terms-of-service"
                            target="_blank"
                            rel="noreferrer"
                          >
                            terms of service
                          </a>
                          .
                        </Label>
                      </FormGroup>
                    )}
                    <FormGroup className="center-sp">
                      <Button
                        className={`btn-round ${
                          isLoading ||
                          dataForm.disabled ||
                          dataForm.nameError ||
                          dataForm.lastNameError ||
                          dataForm.emailError ||
                          dataForm.emailInvalid ||
                          dataForm.passwordError ||
                          dataForm.passwordInvalid ||
                          !check
                            ? "disabled"
                            : ""
                        }`}
                        color="primary"
                        //onClick={(e) => handleSubmit(e)}
                        size="lg"
                        type="button"
                        onClick={handleSubmit}
                      >
                        SIGN UP
                      </Button>
                    </FormGroup>
                    {error && (
                      <p className="align-center font-danger m0 top10">
                        {errorMessage}
                      </p>
                    )}
                    {successMessage && successMessage.length >= 0 && (
                      <p className="info-p">{successMessage}</p>
                    )}
                  </Form>
                </CardBody>
                <CardFooter className="top0">
                  <hr />
                  <div className="center-sp">
                    <span className="form-check-sign" />
                    Already have an account?{" "}
                    <a
                      className="link footer-link left4"
                      href="/auth/login"
                      onClick={(e) => handleSignIn(e)}
                    >
                      Sign in
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <CustomModal
            modalClassic={modalClassic}
            toggleModalClassic={toggleModalClassic}
            textBody={terms}
          />
        </Container>
      </div>
    </>
  );
};

export default Register;
