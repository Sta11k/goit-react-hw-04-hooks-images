import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ url, exitModal }) {
  useEffect(() => {
    const downKeyHandler = e => {
      exitModal(e);
    };

    window.addEventListener('keydown', downKeyHandler);
    return () => {
      window.removeEventListener('keydown', downKeyHandler);
    };
  }, [exitModal]);

  // const OverlayHandler = e => {
  //   if (e.currentTarget === e.target) {
  //     exitModal();
  //   }
  // };

  // const downKeyHandler = e => {
  //   if (e.code === 'Escape') {
  //     exitModal();
  //   }
  // };

  return createPortal(
    <div className="Overlay" onClick={exitModal}>
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
