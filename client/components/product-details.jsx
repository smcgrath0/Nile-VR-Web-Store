import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.view.params.id)
      .then(response => response.json())
      .then(product => {
        product.count = 1;
        this.setState({ product });
      });
  }
  render() {
    if (this.state.product === null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container bg-dark mt-5 p-2 text-light">
        <button className="btn bg-primary mb-2" onClick={ () => {
          this.props.setView('catalog', { });
        }}>Go back to Catalog</button>

        <div className="d-flex">
          <img className='mr-2' src={this.state.product[0].images} style={{ width: '300px' }}></img>
          <div>
            <div>{this.state.product[0].name}</div>
            <div>${this.state.product[0].price / 100}</div>
            <div><strong>Short Description: </strong>{this.state.product[0].shortdes}</div>
            <button className="btn btn-lg bg-light text-dark m-5 pr-5 pl-5" onClick={() => this.props.addtocart(this.state.product)}>Add to Cart</button>
          </div>
        </div>

        <div><strong>Long Description: </strong>{this.state.product[0].longdes}</div>
      </div>
    );
  }
}
