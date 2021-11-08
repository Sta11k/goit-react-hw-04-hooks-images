import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.arreyImages.map(el => {
          console.log('FULLIMG', el.largeImageURL);
          return (
            <ImageGalleryItem
              key={el.id}
              webformatURL={el.webformatURL}
              showImageHandle={this.props.showImageHandler(el.largeImageURL)}
            />
          );
        })}
      </ul>
    );
  }
}
