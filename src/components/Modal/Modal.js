import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleESCClick);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleESCClick);
  }
  handleESCClick = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.props.onClose}>
        <div className="Modal">
          <img src={this.props.imgUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
