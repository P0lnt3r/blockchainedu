import React, { useState, useEffect, useRef } from 'react';
import { Form , Divider , Button , Input, message } from 'antd';
import { queryDiscussReplies , update } from '@/services/discuss'


/** 输入项中 Label 与 Input 之间的间距调整 */
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
    width: 800
};
/** 输入表单中 底部按钮的位置调整 */
const tailLayout = {
    wrapperCol: { offset: 12, span: 12, }
};

export default ( props ) => {

    const [form] = Form.useForm();
    const { data , callback } = props;
    const { id , courseName , userName , title , discussTitle , discussContent } = data;

    const onFinish = async ( values ) => {
        const response = await update( {
            id:id , 
            title:values.title,
            content:values.content
        } );
        if ( response.code === '0' ){
            message.success('更新成功');
            callback();
        }
    }

    return (
        <Form
            form={form}
            {...layout}
            initialValues={ ({...data}) }
            onFinish={ onFinish }
        >
            <Form.Item name='courseName' label='课程'>
                { courseName }
            </Form.Item>
            <Form.Item name='title' label='标题'>
                { title ?  <Input /> : <>{discussTitle}</> }
            </Form.Item>

            {
                discussContent && 
                <Form.Item name='discussContent' label='问题内容'>
                    { discussContent }
                </Form.Item>
            }
            <Form.Item name='content' label='内容'>
                <Input.TextArea />
            </Form.Item>
            <Divider />
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
                <Divider type="vertical" />
                <Button type="default" onClick={() => form.resetFields()}>
                    重置
                </Button>
            </Form.Item>
        </Form>
    )
}