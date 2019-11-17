import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

import { isUserLoggedIn } from '../../utils/helpers';
import MainUserIcon from '../MainUserIcon';

class Header extends Component {
  state = {
    isLoggedIn: isUserLoggedIn(),
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <header className="main-header row">
        <Link to="/">
          <div className="header-brand">
            <h3 className="title">Questioner</h3>
          </div>
        </Link>

        {!isLoggedIn &&
          location.pathname !== '/login' &&
          location.pathname !== '/signup' && (
            <ul className="horizontal-nav nav-links">
              <Link className="item" to="/login">
                Login
              </Link>
              <Link className="item" to="/signup">
                Sign Up
              </Link>
            </ul>
          )}

        {isLoggedIn && (
          <Dropdown
            pointing="top right"
            trigger={<MainUserIcon />}
            icon={null}
            onChange={this.selectMenu}
          >
            <Dropdown.Menu>
              <Link to="/" className="item">
                <Dropdown.Item text="My Meetups" />
              </Link>
              <Link to="/" className="item">
                <Dropdown.Item text="Create New Meetup" />
              </Link>
              <Link to="/account" className="item">
                <Dropdown.Item text="Account Settings" />
              </Link>
              <Link to="/logout" className="item">
                <Dropdown.Item text="Logout" />
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </header>
    );
  }
}

export default Header;
