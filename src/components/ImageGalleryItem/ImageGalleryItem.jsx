import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    // console.log(this.props.imgFull);
    return (
      <li>
        <img
          src={this.props.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.props.showImageHandle}
        />
      </li>
    );
  }
}
