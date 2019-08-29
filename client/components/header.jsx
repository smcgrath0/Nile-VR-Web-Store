import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row justify-content-between">
        <div className="col-4 row" style={{ alignItems: 'center' }}>

          <div className="ml-5 mt-4" style={{ backgroundImage: 'url(https://www.eurotopics.net/cache/images/2/148482-medium_logo-teaser300.png?E1B87)', width: '50px', height: '50px', backgroundSize: 'contain' }}></div>
          <h1 className="mt-5" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>ile</h1>
        </div>
        <div className=" col-1 d-flex justify-content-center align-contents-center position-static" >
          <div className="fa fa-5x fa-shopping-cart mt-1" style={{ height: '100px' }} onClick={ () => {
            this.props.setView('cart', { });
          }}></div>
          <div className="text-light position-absolute mt-4 ml-2" style={{ fontSize: '16px' }}>items: {this.props.totalitems}</div>
        </div>
      </div>
    );
  }
}
