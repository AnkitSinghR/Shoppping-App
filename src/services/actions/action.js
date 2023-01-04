import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  data: data,
});

export const removeToCart = () => ({
  type: REMOVE_TO_CART,
});
