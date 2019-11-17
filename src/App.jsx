import 'semantic-ui-css/semantic.min.css';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import MeetupCard from './components/MeetupCard/MeetupCard';
import { getMeetups } from './store/modules/meetup';

class App extends Component {
  componentDidMount() {
    this.fetchTrendingMeetups();
  }

  fetchTrendingMeetups = async () => {
    const data = await this.props.getMeetups();
  };

  render() {
    return (
      <div className="App page-container" id="landing-page">
        <Header />
        <Banner />

        <div className="row all-meetups">
          <label
            className="with-underline center middle"
            style={{ fontSize: '22px', marginTop: '20px' }}
          >
            Trending Meetups
          </label>

          {this.props.meetups.map(meetup => (
            <MeetupCard key={meetup.id} meetupDetails={meetup} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
});

export default connect(mapStateToProps, { getMeetups })(App);
