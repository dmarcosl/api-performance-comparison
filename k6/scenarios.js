import {check} from 'k6';
import {API} from './api.js';


export const SCENARIOS = {
    healthAPI: function (baseUrl, defaultHeader) {

        let healthMethod = API.health(defaultHeader, baseUrl)
        const isOkay = check(healthMethod, {
            'healthAPI with Status Code 200 Successfull': (r) => r.status === 200,
        });

        if (!isOkay) {
            throw new Error(`Error healthAPI: ${healthMethod}`)
        }
    },
    postItemAPI: function (baseUrl, defaultHeader) {

        let postItemMethod = API.postItem(defaultHeader, baseUrl, JSON.stringify(ITEM))
        const isOkay = check(postItemMethod, {
            'postItemAPI with Status Code 200 Successfull': (r) => r.status === 200,
        });

        if (!isOkay) {
            throw new Error(`Error postItemAPI: ${postItemMethod}`)
        }
    },
    getItemAPI: function (baseUrl, defaultHeader) {

        let id = Math.floor(Math.random() * 1000) + 1

        let healthMethod = API.getItem(defaultHeader, baseUrl, id)
        const isOkay = check(healthMethod, {
            'getItemAPI with Status Code 200 Successfull': (r) => r.status === 200,
        });

        if (!isOkay) {
            throw new Error(`Error getItemAPI: ${healthMethod}`)
        }
    },
    getItemListAPI: function (baseUrl, defaultHeader) {

        let healthMethod = API.getItemList(defaultHeader, baseUrl)
        const isOkay = check(healthMethod, {
            'getItemListAPI with Status Code 200 Successfull': (r) => r.status === 200,
        });

        if (!isOkay) {
            throw new Error(`Error getItemListAPI: ${healthMethod}`)
        }
    },
    getItemCacheAPI: function (baseUrl, defaultHeader) {

        let id = Math.floor(Math.random() * 1000) + 1

        let healthMethod = API.getItemCache(defaultHeader, baseUrl, id)
        const isOkay = check(healthMethod, {
            'getItemCacheAPI with Status Code 200 Successfull': (r) => r.status === 200,
        });

        if (!isOkay) {
            throw new Error(`Error getItemCacheAPI: ${healthMethod}`)
        }
    },
    getItemCacheListAPI: function (baseUrl, defaultHeader) {

        let healthMethod = API.getItemCacheList(defaultHeader, baseUrl)
        const isOkay = check(healthMethod, {
            'getItemCacheListAPI with Status Code 200 Successfull': (r) => r.status === 200,
        });

        if (!isOkay) {
            throw new Error(`Error getItemCacheListAPI: ${healthMethod}`)
        }
    },
}

export const ITEM = {
    "name": "Example Item",
    "description": "This is an example item.",
    "price": 19.99,
    "quantity": 100,
    "stock": 50,
    "category": "Electronics",
    "url": "https://example.com/item",
    "imageUrl": "https://example.com/item.jpg",
    "isActive": true
}