import request from '@/utils/request';
import { PUBLICS_API_BASE } from '@/services/config';

export async function checkCode( code ){
    return request(`${PUBLICS_API_BASE}/checkCode` ,{
        method: 'POST',
        requestType: 'form',
        data: { code : code }
    } );
}

export async function queryCurrent(){
    const jwt = localStorage.getItem('jwt');
    return request(`${PUBLICS_API_BASE}/checkJWT` ,{
        method: 'POST',
        requestType: 'form',
        data: { jwt : jwt }
    } );
}

/**
 * @param {*} courseId : 课程ID
 */
export async function getQuestions( params ){
    return request(`${PUBLICS_API_BASE}/getQuestions` ,{
        params:{
           ...params
        }
    } );
}

export async function getQuestion( id ){
    return request(`${PUBLICS_API_BASE}/getQuestion` ,{
        params:{
           id:id
        }
    } );
}


/**
 * 获取回答列表
 * @param {*} discussId 问题ID
 */
export async function getReplies( params ){
    return request(`${PUBLICS_API_BASE}/getReplies` ,{
        params:{
            ...params
        }
    } );
}

/**
 * 回答
 * @param {*} discussId 问题ID
 */
export async function reply( data ){
    return request(`${PUBLICS_API_BASE}/reply` ,{
        method: 'POST',
        requestType: 'form',
        data: data
    } );
}

/**
 * 回答
 */
export async function question( data ){
    return request(`${PUBLICS_API_BASE}/question` ,{
        method: 'POST',
        requestType: 'form',
        data: data
    } );
}