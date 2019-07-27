import {
  FETCH_SHOP_START,
  FETCH_SHOP_SUCCESS,
  FETCH_SHOP_FAILURE
} from "../actions";

const initialState = {
  shops: [],
  error: "",
  fetchingShops: false,
  addingShops: false
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOP_START:
      return {
        ...state,
        error: "",
        fetchingShops: true
      };
    case FETCH_SHOP_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingShops: false,
        shops: action.payload
      };
    case FETCH_SHOP_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingShops: false
      };
  }
};

export default shopReducer;
