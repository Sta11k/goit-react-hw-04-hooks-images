export function ImageGalleryItem({
  handleClick,
  image: { webformatURL, largeImageURL },
}) {
  return (
    <li>
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={e => handleClick(e, largeImageURL)}
      />
    </li>
  );
}
