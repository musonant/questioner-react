import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';

import './App.css';

class App extends Component {
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

          <div className="col-sm-12 col-md-6 col-lg-4 container">
            <div className="meetup-card">
              <aside className="display">
                <a href="meetup.html" className="">
                  <div
                    className="with-back-img meetup-display-img"
                    style={{
                      backgroundColor: '#b0e6ce',
                      backgroundImage:
                        "url('https://placeimg.com/640/480/tech/sepia')"
                    }}
                  />
                  <div className="cta-btn">
                    <span className="count">20</span>
                    <span>Questions</span>
                  </div>
                </a>
              </aside>
              <main className="info">
                <div className="date-thumbnail">
                  <p className="month">JAN</p>
                  <p className="day grey-color">30</p>
                </div>
                <div className="details row flex-1">
                  <h3 className="title">
                    <a href="meetup.html">
                      The Musonant Poetry Conference, 2019
                    </a>
                  </h3>
                  <div className="more grey-color">
                    <p className="detail-text" name="date">
                      Sat, Jul 20, 10:00am
                    </p>
                    <p className="detail-text" name="venue">
                      Plot 2&3 Water Corporation Road Victoria Island
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 container">
            <div className="meetup-card">
              <aside className="display">
                <a href="meetup.html" className="">
                  <div
                    className="with-back-img meetup-display-img"
                    style={{
                      backgroundColor: '#b0e6ce',
                      backgroundImage:
                        "url('https://placeimg.com/640/480/arch/sepia')"
                    }}
                  />
                  <div className="cta-btn">
                    <span className="count">20</span>
                    <span>Questions</span>
                  </div>
                </a>
              </aside>
              <main className="info">
                <div className="date-thumbnail">
                  <p className="month">JAN</p>
                  <p className="day grey-color">30</p>
                </div>
                <div className="details row flex-1">
                  <h3 className="title">
                    <a href="meetup.html">
                      The Musonant Poetry Conference, 2019
                    </a>
                  </h3>
                  <div className="more grey-color">
                    <p className="detail-text" name="date">
                      Sat, Jul 20, 10:00am
                    </p>
                    <p className="detail-text" name="venue">
                      Plot 2&3 Water Corporation Road Victoria Island
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
