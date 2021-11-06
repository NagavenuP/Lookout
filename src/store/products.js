/**
 * @description Products reducer
 */

export const SAVE_PRODUCTS = "items/SAVE_PRODUCTS";
export const SAVE_SEARCH_TXT = "SAVE_SEARCH_TEXT";
export function saveProducts(products) {
  return {
    type: SAVE_PRODUCTS,
    payload: products,
  };
}
export function searchText(searchText) {
  return (dispatch) => {
    dispatch({
      type: SAVE_SEARCH_TXT,
      payload: searchText,
    });
  };
}

const defaultState = {
  list: [], isLoading: false, searchText: ""
}

/**
 * @description Products reducer
 * @param {*} state products state
 * @param {*} action action which is triggered
 * @returns {*} state
 */
export default function items(
  state = defaultState,
  action
) {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return { ...state, isLoading: false, list: action.payload };
    case SAVE_SEARCH_TXT:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
}
