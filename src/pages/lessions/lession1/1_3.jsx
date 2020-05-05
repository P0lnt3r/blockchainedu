import { Button , Modal } from 'antd';
import React, { useState,useEffect } from 'react';
import styles from './style.less';
import { history } from 'umi';
import { CheckCircleTwoTone  } from '@ant-design/icons';

const imgSrc_sy_r_2 = require('@/assets/lessions/sy_r_2.png');
const imgSrc_sy_r_3 = require('@/assets/lessions/sy_r_3.png');
const imgSrc_yxzb_bg = require('@/assets/lessions/yxzb_bg.png');

const confirm = Modal.confirm;

const nextConfirm = function(){
  Modal.confirm({
    icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    title: '提示',
    content: (
      <div>
        <p>本堂实训已完成，是否进入下一堂实训?</p>
      </div>
    ),
    okText:'确定',
    cancelText: '取消',
    onOk() {
      history.push('/lessions/2')
    },
  });
}

export default () => {

  useEffect( ()=>{
    window.document.title = '实训第一堂-数字货币发行';
  } )

  return (
    <div className={styles.frame}>
      <div className={styles.frame_l}>
        <div className={styles.practical}>

          <div className={styles.h1}>实训第一堂</div>
          <div className={styles.h2}>数字货币发行</div>

          <div className={styles.con_third} >

            <div className={styles.congra}>恭喜你，本节实训完成！</div>
            <div className={styles.quesTitle}>下面我们来对之前的思考题进行解答 : </div>

            <div className={styles.ques1}><span>发行后的数字资产（如BTC），是如何被赋予价值的呢？</span></div>
            <div className={styles.ques2}><span>是否所有数字货币资产都有价值？</span></div>
            <div className={styles.ques3}><span>能否总结出一套对价值评判的标准？</span></div>

          </div>
          
          <div className={styles.clickbtn}>
            <Button type='primary' size='large' onClick={ ()=> nextConfirm() }>进入下一堂实训</Button>
          </div>

        </div>
      </div>

      <div className={styles.frame_r}>
        <div className={styles.tle}>
          <div className={styles.con} >预习准备</div>
        </div>

        <div className={styles.block} >
          <div className={styles.con} >
            <div className={styles.bjnd} >
              <div className={styles.ico} >
                <img src={imgSrc_sy_r_2} />  下节难度:<font>中</font><br />
              </div>
              <span>
                1. 发行后的资产都在同一地址，如何转出？<br />
                2. 一笔链上资产的转出需要哪些要素？<br />
                3. 主流公链的转账分别需要多久？
              </span>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.con}>
            
            <div className={styles.bjnd} >
              <div className={styles.ico} >
                <img src={imgSrc_sy_r_3} /> 思考题 <br />
              </div>
              <span>
                1. 主流公链可以从BTC、ETH、EOS开始<br />
                2. 数字货币交易涉及到一个很重要的概念——矿工费<br />
                3. BTC转账不够理想，出现了“闪电网络”<br />
                4. 对转账速度的提升中，EOS选择了一种特殊的方式，而它是以牺牲什么为代价的？你怎么看？
              </span>
            </div>
          </div>
        </div>
        <div className={ styles.yxzb_img }><img src={imgSrc_yxzb_bg} /></div>
      </div>

    </div>
  )
}
