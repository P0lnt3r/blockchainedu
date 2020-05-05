import React, { useState, useEffect, useRef } from 'react';
import { Card, Typography, Alert, Row, Col, Divider, Tabs, Button, Modal, message } from 'antd';
import { queryDiscussReplies, remove } from '@/services/discuss'
import ProTable from '@ant-design/pro-table';
import Edit from './Edit';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ResponseHandler from '@/utils/ResponseHandler'

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
      title: '问题',
      dataIndex: 'discussTitle',
      width: 200,
      ellipsis: true,
    },
    {
      title: '回复内容',
      dataIndex: 'content',
      hideInSearch: true,
      width: 300,
      ellipsis: true,
    },
    {
      title: '回复用户',
      dataIndex: 'userName',
    },
    {
      title: '回答时间',
      dataIndex: 'createTime',
      hideInSearch: true
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a onClick={() => {
            setData(record);
            setEditVisible(true);
          }}>编辑</a>
          <Divider type="vertical" />
          <a onClick={() => {
            confirmRemove(record.id)
          }}>删除</a>
        </>
      ),
    },
  ]

  const [data, setData] = useState(undefined);
  const [editVisible, setEditVisible] = useState(false);

  const confirmRemove = (id) => {
    confirm({
      title: '你确定要删除这个回复吗?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk: async () => {
        const response = await remove(id);
        ResponseHandler.handle(response, () => {
          message.success('删除成功');
          actionRef.current.reload();
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <>
      <ProTable style={{ width: '100%', minHeight: '400px' }} rowKey="id" options={false}
        toolBarRender={false}
        columns={columns}
        actionRef={actionRef}
        pagination={{ pageSize: 10 }}
        request={(params) => queryDiscussReplies(params)}>
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
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }}></Edit>
      </Modal>

    </>

  )

}
