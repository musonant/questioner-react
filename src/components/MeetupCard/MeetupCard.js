import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faClock,
  faMapMarker
} from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';

dom.watch();

export const MeetupCard = ({ meetupDetails }) => {
  let {
    description,
    happeningOn: date,
    images,
    topic = 'nothing',
    location,
    questions,
    id
  } = meetupDetails;

  topic = topic || 'Untitled';
  const imageUrl = images ? images[0] : process.env.DEFAULT_MEETUP_IMAGE;

  let monthShort = '',
    dayShort = '',
    day = '',
    time = '';
  if (date) {
    time = moment(date).format('HH:mm A');
    day = moment(date).format('dddd, Do MMM YYYY');
    monthShort = moment(date).format('MMM');
    dayShort = moment(date).format('DD');
  }

  const linkToMeetup = `/meetup/${id}`;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 container">
      <div className="meetup-card">
        <aside className="display">
          <Link to={linkToMeetup} className="">
            <div
              className="with-back-img meetup-display-img"
              style={{
                backgroundColor: '#b0e6ce',
                backgroundImage: `url(${imageUrl})`
              }}
            />
            <div className="cta-btn">
              <span className="count">
                {questions.length}
                {questions.length > 1 ? ' Questions' : ' Question'}
              </span>
            </div>
          </Link>
        </aside>
        <main className="info">
          <div className="date-thumbnail">
            <p className="month">{monthShort}</p>
            <p className="day grey-color">{dayShort}</p>
          </div>
          <div className="details row flex-1">
            <h3 className="title">
              <Link to={linkToMeetup}>{topic}</Link>
            </h3>
            <div className="more grey-color">
              {date && (
                <span>
                  <p className="detail-text" name="date">
                    <FontAwesomeIcon className="icon" icon={faCalendar} /> {day}
                  </p>
                  <p className="detail-text" name="time">
                    <FontAwesomeIcon className="icon" icon={faClock} /> {time}
                  </p>
                </span>
              )}
              {location && (
                <p className="detail-text" name="time">
                  <FontAwesomeIcon className="icon" icon={faMapMarker} />{' '}
                  {location}
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MeetupCard;
