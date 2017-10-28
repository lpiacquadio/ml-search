import { createAction } from 'redux-actions';
import axios from 'axios';

var axiosInstance = axios.create({
    baseURL: 'https://api.mercadolibre.com',
    timeout: 60000
});

const getHeaders = function(params, contentType) {
    if (!params) {
        params = {};
    }
    if (!contentType) {
        contentType = 'application/json';
    }

    var headers = {
        'Accept': 'application/json',
        'Content-Type': contentType
    };

    return {
        headers,
        params
    };
};

const apiCall = function(method, url, data, config) {
    return axiosInstance[method](url, data, config).then(function(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    }).catch(function(error) {
        return Promise.reject({ error: error });
    })
};

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM_DETAIL = 'GET_ITEM_DETAIL';
export const GET_ITEM_DESCRIPTION = 'GET_ITEM_DESCRIPTION';

export const getItems = createAction(GET_ITEMS, function(query) {
    return apiCall('get', '/sites/MLA/search?q=' + query, getHeaders());
});

export const getItemDetail = createAction(GET_ITEM_DETAIL, function(id) {
    return apiCall('get', '/items/' + id, getHeaders());
});

export const getItemDescription = createAction(GET_ITEM_DESCRIPTION, function(id) {
    return apiCall('get', '/items/' + id + '/description', getHeaders());
});