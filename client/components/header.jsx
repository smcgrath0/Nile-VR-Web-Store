import React from 'react';

export default class Header extends React.Component {
  render() {
    var cartItemCount;
    if (!(this.props.cart)) {
      cartItemCount = 0;
    } else {
      cartItemCount = this.props.cart.length;
    }
    return (
      <div className="row justify-content-between">
        <div className="col-4">
          <h1 className="ml-5" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>Wicked Sales</h1>
        </div>
        <div className="bg-danger col-1 d-flex justify-content-center align-contents-center position-static" >
          <div className="fa fa-5x fa-shopping-cart" style={{ height: '100px' }}></div>
          <div className="text-light position-absolute mt-2 ml-1" style={{ fontSize: '28px' }}>{cartItemCount}</div>
        </div>
      </div>
    );
  }
}
