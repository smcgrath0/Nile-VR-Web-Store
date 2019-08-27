import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row justify-content-between">
        <div className="col-4">
          <h1 className="ml-5 mt-4" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>Wicked Sales</h1>
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
