export default function ImageGalleryItem({ webformatURL, showImageHandle }) {
  return (
    <li>
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={showImageHandle}
      />
    </li>
  );
}
