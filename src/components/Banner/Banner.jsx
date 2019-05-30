import React from 'react';
import '../../App.css';

export const Banner = () => {
  return (
    <div
      className="main-banner with-back-img"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/musonant/image/upload/v1559234550/landing-banner_mikwp9.jpg')"
      }}
    >
      <div className="overlay" />
      <div className="content">
        <h1 className="title">The Meetup Questioner</h1>
        <p className="description">
          Crowd-source questions for a meetup. Questioner helps the meetup
          organizer prioritize questions to be answered. Other users can vote on
          asked questions and they bubble to the top or bottom of the log.
        </p>
      </div>
    </div>
  );
};

export default Banner;
