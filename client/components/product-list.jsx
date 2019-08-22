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
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({ products });
      });
  }
  render() {
    return (
      <div className="d-flex flex-wrap">
        {this.state.products.map((person, index) => {
          return (
            <ProductListItem className="containers" key={person.id} image={person.image} name={person.name} price={person.price} short={person.shortDescription} />
          );
        })

        }
      </div>
    );
  }
}
