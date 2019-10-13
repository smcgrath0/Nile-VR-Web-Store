import React from 'react';
import DetailsCarousel from './details-carousel';
import RelatedCarousel from './related-products-carousel';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      images: null,
      modal: 'none'
    };
  }
  componentWillReceiveProps(nextProps) {
    fetch('/api/products.php?id=' + nextProps.view.params.id)
      .then(response => response.json())
      .then(product => {
        product[0].count = 1;
        var images = product[0].images;
        this.setState({ product, images });
      });
  }
  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.view.params.id)
      .then(response => response.json())
      .then(product => {
        product[0].count = 1;
        var images = product[0].images;
        this.setState({ product, images });
      });
  }
  render() {
    if (this.state.product === null || this.state.images === null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container mt-5 p-2 rounded" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="productDetails">
          <div className="mb-2 detailsCarousel">
            <DetailsCarousel images={this.state.images}/>
          </div>

          <div className="productInfo">
            <div className="detailsName">{this.state.product[0].name}</div>
            <div className="detailsPrice">${(this.state.product[0].price / 100).toFixed(2)}</div>
            <div><strong>Short Description: </strong>
              <p>{this.state.product[0].shortDes}</p>
            </div>
            <div className="addToCartButtonContainer">
              <button className="btn btn-lg text-light pr-5 pl-5 addToCartButton" onClick={() => {

                this.props.addtocart(this.props.view.params.id);
                this.setState({ modal: 'flex' });
              }}>Add to Cart</button>
            </div>
          </div>
        </div>

        <div><strong>Long Description: </strong>{this.state.product[0].longDes}</div>
        <div>
          <RelatedCarousel type={this.state.product[0].typeOfProduct}/>
        </div>
        <div className="detailsScreen" onClick={() => { this.setState({ modal: 'none' }); }} style={{ display: this.state.modal }}>
          <div className="detailsPopUp">
            <button id="xButton" onClick={() => { this.setState({ modal: 'none' }); }}><i className="fa fa-window-close" aria-hidden="true"></i></button>
            <h2 className="detailsPopUpText">You added {this.state.product[0].name} to your cart</h2>
            <div className="detailsButtonContainer">
              <button className="continueShopButton csB" onClick={() => {
                this.props.setView('catalog', { type: 'catalog' });
              }}><i className="fas fa-arrow-left"> </i> Continue Shopping</button>
              <button className="continueShopButton gtcB" onClick={() => {
                this.props.setView('checkoutform', {});
              }}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
