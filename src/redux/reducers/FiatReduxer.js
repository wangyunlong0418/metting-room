/**
 * @page
 * @author yunlong.wang
 * @Date 2018/6/4
 */

import FiatActionsType from '../actionsTypes/FiatActionsType';

const initialState = {
  productList: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FiatActionsType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.data
      };
    default:
      return state;
  }
}
