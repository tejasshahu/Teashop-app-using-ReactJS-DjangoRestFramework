import { ProductConstant } from '../_constants/productmaster.constants';


export function productmaster(state = {}, action) {
  switch (action.type) {
    case ProductConstant.GET_PRODUCTS_REQUEST:
      return {
        product_list: []
      };
    case ProductConstant.GET_PRODUCTS_SUCCESS:
      return {
        product_list: action.payload,
      };
    case ProductConstant.GET_PRODUCTS_FAILURE:
      return {
        product_list: []
      };
    case ProductConstant.ADD_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ProductConstant.ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case ProductConstant.ADD_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case ProductConstant.DELETE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ProductConstant.DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case ProductConstant.DELETE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case ProductConstant.GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: false,
      }
    case ProductConstant.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productdetail: action.response,
        loading: false,
      }
    case ProductConstant.GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
