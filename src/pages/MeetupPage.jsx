import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClose } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class MeetupPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <div id="meetup-heading">
          <div className="meetup-banner row">
            <div className="col-sm-12 col-lg-8 info">
              <div className="title">
                <label>January 01, 2018</label>
                <h1>Javascript Developers Worldwide Hangout, 2019</h1>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 attend">
              <div className="actions">
                <label>Are you attending?</label>
                <div className="row" style={{ justifyContent: 'center' }}>
                  <span className="col-sm-6" style={{ paddingRight: '5px' }}>
                    <button className="fa fa-check action-btn" />
                  </span>
                  <span className="col-sm-6" style={{ paddingLeft: '5px' }}>
                    <button className="action-btn">
                      <FontAwesomeIcon icon="spinner" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <label style={{ marginTop: '20px', color: '#7aadad' }}>
              25 questions
            </label>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups
});

export default connect(
  mapStateToProps,
  {}
)(MeetupPage);
