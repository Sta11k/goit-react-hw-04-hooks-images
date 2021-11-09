import axios from 'axios';

const MY_KEY = '20832523-2bf34066ca306390d6c2fd3bb';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 12;

const getImages = async (searchQuery, searchPage = 1) => {
  console.log('GetAPI', searchQuery);
  console.log('GetApiPAGE', searchPage);
  return await axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${searchPage}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`,
    )
    .then(response => response.data.hits);
  // .then(response => console.log(response.data.hits));
};

const PixabayFetchFunc = {
  getImages,
};

export default PixabayFetchFunc;
