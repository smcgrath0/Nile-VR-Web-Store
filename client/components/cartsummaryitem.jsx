import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="bg-light mt-3 text-dark d-flex" style={{ height: '25%', width: '100%' }}>
        <img src={this.props.item.image} style={{ height: '150px', width: '150px' }}></img>
        <div>
          <h2>{this.props.item.name}</h2>
          <div className="text-secondary">${(this.props.item.price / 100).toFixed(2)}</div>
          <div>x {this.props.item.count}</div>
          <div>{this.props.item.shortDescription}</div>
        </div>
        <div className="text-secondary ml-1" style={{ alignSelf: 'flex-end' }}>id # {this.props.item.id}</div>
      </div>
    );
  }
}
