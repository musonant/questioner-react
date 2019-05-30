import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {};

  render() {
    return (
      <header className="main-header row">
        <Link to="/">
          <div className="header-brand">
            <h3 className="title">Questioner</h3>
          </div>
        </Link>
        <ul className="horizontal-nav nav-links">
          <Link className="item" to="/login">
            Login
          </Link>
          <Link className="item" to="/signup">
            Sign Up
          </Link>
        </ul>
        <div className="menu-toggle">
          <i className="menu-btn fa fa-bars" />
          <div className="menu-content">
            <ul className="menu-list">
              <a href="meetups.html">
                <li className="menu-option">Browse Meetups</li>
              </a>
              <a href="create-meetup.html">
                <li className="menu-option">Create Meetup</li>
              </a>
              <div className="menu-toggle with-arrow">
                <li className="menu-btn menu-option">
                  Account Settings
                  <i className="fa fa-caret-down menu-arrow" />
                </li>
                <div className="menu-content">
                  <ul className="menu-list">
                    <a href="account.html#account-info">
                      <li className="menu-option">Account Information</li>
                    </a>
                    <a href="account.html#account-log">
                      <li className="menu-option">Account Log</li>
                    </a>
                    <a href="account.html#schedulled-meetups">
                      <li className="menu-option">Schedulled Meetups</li>
                    </a>
                    <a href="login.html">
                      <li className="menu-option">Logout</li>
                    </a>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
