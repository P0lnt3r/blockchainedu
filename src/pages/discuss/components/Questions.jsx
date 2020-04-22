import React, { useState, useEffect, useRef } from 'react';
import { Divider, Modal , message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import ProTable from '@ant-design/pro-table';
import Edit from './Edit'

import ResponseHandler from '@/utils/ResponseHandler'
import { queryDiscussQuestions , remove } from '@/services/discuss'

const { confirm } = Modal;

export default (props) => {

    const actionRef = useRef();
    const { course } = props;
    const parseCourseToValueEnum = () => {
        const valueEnum = {};
        course.forEach(course => {
            valueEnum[course.id] = { text: course.name }
        })
        return valueEnum;
    };

    const columns = [
        {
            title: '课程',
            dataIndex: 'courseId',
            hideInTable: true,
            valueEnum: parseCourseToValueEnum()
        },
        {
            title: '课程',
            dataIndex: 'courseName',
            hideInSearch: true,
        },
        {
            title: '标题',
            dataIndex: 'title',
            width:300,
            ellipsis: true,
        },
        {
            title: '问题内容',
            dataIndex: 'content',
            hideInSearch: true,
            width:400,
            ellipsis: true,
        },
        {
            title: '提问用户',
            dataIndex: 'userName',
        },
        {
            title: '身份',
            dataIndex: 'userType',
            hideInSearch: true,
            valueEnum: {
                1: {
                    text: '学生',
                },
                2: {
                    text: '老师',
                }
            },
            filters: [],
        },
        {
            title: '时间',
            dataIndex: 'createTime',
            hideInSearch: true
        },
        {
            title: '回答数量',
            dataIndex: 'replyCount',
            hideInSearch: true,
            render: (replyCount) => {
                return (
                    <a>{replyCount}</a>
                )
            }
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => (
                <>
                    <a onClick={() => { 
                        setData( record );
                        setEditVisible( true );
                     }} >编辑</a>
                    <Divider type="vertical" />
                    <a onClick={ () => {
                        confirmRemove( record.id );
                    } }>删除</a>
                </>
            ),
        },
    ]

    const [ editVisible , setEditVisible ] = useState( false );
    const [ data , setData ] = useState( undefined );

    const confirmRemove = ( id ) => {
        confirm({
            title: '你确定要删除这个问题吗?',
            icon: <ExclamationCircleOutlined />,
            content: '问题删除后将不再显示,同时关联问下的所有回复也将不可见.',
            onOk: async () => {
                const response = await remove(id);
                ResponseHandler.handle( response , () => {
                    message.success( '删除成功' );
                    actionRef.current.reload();
                } );
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }

    return (
        <>
            <ProTable style={{ width: '100%', minHeight: '400px' }}
                rowKey="id"
                columns={columns}
                options={false}
                toolBarRender={false}
                actionRef={actionRef}
                request={(params) => queryDiscussQuestions(params)}>
                
            </ProTable>

            <Modal
                width={800}
                visible={editVisible}
                footer={null}
                title='编辑'
                destroyOnClose
                onCancel={() => setEditVisible(false)}
            >
                <Edit data={data} callback={() => {
                    setEditVisible(false);
                    if ( actionRef.current ){
                        actionRef.current.reload();
                    }
                }}></Edit>
            </Modal>

        </>

    )

}
