import http from 'k6/http';

export const API = {
    health: function (defaultHeader, baseUrl) {
        let url = `${baseUrl}/health`;
        return http.get(url, {
            headers: defaultHeader,
            tags: {
                endpoint: 'Health',
            },
        });
    },
    postItem: function (defaultHeader, baseUrl, body) {
        let url = `${baseUrl}/post-item`;
        return http.post(url, body, {
            headers: defaultHeader,
            tags: {
                endpoint: 'PostItem',
            },
        });
    },
    getItem: function (defaultHeader, baseUrl, id) {
        let url = `${baseUrl}/get-item/${id}`;
        return http.get(url, {
            headers: defaultHeader,
            tags: {
                endpoint: 'GetItem',
            },
        });
    },
    getItemList: function (defaultHeader, baseUrl) {
        let url = `${baseUrl}/get-item-list`;
        return http.get(url, {
            headers: defaultHeader,
            tags: {
                endpoint: 'GetItemList',
            },
        });
    },
    getItemCache: function (defaultHeader, baseUrl, id) {
        let url = `${baseUrl}/get-item-cache/${id}`;
        return http.get(url, {
            headers: defaultHeader,
            tags: {
                endpoint: 'GetItemCache',
            },
        });
    },
    getItemCacheList: function (defaultHeader, baseUrl) {
        let url = `${baseUrl}/get-item-cache-list`;
        return http.get(url, {
            headers: defaultHeader,
            tags: {
                endpoint: 'GetItemCacheList',
            },
        });
    },
}