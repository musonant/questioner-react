import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { isUserLoggedIn } from '../../utils/helpers';
import { loginUser } from '../../store/modules/auth';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: isUserLoggedIn(),
  };

  validator = new SimpleReactValidator({
    element: message => <div>{message}</div>,
  });

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formSubmitHandler = async e => {
    e.preventDefault();
    this.validator.showMessages();
    this.setState({
      ...this.state,
    });

    if (!this.validator.allValid()) {
      return false;
    }

    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    await this.props.loginUser(credentials);

    if (this.props.auth.currentUser.id) {
      // reload the page
      this.setState({
        isLoggedIn: true,
      });
    }
  };

  render() {
    const { isLoggedIn } = this.state;
    const { loginStatus } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <form
        onSubmit={this.formSubmitHandler}
        id="signin-form"
        className={`form ${loginStatus}`}
      >
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.onChange}
        />
        <div className="err-msg">
          {this.validator.message('email', this.state.email, 'required|email')}
          {this.validator.message(
            'password',
            this.state.password,
            'required|min:6|alpha_num'
          )}
          {this.props.errorMessage !== '' && (
            <span>{this.props.errorMessage}</span>
          )}
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginStatus: PropTypes.string.isRequired,
  loginUser: PropTypes.func,
  errorMessage: PropTypes.string,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
