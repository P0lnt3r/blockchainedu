import request from '@/utils/request';
import { PUBLICS_API_BASE } from '@/services/config';

/**
 * @param {*} courseId : 课程ID
 */
export async function getQuestions( courseId ){
    return request(`${PUBLICS_API_BASE}/getQuestions` ,{
        params:{
            type:1,
            page:1,
            size:5,
            courseId:courseId
        }
    } );
}

/**
 * 获取回答列表
 * @param {*} discussId 问题ID
 */
export async function getReplies( discussId ){
    return request(`${PUBLICS_API_BASE}/getReplies` ,{
        params:{
            type:1,
            page:1,
            size:5,
            discussId:discussId
        }
    } );
}