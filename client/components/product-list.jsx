import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isClicked: false,
      images: []
    };
    this.images = [];
    this.getProducts = this.getProducts.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.getProducts(nextProps);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts(nextProps) {
    var type = '';
    if (this.props.type === 'catalog') {
      type = 'catalog';
    }
    if (nextProps) {
      type = nextProps.view.params.type;
    }
    fetch('/api/products.php?type=' + type)
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.images = [];
        this.setState({ products });
      });
  }
  render() {
    return (
      <div className="d-inline-flex flex-wrap justify-content-center pb-2" style={{ backgroundImage: 'url(https://background-tiles.com/overview/white/patterns/large/1018.png)' }}>
        {this.state.products.map((person, index) => {
          if (this.images.length < this.state.products.length) {
            this.images.push(person.images[0]);
          }
          return (
            <div key={index} className="round" onClick={() => {
              this.props.setView('details', { id: person.id });
            }}>
              <ProductListItem key={person.id} image={this.images[index]} name={person.name} price={person.price} short={person.shortDes} />
            </div>
          );
        })
        }
      </div>
    );
  }
}
