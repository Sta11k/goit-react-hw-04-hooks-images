import './styles.css';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PixabayFetchFunc, { PER_PAGE } from './services/apiSearchImg';
import Searchbar from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '23145424-17de0e2191faefedd106abc58';
// const onLoader = 'false';
// const newPixabayFetchFunc = new PixabayFetchFunc(BASE_URL, API_KEY, onLoader);
// console.log('SEARCH', newPixabayFetchFunc);

export default function App(params) {
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchValue, setSearchValue] = useState('');
  const [modalOpen, setModalOpen] = useState(null);
  // const [onLoader, setOnLoader] = useState(false);
  const [arreyImages, setArreyImages] = useState([]);
  const [searchPage, setSearchPage] = useState(1);
  const [statusReuest, setStatusReuest] = useState('notInvolved');
  const [fullImageURL, setFullImageURL] = useState('');

  useEffect(() => {
    if (!searchQuery) return;
    setStatusReuest('pending');

    PixabayFetchFunc.getImages(searchQuery, searchPage).then(data => {
      if (data.length === 0 && searchPage === 1) {
        toast.error('Nothing found');
        setStatusReuest('notInvolved');
        return;
      }
      if (data.length === 0 && searchPage > 1) {
        toast.error('images is  absent');
        setStatusReuest('notInvolved');
        return;
      }

      const images = data.map(({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      }));

      setArreyImages(prev => [...prev, ...images]);
      setStatusReuest('resolved');
    });
  }, [searchQuery, searchPage]);

  useEffect(() => {
    if (arreyImages.length <= PER_PAGE) return;
    scrollHandler();
  }, [arreyImages]);

  const onsubmitHandler = submitSearchForm => {
    if (submitSearchForm.trim() === '') {
      toast.error('Invalid request');
      return;
    }
    setSearchPage(1);
    setArreyImages([]);
    setSearchQuery(submitSearchForm);
  };

  const scrollHandler = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  const toggleOpenModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      setModalOpen(prev => !prev);
    }
  };
  const handleClickImages = (e, url) => {
    setFullImageURL(url);
    toggleOpenModal(e);
    console.log(url);
    console.log('E', e);
  };

  const addPages = () => {
    setSearchPage(prev => prev + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onsubmitHandler} />

      {arreyImages.length > 0 && (
        <ImageGallery
          arreyImages={arreyImages}
          handleClick={handleClickImages}
        />
      )}

      {statusReuest === 'pending' && <Loader />}

      {statusReuest === 'resolved' && (
        <Button onClick={addPages} text="LOAD MORE..." />
      )}
      {modalOpen && (
        <Modal
          url={fullImageURL}
          // fullScrinImages={this.fullScrinImages}
          exitModal={toggleOpenModal}
        ></Modal>
      )}
      <Toaster />
    </div>
  );
}
