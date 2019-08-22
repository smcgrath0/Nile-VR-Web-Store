import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    // console.log(this.props.view.params.id);
    fetch('/api/products.php?id=' + this.props.view.params.id)
      .then(response => response.json())
      .then(product => {
        // console.log(product);
        this.setState({ product });
      });

  }
  render() {
    if (this.state.product === null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div>{this.state.product.name}</div>
        <div>{this.state.product.price}</div>
        <div>{this.state.product.image}</div>
        <div>{this.state.product.shortDescription}</div>
        <div>{this.state.product.longDescription}</div>
      </div>
    );
  }
}
