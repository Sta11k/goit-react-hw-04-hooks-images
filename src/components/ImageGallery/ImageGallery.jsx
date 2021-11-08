import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ arreyImages, showImageHandler }) {
  return (
    <ul className="ImageGallery">
      {arreyImages.map(el => {
        console.log('FULLIMG', el.largeImageURL);
        return (
          <ImageGalleryItem
            key={el.id}
            webformatURL={el.webformatURL}
            showImageHandle={showImageHandler(el.largeImageURL)}
          />
        );
      })}
    </ul>
  );
}
