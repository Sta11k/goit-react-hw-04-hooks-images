import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.downKeyHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.downKeyHandler);
  }

  OverlayHandler = e => {
    if (e.currentTarget === e.target) {
      this.props.exitModal();
    }
  };

  downKeyHandler = e => {
    if (e.code === 'Escape') {
      this.props.exitModal();
    }
  };

  render() {
    // console.log('object :>> ', this.props.fullImageURL);
    return createPortal(
      <div className="Overlay" onClick={this.OverlayHandler}>
        <div className="Modal">
          <img src={this.props.fullImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
