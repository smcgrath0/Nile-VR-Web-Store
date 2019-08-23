import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="bg-light mt-3" style={{ height: '25%', width: '100%' }}>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.id}</div>
        <div>{this.props}</div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
