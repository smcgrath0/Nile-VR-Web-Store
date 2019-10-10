import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="container pt-3 mr-2 mt-4 pb-1 rounded view" style={{ width: '250px', height: '600px', backgroundColor: '#FFFFFF' }}>
        <div className="rounded productItemImg" style={{ backgroundImage: 'url(' + this.props.image + ')' }}>

        </div>
        <div className="p-2 mt-2 mr-2 rounded" style={{ width: '225px' }}>
          <h3>{this.props.name}</h3>
          <h5>${(this.props.price / 100).toFixed(2)}</h5>
          <p>{this.props.short}</p>
        </div>
      </div>
    );
  }
}
