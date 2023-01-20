export const ADD_TO_CART = "ADD_TO_CART"; // ACTION TYPE
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"; // ACTION TYPE
import {
  CHANGE_THEME,
  SET_THIRDPARTY_SITE,
  TOGGLE_BANNER,
  CHANGE_BALANCE,
} from "../actionConstants";

/**
 *
 * @param {*} item
 * @returns
 * @description add to cart action
 */

export const changeTheme = (item) => ({
  type: CHANGE_THEME,
  payload: item,
});
export const toggleBanner = (item) => ({
  type: TOGGLE_BANNER,
  payload: item,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemName) => ({
  type: REMOVE_FROM_CART,
  payload: itemName,
});

export const setThirdParty = (site) => ({
  type: SET_THIRDPARTY_SITE,
  payload: site,
});

export const changeBalance = (bal) => ({
  type: CHANGE_BALANCE,
  payload: bal,
});
