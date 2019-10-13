import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="mt-5 pt-4" style={{ backgroundColor: '#1A5D81' }}>
        <div className="d-flex justify-content-around text-light mb-4">
          <div className="about">
            <h3>About Us</h3>
            <h5>Who made it?</h5>
            <h5></h5>
            <h5></h5>
          </div>
          <div className="social">
            <h3>Contact</h3>
            <div className="d-flex justify-content-around">
              <div><i className="fab fa-linkedin-in"></i></div>
              <div><i className="fas fa-chalkboard"></i></div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center pb-3">
          <p className="m-0">&copy; 2019 Shane Mcgrath</p>
        </div>
      </div>
    );
  }
}
