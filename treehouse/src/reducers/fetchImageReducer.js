import { fetchProdImages } from '../actions/fetchImageAction';
import { FETCH_PROD_IMAGES } from '../actions/type';

const initialState = {
  prodimages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROD_IMAGES:
      console.log('fetch images reducer');
      return {
        ...state,
        prodimages: action.payload
      };
    default:
      return state;
  }
}
