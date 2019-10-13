import React, { Component } from 'react';
import AppContext from '../context.js';

class RelatedCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isClicked: false,
      images: []
    };
    this.items = [];
    this.counter = 0;
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.getProducts(nextProps);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts(nextProps) {
    var type = 'catalog';
    if (this.props.type) {
      switch (this.props.type) {
        case 'systems':
          type = 'accessories';
          break;
        case 'accessories':
          type = 'systems';
          break;
        case 'games':
          type = 'games';
          break;
      }
    }
    if (nextProps) {
      switch (nextProps.type) {
        case 'systems':
          type = 'accessories';
          break;
        case 'accessories':
          type = 'systems';
          break;
        case 'games':
          type = 'games';
          break;
      }
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
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  nameHandler(name) {
    if (name.length > 7) {
      return (name.substring(0, 6) + '...');
    } else {
      return name;
    }
  }
  render() {
    if (this.state.products.length === 0) {
      return null;
    }
    return (
      <>
        <div className="relatedTitle d-flex justify-content-center align-items-center pb-1">
          <h3>You also might want ...</h3>
        </div>
        <div className="relatedContainer d-flex justify-content-between">
          {this.state.products.map(item => {
            return (
              <div className="relatedCardContainer scroller" key={item.id} onClick={ () => {
                this.context.setView('details', { id: parseInt(item.id) });
              }}>
                <div className="relatedImgContainer">
                  <div className="relatedImg" style={{ backgroundImage: 'url(' + item.images[0] + ')', backgroundSize: 'contain' }}>

                  </div>
                </div>
                <div className="relatedNameContainer">
                  <h4>{this.nameHandler(item.name)}</h4>
                </div>
                <div className="relatedPriceContainer">
                  <h5>${(item.price / 100).toFixed(2)}</h5>
                </div>
              </div>
            );
          })}
          <div className="d-flex align-items-center">
            <div className="viewmore text-center" style={{ width: '150px' }} onClick={ () => {
              this.context.setView('catalog', { type: 'catalog' });
            }}>
              <i className="fas fa-arrow-right"> </i>
              <br></br>
              View More
            </div>
          </div>
        </div>
      </>
    );

  }
}
RelatedCarousel.contextType = AppContext;
export default RelatedCarousel;
