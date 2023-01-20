import {
  CHANGE_THEME,
  TOGGLE_BANNER,
  SET_THIRDPARTY_SITE,
  CHANGE_BALANCE,
} from "../actionConstants";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/app"; //action

const intiialState = {
  cartItems: [], // multiple
  isDarkModeOn: false,
  bannerScrolled: true,
  thirdPartySite: "",
  disableBottom: false,
  myBalance: 2000,
  enableBackWithBal: false,
};

export default function (state = intiialState, action) {
  // console.log(state, "state");
  const { type, payload } = action;
  switch (type) {
    case CHANGE_THEME: {
      return {
        ...state,
        isDarkModeOn: !state.isDarkModeOn,
      };
    }
    case SET_THIRDPARTY_SITE: {
      return {
        ...state,
        thirdPartySite: payload,
        disableBottom: !state.disableBottom,
      };
    }
    case CHANGE_BALANCE: {
      return {
        ...state,
        myBalance: payload,
      };
    }
    case TOGGLE_BANNER: {
      return {
        ...state,
        bannerScrolled: !state.bannerScrolled,
      };
    }
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case REMOVE_FROM_CART:
      const itemsLeft = state.cartItems?.filter((item, index) => {
        if (item?.name != payload) return item;
      });
      console.log({ itemsLeft });
      return {
        ...state,
        cartItems: [...itemsLeft],
      };
    default:
      return state;
  }
}
