import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isClicked: false
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
      <div className="d-inline-flex flex-wrap">
        {this.state.products.map((person, index) => {
          return (
            <div key={index} className="col-md-4 round" onClick={() => {
              this.props.setView('details', { id: person.id });
            }}>
              <ProductListItem key={person.id} image={person.images[0]} name={person.name} price={person.price} short={person.shortDes} />
            </div>
          );
        })
        }
      </div>
    );
  }
}
