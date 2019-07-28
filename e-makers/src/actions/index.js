import axios from "axios";

//get shops actions & action creators
export const FETCH_SHOP_START = "FETCH_SHOP_START";
export const FETCH_SHOP_SUCCESS = "FETCH_SHOP_SUCCESS";
export const FETCH_SHOP_FAILURE = "FETCH_SHOP_FAILURE";

export const getShops = () => dispatch => {
  dispatch({ type: FETCH_SHOP_START });
  axios
    .get(
      "https://openapi.etsy.com/v2/listings/active?api_key=process.env.REACT_APP_API_KEY"
    )
    .then(res => {
      console.log("Shop Data Response", res);
      dispatch({ type: FETCH_SHOP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SHOP_FAILURE, payload: err.response });
    });
};
