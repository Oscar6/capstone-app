import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "mule-capstone.auth0.com",
    clientID: "5gKT0lPG7T0wMZvqk19GbQQPTx0LrQKD",
    redirectUri: "localhost:3000/userdashboard",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
