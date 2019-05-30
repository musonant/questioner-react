import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="top">
          <div className="first-link">
            <Link to="" href="meetups.html">
              All Meetups
            </Link>
          </div>
          <div className="links row">
            <div className="flex-1">
              <div className="content">
                <ul>
                  <li className="key">Your Account</li>
                  <li>
                    <Link to="" href="account.html#account-info">
                      Account Information
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="account.html#account-log">
                      Account Log
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="account.html#schedulled-meetups">
                      Schedulled Meetups
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="content">
                <ul>
                  <li className="key">Tags</li>
                  <li>
                    <Link to="" href="">
                      javascript
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="">
                      Node
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="">
                      ES6
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="content">
                <ul>
                  <li className="key">Meetup</li>
                  <li>
                    <Link to="" href="create-meetup.html">
                      Create Meetup
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="">
                      View all meetups
                    </Link>
                  </li>
                  <li>
                    <Link to="" href="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Questioner 2018 - Developed by Emmanuel Osuh</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
