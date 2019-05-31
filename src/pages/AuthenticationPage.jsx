import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LoginForm from '../components/authentication/LoginForm';
import SignupForm from '../components/authentication/SignupForm';

class AuthenticationPage extends Component {
  state = {};

  render() {
    const loginStatus =
      this.props.location.pathname === '/login' ? 'active' : '';
    const signupStatus =
      this.props.location.pathname === '/signup' ? 'active' : '';
    return (
      <div>
        <Header />

        <div className="sign-container">
          <div className="sign-toggle row" id="sign-toggle">
            <Link to="/login" className={`bar in col-sm-6 ${loginStatus}`}>
              Log in
            </Link>
            <Link to="/signup" className={`bar up col-sm-6 ${signupStatus}`}>
              Register
            </Link>
          </div>
          <div className="form-area">
            <LoginForm loginStatus={loginStatus} history={this.props.history} />

            <SignupForm
              signupStatus={signupStatus}
              history={this.props.history}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

AuthenticationPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default AuthenticationPage;
