import { Button, Descriptions, Row, Col, Divider, Form, Input, Select, Switch } from 'antd';
import React, { useState,useEffect  } from 'react';
import styles from './style.less';
import { history } from 'umi';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

export default () => {

  useEffect( ()=>{
    window.document.title = '实训第二堂-数字货币交易';
  } )

  const [form] = Form.useForm();
  const [ advance,setAdvance ] = useState( false );

  return (
    <div className={styles.frame}>
      <div className={styles.frame_l}>
        <div className={styles.practical}>

          <div className={styles.h1}>实训第二堂</div>
          <div className={styles.h2}>数字货币交易</div>

          <Form {...layout} name='inputform' form={form} hideRequiredMark onFinish={(values) => history.push('/lessions/2/3')}
          >
            <div className={styles.tips}>Alice从Bob处用BTC购买了一杯咖啡，现在请按照右侧的付款信息进行转账</div>
            <br /><br />
            <Form.Item label='转账币种' name='token' hasFeedback rules={[{ required: true, message: '请选择币种' }]}>
              <Select
                placeholder="请选择要支付的代币"
                size='large'
                allowClear
              >
                <Select.Option value="bitcoin">Bitcoin</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name='assetName' hasFeedback label='转账金额' rules={[{ required: true, message: '输入转账金额' }]} >
              <Input size='large' placeholder='请输入要支付的金额' />
            </Form.Item>
            <Form.Item name='assetProd' label='收款地址' hasFeedback rules={[{ required: true, message: '输入收款地址' }]} >
              <Input size='large' placeholder='请输入收款地址' />
            </Form.Item>
            <Form.Item name='totalSupply' label='备注'>
              <Input size='large' placeholder='则选项为选填项' />
            </Form.Item>
            <Form.Item name='totalSupply' label='矿工费用'>
              0.00000312 BTC
            </Form.Item>
            <Form.Item name='1' label='高级选项'>
              <Switch onChange={ () => setAdvance( !advance ) }></Switch>
            </Form.Item>
            {
              advance && 
              <Form.Item label='OP_RETURN'>
                <Input size='large' placeholder='十六进制字符' />
              </Form.Item>
            }
            <div className={styles.clickbtn}>
              <Button type='primary' size='large' htmlType="submit">确认提交</Button>
            </div>
          </Form>
        </div>
      </div>

      <div className={styles.frame_r}>
        <div className={styles.tle}>
          <div className={styles.conbtc} >BTC</div>
        </div>
        <br />
        <div className={styles.btc} >
          <Row>
            <Col className={styles.title} offset={4}>Bob咖啡馆付款单</Col>
          </Row>
          <div className={styles.paybill}>
            <Row>
              <Col className={styles.basic} span={5}>付款信息</Col>
            </Row>
            <Row className={styles.desc}>
              <Col className={styles.label} offset={1} span={4}>应付款项</Col>
              <Col span={12} className={styles.content} >0.00000212BTC</Col>
            </Row>
            <Row className={styles.desc}>
              <Col className={styles.label} offset={1} span={4}>链上备注</Col>
              <Col span={12} className={styles.content} >你好，我是Alice</Col>
            </Row>
            <Row className={styles.desc}>
              <Col className={styles.label} offset={1} span={4}>收款地址</Col>
              <Col span={12} className={styles.content} >
              bc1qjl8uwezzlech723lpnyuza0h2cdkvxvh54v3dn
              </Col>
            </Row>
            <div className={ styles.tips } > 
              请在转账后，将交易ID展示给店员，谢谢配合
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
