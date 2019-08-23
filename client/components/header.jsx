import React from 'react';

export default class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    var cartItemCount;
    if (!(this.props.cart)) {
      cartItemCount = 0;
    } else {
      cartItemCount = this.props.cart.length - 1;
    }
    return (
      <div className="row justify-content-between">
        <div className="col-4">
          <h1 className="ml-5" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>Wicked Sales</h1>
        </div>
        <div className="bg-danger col-1 d-flex justify-content-center align-contents-center" >
          <div className="fa fa-5x fa-shopping-cart text-center" style={{ height: '100px' }}>{cartItemCount}</div>
        </div>
      </div>
    );
  }
}
