import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between mt-5" style={{ backgroundColor: '#1A5D81', height: '100px' }}>
        {/* <div className="col-4 row titleani" style={{ alignItems: 'center' }} onClick={() => {
          this.props.setView('catalog', {});
        }}>
          <div className="ml-5 mt-4" style={{ backgroundImage: 'url(https://www.eurotopics.net/cache/images/2/148482-medium_logo-teaser300.png?E1B87)', width: '50px', height: '50px', backgroundSize: 'contain' }}></div>
          <h1 className="mt-5" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>ile</h1>
        </div>
        <div className="col-1 mr-4 d-flex justify-content-center align-contents-center position-static cartani" onClick={() => {
          this.props.setView('cart', {});
        }}>
          <div className="fa fa-5x fa-shopping-cart mt-2" style={{ height: '100px' }}></div>
          <div className="text-light position-absolute mt-4 ml-2" style={{ fontSize: '20px' }}>{this.props.totalitems}</div>
        </div> */}
        {/* <div className="about">
          <h3>About</h3>
          <h5>Who made it?</h5>
          <h5></h5>
          <h5></h5>
        </div> */}
      </div>
    );
  }
}
