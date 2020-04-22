import { Button, Descriptions, Row, Col, Divider, Form, Input,Select,Option } from 'antd';
import React, { useState } from 'react';
import styles from './style.less';
import { history } from 'umi';


const imgSrc_sy_l_1 = require('@/assets/lessions/sy_l_1.png');
const imgSrc_sy_r_1 = require('@/assets/lessions/sy_r_1.png');
const imgSrc_sy_r_2 = require('@/assets/lessions/sy_r_2.png');
const imgSrc_sy_r_3 = require('@/assets/lessions/sy_r_3.png');
const imgSrc_sy_r_4 = require('@/assets/lessions/sy_r_4.png');

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const formatNumber = (value) => {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`;
      num = num.slice(0, num.length - 3);
  }
  if (num) {
      result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

const btcInfo = [
  {
    title: '发行日期',
    content: '2010-02-02'
  },
]

export default () => {

  const [form] = Form.useForm();

  return (
    <div className={styles.frame}>
      <div className={styles.frame_l}>
        <div className={styles.practical}>

          <div className={styles.h1}>实训第一堂</div>
          <div className={styles.h2}>数字货币发行</div>

          <Form {...layout} name='inputform' form={form} hideRequiredMark onFinish={ (values) => history.push('/lessions/1/3') }
            >
            <div className={styles.tips}>请按照右侧资产实例,创建一个属于自己的数字资产吧!</div>
            <br/><br/>
            <Form.Item name='assetName' hasFeedback label='资产名称' rules={[{ required: true, message: '输入资产名称' }]} >
              <Input size='large' placeholder='请输入创建资产的中文名称' />
            </Form.Item>
            <Form.Item name='assetProd' label='资产简介' hasFeedback rules={[{ required: true, message: '输入资产简介' }]} >
              <Input size='large' placeholder='请输入创建资产的英文简称' />
            </Form.Item>
            <Form.Item label='发起人'>
              tb1q9nkqyh7yzmk57p7a3rx6jd2vqr7rhg9vyka7vr
            </Form.Item>
            <Form.Item name='totalSupply' label='发行总量' hasFeedback rules={[{ required: true, message: '输入发行总量' }]}>
              <Input size='large' placeholder='发行的代币资产数量,一经发布不可更改' />
            </Form.Item>
            <Form.Item label='小数位' name='float' hasFeedback rules={[{ required: true, message: '选择小数位' }]}>
              <Select
                placeholder="请选择资产小数位"
                size='large'
                allowClear
              >
                <Select.Option value="5">5</Select.Option>
                <Select.Option value="6">6</Select.Option>
                <Select.Option value="7">7</Select.Option>
                <Select.Option value="8">8</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='资产描述'>
              <Input.TextArea size='large' placeholder='描述内容可能被区块链浏览,交易所及各类区块链媒体引用。' />
            </Form.Item>

            <div className={styles.clickbtn}>
              <Button type='primary' size='large' htmlType="submit">确认提交</Button>
            </div>
          </Form>
        </div>
      </div>

      <div className={styles.frame_r}>
        <div className={styles.tle}>
          <div className={styles.ico} ><img src={imgSrc_sy_r_1} /></div>
          <div className={styles.conbtc} >BTC</div>
        </div>
        <br />

        <div className={styles.btc} >
          <Row>
            <Col className={styles.title} offset={4}>比特币 ( B T C )</Col>
          </Row>
          <div style={{ width: '90%', margin: 'auto' }}>
            <Divider style={{ backgroundColor:'#809ae8' }} />
          </div>
          <Row>
            <Col className={styles.basic} offset={4} span={4}>基本信息</Col>
          </Row>
          <Row className={styles.desc}>
            <Col className={styles.label} offset={4} span={4}>发行日期</Col>
            <Col span={12} className={styles.content} >2010-02-02</Col>
          </Row>
          <Row className={styles.desc}>
            <Col className={styles.label} offset={4} span={4}>发行总量</Col>
            <Col span={12} className={styles.content} >21,000,000</Col>
          </Row>
          <Row className={styles.desc}>
            <Col className={styles.label} offset={4} span={4}>白皮书</Col>
            <Col span={12} className={styles.content} >https://bitcoin.org/bitcoin.pdf</Col>
          </Row>
          <Row className={styles.desc}>
            <Col className={styles.label} offset={4} span={4}>小数位</Col>
            <Col span={12} className={styles.content} >8</Col>
          </Row>
          <Row className={styles.desc}>
            <Col className={styles.label} offset={4} span={4}>状态</Col>
            <Col span={12} className={styles.content} >流通中</Col>
          </Row>
          <Row className={styles.desc}>
            <Col className={styles.label} offset={4} span={4}>简介</Col>
            <Col span={12} className={styles.content} >
              比特币（Bitcoin）的概念最初由中本聪在2008年11月1日提出，并于2009年1月3日正式诞生 。根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的虚拟的加密数字货币。点对点的传输意味着一个去中心化的支付系统。
            </Col>
          </Row>
        </div>

      </div>

    </div>
  )
}
