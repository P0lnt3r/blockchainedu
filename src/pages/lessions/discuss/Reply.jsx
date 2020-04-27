import React, { useState, useEffect, useRef } from 'react';
import { Form , Divider , Button , Input, message } from 'antd';
import { reply } from '@/services/publics'


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
    const { id , courseId , discussId, title , discussTitle , discussContent } = data;

    const onFinish = async ( values ) => {
        const response = await reply( {
            discussId:discussId ,
            content: values.reply,
            courseId:courseId,
            type:2
        } );
        message.success('回复成功');
        callback();
    }
    
    return (
        <Form
            form={form}
            {...layout}
            initialValues={ ({...data}) }
            onFinish={ onFinish }
        >
            <Form.Item name='title' label='问题标题'>
                { discussTitle }
            </Form.Item>
            {
                discussContent && 
                <Form.Item name='discussContent' label='问题内容'>
                    { discussContent }
                </Form.Item>
            }
            <Form.Item name='reply' label='我的回答'>
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