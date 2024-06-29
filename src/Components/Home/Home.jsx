import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ bannerImage, bannerHeading, bannerSubHeading }) => {
  return (
    <div className="hero">
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="banner-content">
          <div className="banner-heading">
            <p>{bannerHeading}</p>
            <h3>{bannerSubHeading}</h3>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
      <div className="lorem">
        {/* Sample text content */}
      </div>
    </div>
  );
};

Home.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  bannerHeading: PropTypes.string.isRequired,
  bannerSubHeading: PropTypes.string.isRequired,
};

export default Home;
