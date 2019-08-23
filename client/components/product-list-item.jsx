import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="container bg-secondary pt-3 mr-2 mt-4 pb-3" style={{ width: '250px' }}>
        <img src={this.props.image} style={{ height: '200px', width: '225px' }}></img>
        <div className="bg-light p-2 mt-2 mr-2" style={{ width: '225px' }}>
          <h3>{this.props.name}</h3>
          <h5>${(this.props.price / 100).toFixed(2)}</h5>
          <p>{this.props.short}</p>
        </div>
      </div>
    );
  }
}
