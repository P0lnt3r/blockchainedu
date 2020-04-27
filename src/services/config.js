// [ dev , test , prod ]
/**
 * dev:  开发环境
 * test: 测试环境
 * prod: 生产环境
 */
export const ENV = 'test';

const config = {
    dev:{
        bm_api_base: 'http://localhost:8080/api/bm',        
        publics_api_base: 'http://localhost:8080/api/publics'
    },
    test:{
        bm_api_base: 'http://localhost:8080/api/bm',        
        publics_api_base: 'http://localhost:8080/api/publics'
    },
    prod:{
        bm_api_base: 'http://127.0.0.1:8080'
    }
}

export const BM_API_BASE = config[ ENV ].bm_api_base;
export const PUBLICS_API_BASE = config[ ENV ].publics_api_base;


