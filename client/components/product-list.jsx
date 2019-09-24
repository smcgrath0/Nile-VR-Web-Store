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
    const init = {
      // body: JSON.stringify({ 'type': 'home' })
    };
    fetch('/api/products.php', init)
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({ products });
      });
  }
  render() {
    return (
      <div className="d-inline-flex flex-wrap justify-content-center" style={{ backgroundImage: 'url(https://background-tiles.com/overview/white/patterns/large/1018.png)' }}>
        {this.state.products.map((person, index) => {
          return (
            <div key={index} className="round" onClick={() => {
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
