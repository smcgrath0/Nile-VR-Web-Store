import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }
  getProducts() {
    fetch.get('/api/products.php')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        var products = JSON.stringify(myJson);
        this.setState({ products });
      });
  }
  render() {
    return (
      <div>
        <ProductListItem />
      </div>
    );
  }
}
