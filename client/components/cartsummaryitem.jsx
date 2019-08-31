import React from 'react';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.checkImage = this.checkImage.bind(this);
  }
  checkImage() {
    if (this.props.item.image) {
      return this.props.item.image;
    }
    if (this.props.item.images[0]) {
      return this.props.item.images[0];
    }
  }
  render() {
    return (
      <div className="bg-light mt-3 text-dark d-flex rounded" style={{ height: '25%', width: '100%' }}>
        <img src={this.checkImage()} className="rounded" style={{ height: '150px', width: '150px' }}></img>
        <div>
          <h2>{this.props.item.name}</h2>
          <div className="text-secondary">${(this.props.item.price / 100).toFixed(2)} x {this.props.item.count}</div>
          <div>{this.props.item.shortDes}</div>
        </div>
        <div className="text-secondary ml-1" style={{ alignSelf: 'flex-end' }}>id # {this.props.item.id}</div>
      </div>
    );
  }
}
