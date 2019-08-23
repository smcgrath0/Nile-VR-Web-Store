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
          <img className='mr-2' src={this.state.product.image} style={{ width: '300px' }}></img>
          <div>
            <div>{this.state.product.name}</div>
            <div>${this.state.product.price}</div>
            <div><strong>Short Description: </strong>{this.state.product.shortDescription}</div>
          </div>
        </div>

        <div><strong>Long Description: </strong>{this.state.product.longDescription}</div>
      </div>
    );
  }
}
