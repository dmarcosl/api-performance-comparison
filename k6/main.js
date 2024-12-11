import {group} from 'k6';
import {SCENARIOS} from './scenarios.js';
import config from './config.js';

export const DEFAULT_HEADER = {'Content-Type': 'application/json'};
export const RUST_AXUM = 'Rust Axum'
export const JAVA_WEBFLUX = 'Java WebFlux'
export const JAVA_RESTCLIENT = 'Java RestClient'

export let options = {
    scenarios: {
        rustAxumHealth: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'rustAxumHealthTest',
            startTime: '120s',
        },
        rustAxumPostItem: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'rustAxumPostItemTest',
            startTime: '150s',
        },
        rustAxumGetItem: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'rustAxumGetItemTest',
            startTime: '180s',
        },
        rustAxumGetItemList: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'rustAxumGetItemListTest',
            startTime: '210s',
        },
        rustAxumGetItemCache: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'rustAxumGetItemCacheTest',
            startTime: '240s',
        },
        rustAxumGetItemCacheList: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'rustAxumGetItemCacheListTest',
            startTime: '270s',
        },
        //
        javaWebFluxHealth: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaWebFluxHealthTest',
            startTime: '300s',
        },
        javaWebFluxPostItem: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaWebFluxPostItemTest',
            startTime: '330s',
        },
        javaWebFluxGetItem: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaWebFluxGetItemTest',
            startTime: '360s',
        },
        javaWebFluxGetItemList: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaWebFluxGetItemListTest',
            startTime: '390s',
        },
        javaWebFluxGetItemCache: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaWebFluxGetItemCacheTest',
            startTime: '420s',
        },
        javaWebFluxGetItemCacheList: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaWebFluxGetItemCacheListTest',
            startTime: '450s',
        },
        //
        javaRestClientHealth: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaRestClientHealthTest',
            startTime: '480s',
        },
        javaRestClientPostItem: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaRestClientPostItemTest',
            startTime: '510s',
        },
        javaRestClientGetItem: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaRestClientGetItemTest',
            startTime: '540s',
        },
        javaRestClientGetItemList: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaRestClientGetItemListTest',
            startTime: '570s',
        },
        javaRestClientGetItemCache: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaRestClientGetItemCacheTest',
            startTime: '600s',
        },
        javaRestClientGetItemCacheList: {
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',
            exec: 'javaRestClientGetItemCacheListTest',
            startTime: '630s',
        },
    },
    thresholds: {
        http_req_duration: ['p(95)<50'],
    },
};

export function rustAxumHealthTest() {
    healthTest(RUST_AXUM, config.axumRustBaseUrl);
}

export function rustAxumPostItemTest() {
    postItemTest(RUST_AXUM, config.axumRustBaseUrl);
}

export function rustAxumGetItemTest() {
    getItemTest(RUST_AXUM, config.axumRustBaseUrl);
}

export function rustAxumGetItemListTest() {
    getItemListTest(RUST_AXUM, config.axumRustBaseUrl);
}

export function rustAxumGetItemCacheTest() {
    getItemCacheTest(RUST_AXUM, config.axumRustBaseUrl);
}

export function rustAxumGetItemCacheListTest() {
    getItemCacheListTest(RUST_AXUM, config.axumRustBaseUrl);
}

//

export function javaWebFluxHealthTest() {
    healthTest(JAVA_WEBFLUX, config.javaWebFluxBaseUrl);
}

export function javaWebFluxPostItemTest() {
    postItemTest(JAVA_WEBFLUX, config.javaWebFluxBaseUrl);
}

export function javaWebFluxGetItemTest() {
    getItemTest(JAVA_WEBFLUX, config.javaWebFluxBaseUrl);
}

export function javaWebFluxGetItemListTest() {
    getItemListTest(JAVA_WEBFLUX, config.javaWebFluxBaseUrl);
}

export function javaWebFluxGetItemCacheTest() {
    getItemCacheTest(JAVA_WEBFLUX, config.javaWebFluxBaseUrl);
}

export function javaWebFluxGetItemCacheListTest() {
    getItemCacheListTest(JAVA_WEBFLUX, config.javaWebFluxBaseUrl);
}

//

export function javaRestClientHealthTest() {
    healthTest(JAVA_RESTCLIENT, config.javaRestClientBaseUrl);
}

export function javaRestClientPostItemTest() {
    postItemTest(JAVA_RESTCLIENT, config.javaRestClientBaseUrl);
}

export function javaRestClientGetItemTest() {
    getItemTest(JAVA_RESTCLIENT, config.javaRestClientBaseUrl);
}

export function javaRestClientGetItemListTest() {
    getItemListTest(JAVA_RESTCLIENT, config.javaRestClientBaseUrl);
}

export function javaRestClientGetItemCacheTest() {
    getItemCacheTest(JAVA_RESTCLIENT, config.javaRestClientBaseUrl);
}

export function javaRestClientGetItemCacheListTest() {
    getItemCacheListTest(JAVA_RESTCLIENT, config.javaRestClientBaseUrl);
}

//

export function healthTest(title, baseUrl) {
    // console.log(title + ' - Health');
    group(title + ' - Health', () => {
        SCENARIOS.healthAPI(baseUrl, DEFAULT_HEADER);
    });
}

export function postItemTest(title, baseUrl) {
    // console.log(title + ' - Post Item');
    group(title + ' - Post Item', () => {
        SCENARIOS.postItemAPI(baseUrl, DEFAULT_HEADER);
    });
}

export function getItemTest(title, baseUrl) {
    // console.log(title + ' - Get Item');
    group(title + ' - Get Item', () => {
        SCENARIOS.getItemAPI(baseUrl, DEFAULT_HEADER);
    });
}

export function getItemListTest(title, baseUrl) {
    // console.log(title + ' - Get Item List');
    group(title + ' - Get Item List', () => {
        SCENARIOS.getItemListAPI(baseUrl, DEFAULT_HEADER);
    });
}

export function getItemCacheTest(title, baseUrl) {
    // console.log(title + ' - Get Item Cache');
    group(title + ' - Get Item Cache', () => {
        SCENARIOS.getItemCacheAPI(baseUrl, DEFAULT_HEADER);
    });
}

export function getItemCacheListTest(title, baseUrl) {
    // console.log(title + ' - Get Item Cache List');
    group(title + ' - Get Item Cache List', () => {
        SCENARIOS.getItemCacheListAPI(baseUrl, DEFAULT_HEADER);
    });
}
