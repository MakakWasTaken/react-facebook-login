import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import FacebookLogin from "../src/facebook";
import FacebookLoginWithButton from "../src/facebook-with-button";

const responseFacebook = (response) => {
  console.log(response);
};

const history = createBrowserHistory();

class Base extends Component {
  render() {
    return (
      <div>
        <Link to="/dummy">Route to dummy page</Link>

        <div>
          <p>Facebook login with default button and styling</p>
          <FacebookLoginWithButton
            appId="1088597931155576"
            autoLoad
            callback={responseFacebook}
            icon="fa-facebook"
          />
        </div>

        <div>
          <p>
            Facebook login with render prop (and no styling provided out the
            box)
          </p>
          <FacebookLogin
            appId="1088597931155576"
            autoLoad
            callback={responseFacebook}
            render={(renderProps) => (
              <button onClick={renderProps.onClick}>
                This is my custom FB button
              </button>
            )}
          />
        </div>
      </div>
    );
  }
}

class Dummy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>
          This is just a dummy page to test the button
          <br />
          <a href="https://github.com/keppelen/react-facebook-login/pull/76#issuecomment-262098946">
            survives back and forth routing
          </a>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Base} />
    <Route path="/dummy" component={Dummy} />
  </Router>,
  document.getElementById("demo")
);
