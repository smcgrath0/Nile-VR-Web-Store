import React from 'react';
import DetailsCarousel from './details_carousel';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      modal: 'none'
    };
  }
  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.view.params.id)
      .then(response => response.json())
      .then(product => {
        product[0].count = 1;
        this.setState({ product });
      });
  }
  render() {
    if (this.state.product === null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container mt-5 p-2 rounded" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="d-flex">
          <div className="mr-3 mb-2" style={{ width: '300px' }}>
            <DetailsCarousel images={this.state.product[0].images}/>
          </div>

          <div>
            <div>{this.state.product[0].name}</div>
            <div>${(this.state.product[0].price / 100).toFixed(2)}</div>
            <div><strong>Short Description: </strong>{this.state.product[0].shortDes}</div>
            <button className="btn btn-lg bg-dark text-light m-5 pr-5 pl-5" onClick={() => {

              this.props.addtocart(this.props.view.params.id);
              this.setState({ modal: 'flex' });
            }}>Add to Cart</button>
          </div>
        </div>

        <div><strong>Long Description: </strong>{this.state.product[0].longDes}</div>
        <div className="detailsScreen" style={{ display: this.state.modal }}>
          <div className="detailsPopUp">
            <button id="xButton" onClick={() => { this.setState({ modal: 'none' }); }}><i className="fa fa-window-close" aria-hidden="true"></i></button>
            <h2 className="detailsPopUpText">You added {this.state.product[0].name} to your cart</h2>
          </div>
        </div>
      </div>
    );
  }
}
