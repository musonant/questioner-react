import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { isUserLoggedIn } from '../../utils/helpers';
import { signupUser } from '../../store/modules/auth';

class SignupForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    loggedInStatus: isUserLoggedIn()
  };

  validator = new SimpleReactValidator({
    element: message => <div>{message}</div>,
    messages: {
      in: "The passwords don't match."
    }
  });

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formSubmitHandler = async e => {
    e.preventDefault();
    this.validator.showMessages();
    this.setState({
      ...this.state
    });

    if (!this.validator.allValid()) {
      return false;
    }

    const credentials = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    };

    await this.props.signupUser(credentials);

    if (this.props.auth.currentUser.id) {
      // reload the page
      this.setState({
        loggedInStatus: true
      });
    }
  };

  render() {
    const { loggedInStatus } = this.state;
    if (loggedInStatus) {
      return <Redirect to="/" />;
    }

    const { signupStatus } = this.props;
    return (
      <form
        onSubmit={this.formSubmitHandler}
        id="signup-form"
        className={`form ${signupStatus}`}
      >
        <input
          type="text"
          placeholder="first name"
          name="firstname"
          value={this.state.firstname}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="last name"
          name="lastname"
          value={this.state.lastname}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.onChange}
        />

        <div className="err-msg">
          {this.validator.message(
            'firstname',
            this.state.firstname,
            'alpha_space'
          )}
          {this.validator.message(
            'lastname',
            this.state.lastname,
            'alpha_space'
          )}
          {this.validator.message('email', this.state.email, 'required|email')}
          {this.validator.message(
            'password',
            this.state.password,
            'required|min:6|alpha_num'
          )}
          {this.validator.message(
            'confirmPassword',
            this.state.confirmPassword,
            `required|in:${this.state.password}`
          )}
          {this.props.errorMessage !== '' && (
            <span>{this.props.errorMessage}</span>
          )}
        </div>

        <input type="submit" value="Register" />
      </form>
    );
  }
}

SignupForm.propTypes = {
  signupStatus: PropTypes.string.isRequired,
  signupUser: PropTypes.func,
  errorMessage: PropTypes.string,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps, { signupUser })(SignupForm);
