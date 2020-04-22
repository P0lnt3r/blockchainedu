import request from '@/utils/request';
import { adaptParams, adaptResponse } from '@/utils/ProTableDataAdapter';
import { BM_API_BASE } from '@/services/config';

export async function listCourse() {
    return request(`${BM_API_BASE}/cms/course/list`)
}

/**
 * ProTable -> 查询问题列表
 */
export async function queryDiscussQuestions(params) {
    const response = await request(`${BM_API_BASE}/cms/discuss/queryQuestions`, { params: adaptParams({ type: 1, ...params }) });
    return adaptResponse(response);
}

/**
 * ProTable -> 查询回复列表
 */
export async function queryDiscussReplies(params) {
    const response = await request(`${BM_API_BASE}/cms/discuss/queryReplies`, { params: adaptParams({ type: 2, ...params }) });
    return adaptResponse(response);
}

export async function update(data) {
    return request(`${BM_API_BASE}/cms/discuss/update`, {
        method: 'POST',
        requestType: 'form',
        data: data
    })
}

export async function remove( id ){
    return request(`${BM_API_BASE}/cms/discuss/remove`, {
        method: 'POST',
        requestType: 'form',
        data: { id:id }
    })
}