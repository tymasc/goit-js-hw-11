import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        color: "red",
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: 'Failed to load images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
