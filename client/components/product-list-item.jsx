import React from 'react';
// import ProductDetails from './product-details';
export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="container bg-secondary pt-3 mr-2 mt-4" style={{ width: '250px' }}>
        <img src={this.props.image} style={{ height: '200px', width: '225px' }}></img>
        <div className="bg-danger p-2 mt-2 mb-2 mr-2" style={{ width: '225px' }}>
          <h3>{this.props.name}</h3>
          <h5>$ {this.props.price}</h5>
          <p>{this.props.short}</p>
        </div>
      </div>
    );
  }
}
