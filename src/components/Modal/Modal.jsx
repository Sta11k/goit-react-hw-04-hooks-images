import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ fullImageURL, exitModal }) {
  useEffect(() => {
    window.addEventListener('keydown', downKeyHandler);
    return () => {
      window.removeEventListener('keydown', downKeyHandler);
    };
  });

  const OverlayHandler = e => {
    if (e.currentTarget === e.target) {
      exitModal();
    }
  };

  const downKeyHandler = e => {
    if (e.code === 'Escape') {
      exitModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={OverlayHandler}>
      <div className="Modal">
        <img src={fullImageURL} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
