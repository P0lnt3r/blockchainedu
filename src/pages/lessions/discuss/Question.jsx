import React, { useState, useEffect, useRef } from 'react';
import { Form , Divider , Button , Input, message } from 'antd';
import { question } from '@/services/publics'


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
    const { id , name } = data;
    console.log( data );

    const onFinish = async ( values ) => {
        const response = await question( {
            title:values.title ,
            content: values.content,
            courseId:id,
            type:1
        } );
        message.success('提问成功');
        callback();
    }
    
    return (
        <Form
            form={form}
            {...layout}
            initialValues={ ({...data}) }
            onFinish={ onFinish }
        >
            <Form.Item name='name' label='课程'>
                { name }
            </Form.Item>
            <Form.Item name='title' label='问题标题' rules={[{ required: true, message: '请输入问题标题' }]}>
                <Input />
            </Form.Item>
            <Form.Item name='content' label='问题内容' rules={[{ required: true, message: '请输入问题内容' }]}>
                <Input.TextArea style={{ height:'200px' }} />
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