import { ProductConstant } from '../_constants/productmaster.constants';
import { API_URL } from './utility.action';

export const productmaster_action = {
    get_product_list, add_product, delete_product
};

export const productdetail_action = {
    get_product_details
};

function get_product_list() {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return dispatch => {
        dispatch(request());
        fetch(`${API_URL}/products/`, requestOptions)
            .then(response => response.json())
            .then(function (response) {
                if (response) {
                    if (response.error_code === "0") {
                        dispatch(failure(response))
                    }
                    else {
                        dispatch(success(response))
                    }
                }
            });
    };
    function request() { return { type: ProductConstant.GET_PRODUCTS_REQUEST } }
    function success(payload) { return { type: ProductConstant.GET_PRODUCTS_SUCCESS, payload } }
    function failure(payload) { return { type: ProductConstant.GET_PRODUCTS_FAILURE, payload } }
}

function add_product(data) {

    const request_data = { "data": data }
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(request_data),
        headers: { 'Content-Type': 'application/json' }
    };

    return dispatch => {
        dispatch(request());
        fetch(`${API_URL}/products/`, requestOptions)
            .then(response => response.json())
            .then(function (response) {
                if (response) {
                    if (response.error_code === "0") {
                        dispatch(failure(response))
                    }
                    else {
                        dispatch(success(response))
                        dispatch(get_product_list())
                    }
                }
            });
    };
    function request() { return { type: ProductConstant.ADD_PRODUCTS_REQUEST } }
    function success(payload) { return { type: ProductConstant.ADD_PRODUCTS_SUCCESS, payload } }
    function failure(payload) { return { type: ProductConstant.ADD_PRODUCTS_FAILURE, payload } }
}

function delete_product(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        dispatch(request());
        fetch(`${API_URL}/product_operation/${id}/`, requestOptions)
            .then(response => response.json())
            .then(function (response) {
                if (response) {
                    if (response.error_code === "0") {
                        dispatch(failure(response))
                    }
                    else {
                        dispatch(success(response))
                        dispatch(get_product_list())
                    }
                }
            });
    };
    function request() { return { type: ProductConstant.DELETE_PRODUCTS_REQUEST } }
    function success(payload) { return { type: ProductConstant.DELETE_PRODUCTS_SUCCESS, payload } }
    function failure(payload) { return { type: ProductConstant.DELETE_PRODUCTS_FAILURE, payload } }
}

function get_product_details(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        dispatch(request());
        fetch(`${API_URL}/product_operation/${id}`, requestOptions)
            .then(response => response.json())
            .then(function (response) {
                if (response) {
                    if (response.error_code === "0") {
                        dispatch(failure(response))
                    }
                    else {
                        dispatch(success(response))
                    }
                }
            });
    };
    function request(id) { return { type: ProductConstant.GET_PRODUCT_DETAIL_REQUEST, id } }
    function success(response) { return { type: ProductConstant.GET_PRODUCT_DETAIL_SUCCESS, response } }
    function failure() { return { type: ProductConstant.GET_PRODUCT_DETAIL_FAILURE } }
}
