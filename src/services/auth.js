import {
    URL_SIGN_IN,
    URL_SIGN_UP,
  } from "../constants/urls";
  
  
  export const signUp = async (body) => {
    const res = await fetch(URL_SIGN_UP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log("Error when trying to create a new user", error);
        return error;
      });
  
    if (!res.statusCode && res.status !== "Success") {
      res.error = true;
      res.errorMessage = res.message? res.message : "There was an error when trying to create your account, try again later.";
      res.successMessage = "";
    } else if (res.status === "Success") {
      res.error = false;
      res.errorMessage = "";
      res.successMessage =
        "You have been registered successfully, please validate your email account.";
    }
  
    return res;
  };
  
  /*export const fetchLogin = async (body) => {
    
    const headers = {
      "Content-Type": "application/json",
    };
  
    if(localStorage.getItem("isMobile")){
      headers.mobile = true;
    }
  
    let res = await fetch(URL_SIGN_IN, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => res)
      .catch((error) => {
        console.log("Error when trying to Sign In", error);
        return error;
      });
  
    if (res.status === "Success") {
      if (res.details.ChallengeName) {
        console.log(res.details.ChallengeParameters);
        res.isLogged = true;
        res.token = null;
        res.expiresIn = null;
        res.idToken = null;
        res.refreshToken = null;
        res.session = res.details.Session;
        res.ChallengeName = res.details.ChallengeName;
        res.ChallengeParameters = res.details.ChallengeParameters;
        res.friendlyDevice =
          res.details.ChallengeParameters &&
          res.details.ChallengeParameters["FRIENDLY_DEVICE_NAME"]
            ? res.details.ChallengeParameters["FRIENDLY_DEVICE_NAME"]
            : null;
      } else {
        res.isLogged = true;
        res.token = res.details.AuthenticationResult.AccessToken
          ? res.details.AuthenticationResult.AccessToken
          : null;
        res.expiresIn = res.details.AuthenticationResult.ExpiresIn;
        res.idToken = res.details.AuthenticationResult.IdToken;
        res.refreshToken = res.details.AuthenticationResult.RefreshToken;
        res.session = null;
        res.friendlyDevice = null;
        res.ChallengeName = null;
        res.ChallengeParameters = null;
      }
    } else {
      res.isLogged = false;
      res.token = null;
      res.expiresIn = null;
      res.idToken = null;
      res.refreshToken = null;
      res.friendlyDevice = null;
      res.ChallengeName = null;
      res.ChallengeParameters = null;
    }
  
    if(res.details && res.details.sessionToken){
      res.sessionToken = res.details.sessionToken;
    }
  
    return res;
  };*/