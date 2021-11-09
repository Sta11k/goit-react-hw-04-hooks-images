import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ arreyImages, handleClick }) {
  return (
    <ul className="ImageGallery">
      {arreyImages.map(el => {
        console.log('FULLIMG', el.largeImageURL);
        return (
          <ImageGalleryItem key={el.id} image={el} handleClick={handleClick} />
        );
      })}
    </ul>
  );
}
