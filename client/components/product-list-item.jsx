import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: 'off',
      border: '20px'
    };
    this.viewProduct = this.viewProduct.bind(this);
    this.unviewProduct = this.unviewProduct.bind(this);
  }
  viewProduct() {
    this.setState({ popUp: 'on', border: '0px' });
  }
  unviewProduct() {
    this.setState({ popUp: 'off', border: '20px' });
  }
  render() {
    return (
      <div className="container pt-3 mr-2 mt-4 pb-1 rounded view" onMouseEnter={this.viewProduct} onMouseLeave={this.unviewProduct} style={{ width: '250px', height: '670px', backgroundColor: '#FFFFFF', borderBottom: this.state.border + ' solid black' }}>
        <div className="rounded productItemImg" style={{ backgroundImage: 'url(' + this.props.image + ')' }}>

        </div>
        <div className="p-2 mt-2 mr-2 rounded" style={{ width: '225px' }}>
          <h3>{this.props.name}</h3>
          <h5>${(this.props.price / 100).toFixed(2)}</h5>
          <p>{this.props.short}</p>
        </div>
        <div className={'viewMoreItemText ' + this.state.popUp} >
          <p>View More</p>
        </div>
      </div>
    );
  }
}
