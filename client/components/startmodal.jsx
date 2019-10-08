import React from 'react';

export default class StartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'block'
    };
  }
  render() {
    return (
      <div className="startScreen" style={{ display: this.state.modal }}>
        <div className="startPopUp">
          <h2 className="startPopUpText">This is a demo site.<br></br> There are no real products available for sale.</h2>
          <button id="xStartButton" onClick={() => {
            this.props.startModal();
            this.setState({ modal: 'none' });
          }}>I AGREE</button>
        </div>
      </div>
    );
  }
}
