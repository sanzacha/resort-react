import { FETCH_PROD_IMAGES } from './type';

export const fetchProdImages = () => dispatch => {
  fetch('../assets/data/productCategories.json')
    .then(res => res.json())
    .then(prodimages =>
      dispatch({
        type: FETCH_PROD_IMAGES,
        payload: prodimages
      })
    );
};
