import React from 'react';
import AppContext from '../context.js';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.checkImage = this.checkImage.bind(this);
  }
  checkImage() {
    if (this.props.item.image) {
      return this.props.item.image;
    }
    if (this.props.item.images) {
      return this.props.item.images;
    }
  }
  render() {
    return (
      <div className="bg-light mt-3 text-dark d-flex rounded cartItem" style={{ height: '25%' }}>
        <div className="cartImageContainer">
          <div className="rounded cartImage" style={{ backgroundImage: 'url(' + this.checkImage() + ')' }}>

          </div>
        </div>

        {/* <img src={this.checkImage()} className="rounded my-auto" style={{ height: '150px', width: '150px' }}></img> */}
        <div>
          <h2 className="cartName">{this.props.item.name}</h2>
          <div className="d-flex">
            <div className="text-secondary cartPrice">${(this.props.item.price / 100).toFixed(2)} x {this.props.item.count}</div>
            <div><i className="ml-2 fas fa-plus-square addAndDeleteItem" onClick={() => {
              this.context.addToCart(this.props.item.id);
            }}></i></div>
            <div><i className="ml-2 fas fa-minus-square addAndDeleteItem" onClick={() => {
              this.props.displayDelete(this.props.item.id, this.props.item.name);
            }}></i></div>
          </div>

          <div className="cartDes">{this.props.item.shortdes}</div>
        </div>

      </div>

    );
  }
}
CartSummaryItem.contextType = AppContext;
